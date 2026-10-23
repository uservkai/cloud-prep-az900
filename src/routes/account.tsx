import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { CheckCircle2, UserRound } from "lucide-react";
import type { User } from "@supabase/supabase-js";
import { createClient } from "@/lib/supabase/client";

export const Route = createFileRoute("/account")({
  head: () => ({
    meta: [
      { title: "Account settings — CloudPrep AZ-900" },
      {
        name: "description",
        content: "Manage your CloudPrep account display name.",
      },
    ],
  }),
  component: AccountSettings,
});

function AccountSettings() {
  const [user, setUser] = useState<User | null>(null);
  const [authReady, setAuthReady] = useState(false);
  const [name, setName] = useState("");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    let active = true;
    const supabase = createClient();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (!active) return;

      if (
        event === "INITIAL_SESSION" ||
        event === "SIGNED_IN" ||
        event === "SIGNED_OUT" ||
        event === "USER_UPDATED"
      ) {
        const nextUser = session?.user ?? null;

        setUser(nextUser);
        setAuthReady(true);

        const displayName = nextUser?.user_metadata?.["display_name"];

        setName(typeof displayName === "string" ? displayName : "");
      }
    });

    return () => {
      active = false;
      subscription.unsubscribe();
    };
  }, []);

  async function handleSave(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!user || saving) return;

    const trimmedName = name.trim();

    if (!trimmedName) {
      setError("Please enter a display name.");
      setSuccess(false);
      return;
    }

    if (trimmedName.length > 60) {
      setError("Display name must be 60 characters or fewer.");
      setSuccess(false);
      return;
    }

    setSaving(true);
    setError(null);
    setSuccess(false);

    try {
      const supabase = createClient();

      const { data: current, error: sessionError } = await supabase.auth.getUser();

      if (sessionError) throw sessionError;

      if (current.user?.id !== user.id) {
        setError("Your session has changed. Please sign in again.");
        return;
      }

      const { error: updateError } = await supabase.auth.updateUser({
        data: {
          display_name: trimmedName,
        },
      });

      if (updateError) throw updateError;

      setName(trimmedName);
      setSuccess(true);
    } catch (err) {
      console.error("Could not update display name:", err);
      setError("Unable to save your changes. Please try again.");
    } finally {
      setSaving(false);
    }
  }

  if (!authReady) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <p className="text-sm text-muted-foreground">Loading account settings...</p>
      </main>
    );
  }

  if (!user) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <h1 className="font-display text-2xl font-bold text-foreground">Sign in required</h1>

        <p className="mt-3 text-sm text-muted-foreground">
          Sign in to manage your CloudPrep account.
        </p>

        <Link
          to="/auth"
          className="mt-6 inline-flex rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90"
        >
          Sign in
        </Link>
      </main>
    );
  }

  const currentName =
    typeof user.user_metadata?.["display_name"] === "string"
      ? user.user_metadata["display_name"]
      : "";

  return (
    <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <div className="mb-8">
        <h1 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
          Account settings
        </h1>

        <p className="mt-2 text-sm text-muted-foreground">
          Manage how your name appears in CloudPrep.
        </p>
      </div>

      <section className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
        <div className="mb-8 flex items-center gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand-soft text-primary">
            <UserRound className="h-6 w-6" aria-hidden />
          </div>

          <div className="min-w-0">
            <h2 className="truncate font-display text-lg font-semibold text-foreground">
              {currentName || user.email?.split("@")[0] || "Learner"}
            </h2>

            <p className="truncate text-sm text-muted-foreground">{user.email}</p>
          </div>
        </div>

        <form onSubmit={(event) => void handleSave(event)}>
          <div>
            <label htmlFor="display-name" className="block text-sm font-semibold text-foreground">
              Display name
            </label>

            <p className="mt-1 text-xs text-muted-foreground">
              This name will appear in your account menu.
            </p>

            <input
              id="display-name"
              type="text"
              value={name}
              maxLength={60}
              autoComplete="nickname"
              onChange={(event) => {
                setName(event.target.value);
                setSuccess(false);
                setError(null);
              }}
              className="mt-3 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring"
              placeholder="Enter your display name"
              required
            />
          </div>

          <div className="mt-6">
            <label htmlFor="account-email" className="block text-sm font-semibold text-foreground">
              Email address
            </label>

            <input
              id="account-email"
              type="email"
              value={user.email ?? ""}
              readOnly
              className="mt-3 w-full rounded-lg border border-input bg-muted px-4 py-3 text-sm text-muted-foreground"
            />

            <p className="mt-2 text-xs text-muted-foreground">
              Your email address cannot be changed from this page.
            </p>
          </div>

          {error && (
            <p role="alert" className="mt-5 text-sm text-danger">
              {error}
            </p>
          )}

          {success && (
            <p
              role="status"
              className="mt-5 flex items-center gap-2 text-sm font-medium text-success"
            >
              <CheckCircle2 className="h-4 w-4" aria-hidden />
              Display name updated successfully.
            </p>
          )}

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              type="submit"
              disabled={saving || !name.trim()}
              className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {saving ? "Saving..." : "Save changes"}
            </button>

            <Link
              to="/dashboard"
              className="rounded-lg border border-border px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-accent"
            >
              Back to dashboard
            </Link>
          </div>
        </form>
      </section>
    </main>
  );
}
