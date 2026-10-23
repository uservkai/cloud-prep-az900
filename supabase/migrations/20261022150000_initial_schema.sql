-- CloudPrep AZ-900 | Initial Supabase PostgreSQL schema
-- Version: 1.0 | October 2026
-- Run once in the SQL Editor of your INDEPENDENT Supabase project.
-- This creates an empty schema. It does not import the 54 existing TypeScript questions.
-- Safe design: question answer keys are NOT readable through the public client API.
-- Keep the existing local question bank active until a reviewed migration and server grading are implemented.

begin;

create extension if not exists pgcrypto with schema extensions;

-- 1. Official AZ-900 domains and skill groups.
-- IDs remain TEXT to match existing application identifiers (e.g. d1-cloud-computing).
create table public.topics (
  id text primary key,
  domain_id text not null check (domain_id in ('d1', 'd2', 'd3')),
  parent_id text references public.topics(id) on delete restrict,
  title text not null,
  description text,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  check (length(trim(id)) > 0),
  check (length(trim(title)) > 0),
  check (parent_id is null or parent_id <> id)
);

create index topics_domain_sort_idx on public.topics(domain_id, sort_order);
create index topics_parent_idx on public.topics(parent_id);

-- 2. Author-reviewed question bank. Not directly exposed to browser clients:
--    correct_option_id and explanations would reveal answers before submission.
create table public.questions (
  id text primary key,  -- preserve all existing src/data/questions.ts IDs
  topic_id text not null references public.topics(id) on delete restrict,
  skill_objective text not null,
  difficulty text not null check (difficulty in ('foundational', 'intermediate', 'scenario', 'challenging')),
  stem text not null,
  question_type text not null default 'single_select'
    check (question_type in ('single_select', 'multi_select', 'true_false')),
  options jsonb not null,
  correct_option_id text, -- compatible with the existing single-select QuizQuestion type
  correct_option_ids text[], -- for future multi-select questions
  correct_explanation text not null,
  option_explanations jsonb not null,
  source_label text,
  source_url text,
  review_status text not null default 'needs-verification'
    check (review_status in ('reviewed', 'needs-verification')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  check (length(trim(stem)) > 0),
  check (jsonb_typeof(options) = 'array' and jsonb_array_length(options) >= 2),
  check (jsonb_typeof(option_explanations) = 'object'),
  check (correct_option_id is not null or coalesce(array_length(correct_option_ids, 1), 0) > 0),
  check (review_status <> 'reviewed' or (source_url is not null and length(trim(source_url)) > 0))
);

create index questions_topic_review_idx on public.questions(topic_id, review_status);
create index questions_difficulty_idx on public.questions(difficulty);

-- 3. Public learner profile associated with an auth.users account.
create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- 4. User-owned assessment attempts.
-- Scores are client-supplied and intended for PERSONAL PRACTICE only;
-- not trusted official exam results. Implement server-side grading later.
create table public.quiz_sessions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  mode text not null default 'practice'
    check (mode in ('practice', 'assessment', 'mock', 'mixed', 'topic', 'weak_areas')),
  domain_id text check (domain_id is null or domain_id in ('d1', 'd2', 'd3')),
  topic_id text references public.topics(id) on delete set null,
  difficulty text,
  status text not null default 'in_progress'
    check (status in ('in_progress', 'completed', 'abandoned')),
  question_ids text[] not null default '{}',
  current_question_index integer not null default 0 check (current_question_index >= 0),
  total_questions integer not null check (total_questions > 0),
  correct_count integer check (correct_count >= 0 and correct_count <= total_questions),
  score_percent numeric(5,2) check (score_percent between 0 and 100),
  duration_seconds integer check (duration_seconds is null or duration_seconds >= 0),
  started_at timestamptz not null default now(),
  deadline_at timestamptz,
  completed_at timestamptz,
  updated_at timestamptz not null default now(),
  check (cardinality(question_ids) <= total_questions),
  check (status <> 'completed' or completed_at is not null)
);

create index quiz_sessions_user_started_idx on public.quiz_sessions(user_id, started_at desc);
create index quiz_sessions_user_status_idx on public.quiz_sessions(user_id, status);

