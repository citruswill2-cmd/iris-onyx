import { createFileRoute } from "@tanstack/react-router";
import { ARTIST } from "@/lib/content";
import { Photo, irisClose } from "@/components/photo";
import { TrackList } from "@/components/track-list";
import { useRowReveal } from "@/components/iris-motion";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/music")({
  component: MusicPage,
  head: () =>
    pageHead({
      title: "Music | Iris Onyx — Cigarette, Bleeding Heart, My Drug",
      description:
        "Stream Iris Onyx: Cigarette, Bleeding Heart, My Drug, Poison In My Veins, Religion, and more. Goth-pop from Utah on Spotify and Apple Music.",
      path: "/music",
    }),
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
            Iris Onyx on Spotify and Apple Music. Cigarette. Bleeding Heart. My Drug. Then everything
            else.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={ARTIST.spotifyArtist} target="_blank" rel="noreferrer" className="play-pill">
              Open Spotify
            </a>
            <a href={ARTIST.appleArtist} target="_blank" rel="noreferrer" className="ghost-pill">
              Apple Music
            </a>
          </div>

          <div className="mt-12">
            <TrackList enterClass="js-row js-enter" />
          </div>
        </div>
      </section>
    </main>
  );
}
