import { createFileRoute } from "@tanstack/react-router";
import { ARTIST, tracks } from "@/lib/content";
import { Photo, irisClose } from "@/components/photo";
import { TrackList } from "@/components/track-list";
import { useRowReveal } from "@/components/iris-motion";

function durationToIso(duration: string): string | undefined {
  if (!duration || !duration.includes(":")) return undefined;
  const [m, s] = duration.split(":").map(Number);
  if (Number.isNaN(m) || Number.isNaN(s)) return undefined;
  return `PT${m}M${s.toString().padStart(2, "0")}S`;
}

const musicJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "IRIS ONYX Singles",
  description: "Official singles and tracks by Iris Onyx",
  numberOfItems: tracks.length,
  itemListElement: tracks.map((track, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "MusicRecording",
      name: track.title,
      byArtist: {
        "@type": "MusicGroup",
        "@id": "https://iris0nyx.com/#artist",
        name: "Iris Onyx",
      },
      url: track.spotify.startsWith("https://open.spotify.com/track/")
        ? track.spotify
        : ARTIST.spotifyArtist,
      ...(durationToIso(track.duration)
        ? { duration: durationToIso(track.duration) }
        : {}),
      datePublished: track.year,
      image: `https://iris0nyx.com${track.cover}`,
    },
  })),
};

export const Route = createFileRoute("/music")({
  head: () => ({
    meta: [
      { title: "Music | IRIS ONYX — Cigarette, Bleeding Heart & more" },
      {
        name: "description",
        content:
          "Stream IRIS ONYX: Cigarette, Bleeding Heart, My Drug, Poison In My Veins, Religion and more. Goth-pop from Utah.",
      },
      { property: "og:title", content: "Music | IRIS ONYX" },
      {
        property: "og:description",
        content: "Listen to Cigarette, Bleeding Heart and the full catalog.",
      },
      { property: "og:url", content: "https://iris0nyx.com/music" },
      { property: "og:image", content: "https://iris0nyx.com/og.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Music | IRIS ONYX" },
      {
        name: "twitter:description",
        content: "Listen to Cigarette, Bleeding Heart and the full catalog.",
      },
    ],
    links: [{ rel: "canonical", href: "https://iris0nyx.com/music" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(musicJsonLd),
      },
    ],
  }),
  component: MusicPage,
});

function MusicPage() {
  useRowReveal(".js-row");

  return (
    <main>
      <section className="grid lg:grid-cols-12">
        <div className="relative min-h-[42dvh] lg:col-span-4 lg:min-h-[72dvh]">
          <Photo {...irisClose} className="h-full w-full object-cover object-top" />
        </div>
        <div className="px-5 py-12 sm:px-8 lg:col-span-8 lg:px-16 lg:py-20">
          <p className="kicker">Music</p>
          <h1 className="display display-section mt-2">Listen now</h1>
          <p className="vibe mt-4 max-w-md text-2xl text-muted">
            Cigarette. Bleeding Heart. My Drug. Then everything else.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={ARTIST.spotifyArtist} target="_blank" rel="noreferrer" className="play-pill">
              Open Spotify
            </a>
            <a href={ARTIST.appleArtist} target="_blank" rel="noreferrer" className="ghost-pill">
              Apple Music
            </a>
          </div>

          {/* ========== ALL TRACKS — edit in src/lib/content.ts ========== */}
          <div className="mt-12">
            <TrackList enterClass="js-row js-enter" />
          </div>
        </div>
      </section>
    </main>
  );
}
