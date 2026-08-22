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

const APP_NAME = "IRIS ONYX | Goth Pop from Utah — the softest knife";

const artistJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MusicGroup",
      "@id": "https://iris0nyx.com/#artist",
      name: "Iris Onyx",
      alternateName: ["IRIS ONYX", "IRIS 0NYX", "Iris 0nyx"],
      url: "https://iris0nyx.com",
      image: "https://iris0nyx.com/og.jpg",
      description:
        "Independent goth-pop artist and producer from Utah. Writes, produces, and sings — pop with a raw edge.",
      genre: ["Pop", "Goth Pop", "Alternative Pop", "Indie Pop"],
      foundingLocation: {
        "@type": "Place",
        name: "Utah, United States",
      },
      sameAs: [
        "https://open.spotify.com/artist/5p5jkzzew7nU5ReP3BKvE7",
        "https://music.apple.com/us/artist/iris-0nyx/1718747489",
        "https://www.instagram.com/official_iris0nyx/",
        "https://www.tiktok.com/@iris0nyx",
      ],
      email: "iris0nyx@gmail.com",
      member: {
        "@type": "Person",
        name: "Iris Onyx",
        jobTitle: "Singer, Songwriter, Producer",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://iris0nyx.com/#website",
      url: "https://iris0nyx.com",
      name: "Iris Onyx",
      description: "Official site for Iris Onyx — listen, shows, art.",
      publisher: { "@id": "https://iris0nyx.com/#artist" },
    },
  ],
};

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: APP_NAME },
      {
        name: "description",
        content:
          "IRIS ONYX is an independent goth-pop artist and producer from Utah. Listen to Cigarette, Bleeding Heart, My Drug and more. Free backyard shows, handmade art, and merch.",
      },
      { name: "theme-color", content: "#080906" },
      { name: "author", content: "Iris Onyx" },
      {
        name: "keywords",
        content:
          "Iris Onyx, IRIS 0NYX, goth pop, Utah artist, independent pop, Cigarette, Bleeding Heart, West Jordan",
      },

      // Open Graph
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Iris Onyx" },
      { property: "og:title", content: "IRIS ONYX | Goth Pop from Utah" },
      {
        property: "og:description",
        content:
          "Independent goth-pop artist & producer. Listen to Cigarette, Bleeding Heart & more. Free shows + art proceeds support Corvus.",
      },
      { property: "og:url", content: "https://iris0nyx.com/" },
      { property: "og:image", content: "https://iris0nyx.com/og.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:locale", content: "en_US" },

      // Twitter
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "IRIS ONYX | Goth Pop from Utah" },
      {
        name: "twitter:description",
        content: "Independent goth-pop artist & producer from Utah. Listen now.",
      },
      { name: "twitter:image", content: "https://iris0nyx.com/og.jpg" },
    ],
    links: [
      { rel: "canonical", href: "https://iris0nyx.com/" },
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
      {
        type: "application/ld+json",
        children: JSON.stringify(artistJsonLd),
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
