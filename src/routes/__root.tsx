import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { SiteShell } from "@/components/site-shell";
import appCss from "../styles.css?url";

const APP_NAME = "Iris Onyx";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: APP_NAME },
      {
        name: "description",
        content: "Iris Onyx — pop with teeth. Listen now. Saturday Aug 22 free backyard show in West Jordan.",
      },
      { name: "theme-color", content: "#080906" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
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
