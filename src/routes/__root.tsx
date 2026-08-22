import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { SiteShell } from "@/components/site-shell";
import { ARTIST } from "@/lib/content";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Iris Onyx | Goth pop from Utah" },
      {
        name: "description",
        content:
          "Iris Onyx (iris 0nyx) is an independent goth-pop artist and producer from Utah. Stream Cigarette, Bleeding Heart, and My Drug. Free backyard show Aug 22 in West Jordan.",
      },
      { name: "theme-color", content: "#080906" },
      { name: "author", content: ARTIST.name },
      {
        name: "keywords",
        content:
          "Iris Onyx, IRIS 0NYX, iris0nyx, goth pop, Utah artist, West Jordan, Cigarette, Bleeding Heart, My Drug",
      },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
      { rel: "me", href: ARTIST.instagram },
      { rel: "me", href: ARTIST.tiktok },
      { rel: "me", href: ARTIST.spotifyArtist },
      { rel: "me", href: ARTIST.appleArtist },
      {
        rel: "preload",
        href: "/fonts/bebas-neue.woff2",
        as: "font",
        type: "font/woff2",
        crossOrigin: "anonymous",
      },
      {
        rel: "preload",
        href: "/images/iris-hero-800.webp",
        as: "image",
        type: "image/webp",
      },
    ],
    scripts: [
      {
        src: "https://cdn.jsdelivr.net/npm/animejs@3.2.2/lib/anime.min.js",
        defer: true,
      },
    ],
  }),
  component: RootDocument,
  notFoundComponent: NotFound,
});

function RootDocument() {
  return (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <PreviewHostBridge />
        <AuthProvider>
          <SiteShell>
            <Outlet />
          </SiteShell>
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}

function NotFound() {
  return (
    <main className="flex min-h-[70dvh] flex-col justify-center px-5 py-24 sm:px-8 lg:px-16">
      <p className="kicker">404</p>
      <h1 className="display display-section mt-3">Off the setlist.</h1>
      <a href="/" className="play-pill mt-8 w-fit">
        Back home
      </a>
    </main>
  );
}
