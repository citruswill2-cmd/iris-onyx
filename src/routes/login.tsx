import { createFileRoute } from "@tanstack/react-router";
import { GROK_PROVIDERS, authEnabled, signIn } from "@/lib/auth/client";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/login")({
  component: Login,
  head: () =>
    pageHead({
      title: "Sign in | Iris Onyx",
      description: "Account sign-in.",
      path: "/login",
      noindex: true,
    }),
});


function Login() {
  return (
    <main className="grid min-h-[70dvh] place-items-center px-6 py-16">
      <div className="w-full max-w-sm">
        <p className="kicker">Account</p>
        <h1 className="display display-section mt-2">Sign in</h1>
        <div className="mt-8 space-y-3">
          {authEnabled ? (
            GROK_PROVIDERS.map((p) => (
              <button
                key={p.providerId}
                type="button"
                onClick={() => signIn(p.providerId, { callbackURL: "/" })}
                className="ghost-pill w-full"
              >
                Continue with {p.label}
              </button>
            ))
          ) : (
            <p className="font-body text-muted">Sign-in is disabled.</p>
          )}
        </div>
      </div>
    </main>
  );
}
