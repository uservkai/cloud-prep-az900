/* eslint-disable prettier/prettier */

import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

export const Route = createFileRoute("/auth/callback")({
  component: AuthCallback,
});

function AuthCallback() {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    async function confirm() {
      try {
        const url = new URL(window.location.href);
        const code = url.searchParams.get("code");
        const urlError = url.searchParams.get("error_description");

        if (urlError) throw new Error(urlError);
        if (!code) {
          throw new Error("No confirmation code was provided.");
        }

        const supabase = createClient();
        const { error: authError } =
          await supabase.auth.exchangeCodeForSession(code);

        if (authError) throw authError;

        if (active) {
          await navigate({ to: "/dashboard", replace: true });
        }
      } catch (err) {
        if (active) {
          setError(
            err instanceof Error
              ? err.message
              : "Email confirmation failed."
          );
        }
      }
    }

    void confirm();

    return () => {
      active = false;
    };
  }, [navigate]);

  return (
    <div className="mx-auto max-w-md px-4 py-20 text-center">
      <h1 className="font-display text-xl font-bold">
        Confirming your account
      </h1>

      {error ? (
        <>
          <p role="alert" className="mt-4 text-sm text-danger">
            {error}
          </p>
          <Link
            to="/auth"
            className="mt-5 inline-block font-semibold text-primary"
          >
            Return to Sign In
          </Link>
        </>
      ) : (
        <p className="mt-4 text-sm text-muted-foreground">
          Verifying your email confirmation...
        </p>
      )}
    </div>
  );
}
