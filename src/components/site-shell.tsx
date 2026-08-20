import type { ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ARTIST } from "@/lib/content";
import { cn } from "@/lib/utils";
import { IrisMotion } from "@/components/iris-motion";

const NAV = [
  { to: "/music" as const, label: "Music" },
  { to: "/shows" as const, label: "Shows" },
  { to: "/art" as const, label: "Art" },
  { to: "/contact" as const, label: "Book" },
];

export function SiteShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";

  return (
    <div className="min-h-dvh bg-bg text-fg">
      {isHome ? <IrisMotion /> : null}
      <a
        href="#listen"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-blood focus:px-3 focus:py-2"
      >
        Skip to music
      </a>
      <header
        className={cn(
          "z-30 flex items-center justify-between gap-4 px-4 py-3 sm:px-6",
          isHome ? "absolute inset-x-0 top-0" : "sticky top-0 border-b border-line bg-bg/95",
        )}
      >
        <Link
          to="/"
          className="display text-2xl tracking-[0.12em] text-fg sm:text-3xl"
          aria-label="Iris Onyx home"
        >
          IRIS
        </Link>
        <nav aria-label="Primary" className="flex items-center gap-1 sm:gap-2">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={cn("nav-link px-2", pathname === item.to && "is-active")}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </header>
      {children}
      <footer className="border-t border-line px-5 py-10 sm:px-8 lg:px-16">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="display text-4xl">IRIS ONYX</p>
            <p className="vibe mt-2 text-xl text-muted">{ARTIST.vibe}</p>
          </div>
          <div className="flex flex-col gap-2 font-body text-sm tracking-[0.16em] uppercase">
            <a href={`mailto:${ARTIST.email}`} className="hover:text-blood">
              {ARTIST.email}
            </a>
            <a href={ARTIST.spotifyArtist} target="_blank" rel="noreferrer" className="text-muted hover:text-fg">
              Spotify
            </a>
            <a href={ARTIST.instagram} target="_blank" rel="noreferrer" className="text-muted hover:text-fg">
              Instagram
            </a>
            <a href={ARTIST.tiktok} target="_blank" rel="noreferrer" className="text-muted hover:text-fg">
              TikTok
            </a>
            <a href={ARTIST.shop} target="_blank" rel="noreferrer" className="text-muted hover:text-fg">
              Merch
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
