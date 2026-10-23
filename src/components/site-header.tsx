import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Cloud, LayoutDashboard, LogOut, Settings, UserRound } from "lucide-react";
import type { User } from "@supabase/supabase-js";
import { createClient } from "@/lib/supabase/client";
import { buttonHero } from "@/components/ui";
import { syncPendingCloudResults } from "@/services/quiz-sync";
import { setQuizOwner } from "@/store/quiz-session";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/topics", label: "Topics" },
  { to: "/dashboard", label: "Dashboard" },
  { to: "/review", label: "Review mistakes" },
] as const;

function getDisplayName(user: User): string {
  const name = user.user_metadata?.["display_name"];

  if (typeof name === "string" && name.trim()) {
    return name.trim();
  }

  return user.email?.split("@")[0] ?? "Learner";
}

export function SiteHeader() {
  const pathname = useRouterState({
    select: (s) => s.location.pathname,
  });

  const [user, setUser] = useState<User | null>(null);
  const [authReady, setAuthReady] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [signingOut, setSigningOut] = useState(false);
  const [signOutError, setSignOutError] = useState<string | null>(null);

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let active = true;
    const supabase = createClient();

    const retryPending = () => {
      void syncPendingCloudResults().catch((error: unknown) => {
        console.error("Could not synchronize pending quizzes:", error);
      });
    };

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (!active) return;

      setQuizOwner(session?.user?.id ?? null);
      setUser(session?.user ?? null);
      setAuthReady(true);

      if (event === "SIGNED_OUT") {
        setMenuOpen(false);
      }

      if (session?.user && (event === "INITIAL_SESSION" || event === "SIGNED_IN")) {
        // Keep synchronization outside the auth callback.
        setTimeout(() => {
          if (active) retryPending();
        }, 0);
      }
    });

    // Retry pending uploads when internet connectivity returns.
    window.addEventListener("online", retryPending);

    return () => {
      active = false;
      subscription.unsubscribe();
      window.removeEventListener("online", retryPending);
    };
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;

    function handlePointerDown(event: PointerEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  async function handleSignOut() {
    setSigningOut(true);
    setSignOutError(null);

    try {
      const supabase = createClient();
      const { error } = await supabase.auth.signOut();

      if (error) throw error;

      setUser(null);
      setMenuOpen(false);
    } catch (error) {
      console.error("Sign out failed:", error);
      setSignOutError("Could not sign out. Please try again.");
    } finally {
      setSigningOut(false);
    }
  }

  const isActive = (to: string) => (to === "/" ? pathname === "/" : pathname.startsWith(to));

  const displayName = user ? getDisplayName(user) : "";
  const firstName = displayName.split(/\s+/)[0] ?? "Learner";
  const initial = displayName.charAt(0).toUpperCase() || "L";

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2.5" aria-label="CloudPrep AZ-900 home">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-primary to-brand text-white shadow-sm">
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
              className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                isActive(item.to)
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:bg-accent/60 hover:text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          {authReady &&
            (user ? (
              <div className="relative" ref={menuRef}>
                <button
                  type="button"
                  aria-label={`Account menu for ${displayName}`}
                  aria-haspopup="true"
                  aria-expanded={menuOpen}
                  aria-controls="cloudprep-account-menu"
                  onClick={() => {
                    setMenuOpen((open) => !open);
                    setSignOutError(null);
                  }}
                  className="flex items-center gap-2 rounded-lg border border-border bg-card px-2.5 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-accent/50"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-soft font-bold text-primary">
                    {initial}
                  </span>

                  <span className="hidden max-w-28 truncate sm:block">{firstName}</span>

                  <ChevronDown
                    className={`h-4 w-4 text-muted-foreground transition-transform ${
                      menuOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden
                  />
                </button>

                {menuOpen && (
                  <div
                    id="cloudprep-account-menu"
                    className="absolute right-0 z-50 mt-2 w-64 max-w-[calc(100vw-2rem)] rounded-xl border border-border bg-popover p-2 text-popover-foreground shadow-xl"
                  >
                    <div className="border-b border-border px-3 py-3">
                      <p className="truncate text-sm font-semibold">{displayName}</p>
                      <p className="mt-1 truncate text-xs text-muted-foreground">{user.email}</p>
                    </div>

                    <div className="py-1">
                      <Link
                        to="/dashboard"
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-accent"
                      >
                        <LayoutDashboard className="h-4 w-4" aria-hidden />
                        My dashboard
                      </Link>

                      <Link
                        to="/account"
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-accent"
                      >
                        <Settings className="h-4 w-4" aria-hidden />
                        Account settings
                      </Link>
                    </div>

                    <div className="border-t border-border pt-1">
                      <button
                        type="button"
                        disabled={signingOut}
                        onClick={() => void handleSignOut()}
                        className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-medium text-danger hover:bg-danger-soft disabled:opacity-60"
                      >
                        <LogOut className="h-4 w-4" aria-hidden />
                        {signingOut ? "Signing out..." : "Sign out"}
                      </button>

                      {signOutError && (
                        <p role="alert" className="px-3 py-2 text-xs text-danger">
                          {signOutError}
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                to="/auth"
                className="rounded-lg border px-3 py-2 text-sm font-semibold text-foreground hover:bg-accent"
              >
                Sign In
              </Link>
            ))}

          <Link to="/quiz/setup" className={`${buttonHero} px-4 py-2`}>
            <span className="hidden sm:inline">Start practising</span>
            <span className="sm:hidden">Practise</span>
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
            className={`whitespace-nowrap rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
              isActive(item.to)
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
