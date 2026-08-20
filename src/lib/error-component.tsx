import type { ErrorComponentProps } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";

export function AppErrorComponent({ error }: ErrorComponentProps) {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-4 bg-bg px-6 text-center text-fg">
      <p className="kicker">Error</p>
      <h1 className="display text-6xl">It skipped.</h1>
      <p className="max-w-md text-sm tracking-wide text-muted break-words">
        {error.message || "Something went wrong. Reload and try again."}
      </p>
      <Link to="/" className="play-pill mt-2">
        Back home
      </Link>
    </main>
  );
}
