/* eslint-disable prettier/prettier */

import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { createClient } from "@/lib/supabase/client";

export const Route = createFileRoute("/auth")({
  component: AuthPage,
});

function AuthPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (loading) return;

    setLoading(true);
    setError("");
    setMessage("");

    try {
      const supabase = createClient();

      if (mode === "signup") {
        const { data, error: authError } = await supabase.auth.signUp({
          email: email.trim(),
          password,
          options: {
            data: { display_name: name.trim() },
            emailRedirectTo: `${window.location.origin}/auth/callback`,
          },
        });

        if (authError) throw authError;

        if (data.session) {
          await navigate({ to: "/dashboard" });
        } else {
          setMessage(
            "Check your email for a confirmation link. Once confirmed, you can sign in."
          );
        }
      } else {
        const { error: authError } =
          await supabase.auth.signInWithPassword({
            email: email.trim(),
            password,
          });

        if (authError) throw authError;

        await navigate({ to: "/dashboard" });
      }
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Authentication failed."
      );
    } finally {
      setLoading(false);
    }
  }

  function switchMode() {
    setMode((current) => current === "signin" ? "signup" : "signin");
    setError("");
    setMessage("");
  }

  return (
    <div className="mx-auto max-w-md px-4 py-12 sm:px-6">
      <div className="rounded-2xl border bg-card p-6 shadow-sm sm:p-8">
        <h1 className="font-display text-2xl font-bold text-foreground">
          {mode === "signin" ? "Welcome back" : "Create your account"}
        </h1>

        <p className="mt-2 text-sm text-muted-foreground">
          {mode === "signin"
            ? "Sign in to your CloudPrep learner account."
            : "Join CloudPrep to prepare for the AZ-900 exam."}
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          {mode === "signup" && (
            <div>
              <label
                htmlFor="display-name"
                className="mb-1 block text-sm font-medium"
              >
                Display name
              </label>
              <input
                id="display-name"
                type="text"
                autoComplete="name"
                maxLength={120}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-lg border bg-background px-3 py-2"
                placeholder="Your name"
              />
            </div>
          )}

          <div>
            <label
              htmlFor="email"
              className="mb-1 block text-sm font-medium"
            >
              Email address
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border bg-background px-3 py-2"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-1 block text-sm font-medium"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              autoComplete={
                mode === "signin"
                  ? "current-password"
                  : "new-password"
              }
              minLength={6}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border bg-background px-3 py-2"
              placeholder="Enter your password"
            />
          </div>

          {error && (
            <p role="alert" className="text-sm text-danger">
              {error}
            </p>
          )}

          {message && (
            <p role="status" className="text-sm text-success">
              {message}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-primary px-4 py-3 font-semibold text-primary-foreground disabled:opacity-60"
          >
            {loading
              ? "Please wait..."
              : mode === "signin"
                ? "Sign In"
                : "Create Account"}
          </button>
        </form>

        <div className="mt-5 text-center text-sm">
          {mode === "signin"
            ? "Don't have an account?"
            : "Already have an account?"}{" "}
          <button
            type="button"
            onClick={switchMode}
            className="font-semibold text-primary hover:underline"
          >
            {mode === "signin" ? "Sign Up" : "Sign In"}
          </button>
        </div>

        <div className="mt-6 border-t pt-4 text-center">
          <Link
            to="/quiz/setup"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Continue practising without an account
          </Link>
        </div>
      </div>
    </div>
  );
}