-- 5. User-owned responses. Answer correctness is a practice metric, not server-verified.
create table public.quiz_answers (
  id uuid primary key default gen_random_uuid(),
  session_id uuid not null references public.quiz_sessions(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  question_id text not null,  -- existing IDs remain valid before DB migration
  selected_option_ids text[] not null default '{}',
  is_correct boolean,
  confidence text check (confidence in ('sure', 'unsure', 'guessing')),
  time_spent_seconds integer check (time_spent_seconds is null or time_spent_seconds >= 0),
  answered_at timestamptz not null default now(),
  unique (session_id, question_id),
  check (cardinality(selected_option_ids) > 0)
);

create index quiz_answers_user_time_idx on public.quiz_answers(user_id, answered_at desc);
create index quiz_answers_question_idx on public.quiz_answers(question_id);

-- Automatic updated_at timestamps.
create function public.cloudprep_touch_updated_at()
returns trigger language plpgsql set search_path = '' as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger questions_touch_updated_at before update on public.questions
for each row execute function public.cloudprep_touch_updated_at();
create trigger profiles_touch_updated_at before update on public.profiles
for each row execute function public.cloudprep_touch_updated_at();
create trigger quiz_sessions_touch_updated_at before update on public.quiz_sessions
for each row execute function public.cloudprep_touch_updated_at();

-- Provision profile when a Supabase Auth user signs up.
create function public.cloudprep_new_user_profile()
returns trigger language plpgsql security definer set search_path = '' as $$
begin
  insert into public.profiles(id, display_name)
  values (new.id, nullif(left(new.raw_user_meta_data ->> 'display_name', 120), ''))
  on conflict (id) do nothing;
  return new;
end;
$$;

create trigger cloudprep_on_auth_user_created
  after insert on auth.users for each row execute function public.cloudprep_new_user_profile();

-- Restrict privileges AND turn on RLS for every exposed public table.
alter table public.topics enable row level security;
alter table public.questions enable row level security;
alter table public.profiles enable row level security;
alter table public.quiz_sessions enable row level security;
alter table public.quiz_answers enable row level security;

revoke all on public.topics, public.questions, public.profiles,
  public.quiz_sessions, public.quiz_answers from anon, authenticated;

-- Syllabus/topic data is not secret.
grant select on public.topics to anon, authenticated;
create policy "Anyone reads syllabus topics" on public.topics
for select to anon, authenticated using (true);

-- IMPORTANT: no anon/authenticated grants or policies on questions.
-- Only SQL Editor/server-side privileged imports may read or write answer keys.

-- Learners may only see/update their own profile; user IDs cannot be changed
-- via UPDATE because only display_name is granted for updates.
grant select on public.profiles to authenticated;
grant update(display_name) on public.profiles to authenticated;
create policy "Read own profile" on public.profiles for select to authenticated
using ((select auth.uid()) = id);
create policy "Update own profile" on public.profiles for update to authenticated
using ((select auth.uid()) = id) with check ((select auth.uid()) = id);

-- Users can create and view their own sessions. Allow updating only fields
-- needed for saved progress; other fields (including user_id) are immutable
-- from ordinary clients because no column UPDATE privilege is granted.
grant select, insert on public.quiz_sessions to authenticated;
grant update(status, current_question_index, correct_count, score_percent,
  duration_seconds, completed_at) on public.quiz_sessions to authenticated;
create policy "Read own sessions" on public.quiz_sessions for select to authenticated
using ((select auth.uid()) = user_id);
create policy "Create own sessions" on public.quiz_sessions for insert to authenticated
with check ((select auth.uid()) = user_id);
create policy "Update own sessions" on public.quiz_sessions for update to authenticated
using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);

-- Learners can read/insert their own responses only when session ownership matches.
grant select, insert on public.quiz_answers to authenticated;
create policy "Read own answers" on public.quiz_answers for select to authenticated
using ((select auth.uid()) = user_id);
create policy "Add answer to own session" on public.quiz_answers for insert to authenticated
with check (
  (select auth.uid()) = user_id and
  exists (
    select 1 from public.quiz_sessions qs
    where qs.id = session_id
      and qs.user_id = (select auth.uid())
      and qs.status = 'in_progress'
  )
);

-- Keep helper functions inaccessible to ordinary clients.
revoke all on function public.cloudprep_touch_updated_at() from public, anon, authenticated;
revoke all on function public.cloudprep_new_user_profile() from public, anon, authenticated;

commit;

-- POST-MIGRATION CHECKS (run manually if desired):
-- select tablename, rowsecurity from pg_tables where schemaname = 'public' and tablename in
-- ('topics','questions','profiles','quiz_sessions','quiz_answers');
-- select count(*) from public.questions; -- expected 0 until import
-- NOTE: quiz scoring is not tamper-proof until moved to a server-side grading function.
