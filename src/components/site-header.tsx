/* eslint-disable prettier/prettier */
import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Cloud } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { buttonHero } from "@/components/ui";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/topics", label: "Topics" },
  { to: "/dashboard", label: "Dashboard" },
  { to: "/review", label: "Review mistakes" },
] as const;

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const [signedIn, setSignedIn] = useState(false);
  const [authReady, setAuthReady] = useState(false);

  useEffect(() => {
    let active = true;
    const supabase = createClient();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (active) {
        setSignedIn(Boolean(session?.user));
        setAuthReady(true);
      }
    });

    void supabase.auth.getUser().then(({ data }) => {
      if (active) {
        setSignedIn(Boolean(data.user));
        setAuthReady(true);
      }
    });

    return () => {
      active = false;
      subscription.unsubscribe();
    };
  }, []);

  async function handleSignOut() {
    const supabase = createClient();
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error("Sign out failed:", error.message);
      return;
    }

    setSignedIn(false);
  }

  const isActive = (to: string) =>
    to === "/" ? pathname === "/" : pathname.startsWith(to);

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2.5" aria-label="CloudPrep AZ-900 home">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-brand text-white shadow-sm">
            <Cloud className="h-5 w-5" aria-hidden />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-base font-bold tracking-tight text-foreground">
              CloudPrep
            </span>
            <span className="block text-[11px] font-semibold text-muted-foreground">
              AZ-900 · unofficial
            </span>
          </span>
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${isActive(item.to)
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:bg-accent/60 hover:text-foreground"
                }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          {authReady && (
            signedIn ? (
              <button
                type="button"
                onClick={() => void handleSignOut()}
                className="rounded-lg border px-3 py-2 text-sm font-semibold text-foreground hover:bg-accent"
              >
                Sign Out
              </button>
            ) : (
              <Link
                to="/auth"
                className="rounded-lg border px-3 py-2 text-sm font-semibold text-foreground hover:bg-accent"
              >
                Sign In
              </Link>
            )
          )}

          <Link to="/quiz/setup" className={`${buttonHero} px-4 py-2`}>
            Start practising
          </Link>
        </div>

      </div>

      <nav
        aria-label="Mobile navigation"
        className="flex items-center gap-1 overflow-x-auto border-t border-border/60 px-4 py-2 md:hidden"
      >
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={`whitespace-nowrap rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${isActive(item.to)
                ? "bg-accent text-accent-foreground"
                : "text-muted-foreground hover:text-foreground"
              }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
