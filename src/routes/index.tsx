import { createFileRoute, Link } from "@tanstack/react-router";
import { ARTIST, featuredTracks, nextShow } from "@/lib/content";
import { Photo, irisHero, irisStreet } from "@/components/photo";
import { TrackList } from "@/components/track-list";
import { ShowBlock } from "@/components/show-block";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/")({
  component: Home,
  head: () =>
    pageHead({
      title: "Iris Onyx | Goth pop from Utah — listen now",
      description:
        "Stream Cigarette, Bleeding Heart, and My Drug. Iris Onyx (iris 0nyx) is a Utah independent goth-pop artist and producer. Free backyard show Aug 22 in West Jordan.",
      path: "/",
    }),
});

function Home() {
  const cigarette = featuredTracks[0];

  return (
    <main>
      {/* ========== HERO — photo is Iris's public artist image ========== */}
      <section className="relative min-h-dvh lg:grid lg:grid-cols-12">
        <div className="absolute inset-0 lg:relative lg:col-span-5 lg:min-h-dvh">
          <Photo {...irisHero} eager className="h-full w-full obj-hero" />
          <div className="scrim pointer-events-none absolute inset-0 lg:hidden" />
        </div>

        <div className="relative z-10 flex min-h-dvh flex-col justify-end px-5 pb-10 pt-24 sm:px-8 lg:col-span-7 lg:justify-center lg:px-16 lg:py-24">
          <p className="kicker js-hero js-enter">Utah · Independent</p>
          <h1 className="display display-hero js-hero js-enter mt-3">
            IRIS
            <br />
            ONYX
          </h1>
          <p className="vibe js-hero js-enter mt-4 text-2xl text-fg sm:text-3xl">
            {ARTIST.vibe}
          </p>

          <div className="js-hero js-enter mt-8 flex flex-wrap items-center gap-3">
            <a
              href={cigarette.spotify}
              target="_blank"
              rel="noreferrer"
              className="play-pill"
            >
              Play {cigarette.title}
            </a>
            <Link to="/shows" className="ghost-pill">
              {nextShow.dateShort} · {nextShow.city.split(",")[0]}
            </Link>
          </div>
        </div>
      </section>

      {/* ========== FEATURED TRACKS — edit in src/lib/content.ts ========== */}
      <section id="listen" className="px-5 py-14 sm:px-8 lg:px-16 lg:py-20">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="kicker js-track js-enter">Listen</p>
            <h2 className="display display-section js-track js-enter mt-2">The set</h2>
          </div>
          <Link
            to="/music"
            className="js-track js-enter mb-1 font-body text-xs font-semibold tracking-[0.18em] uppercase text-muted hover:text-fg"
          >
            All releases
          </Link>
        </div>
        <div className="mt-8">
          <TrackList featuredOnly />
        </div>
      </section>

      <section className="h-[58vw] max-h-[560px] min-h-[220px] overflow-hidden" aria-hidden>
        <Photo {...irisStreet} className="h-full w-full object-cover object-top" />
      </section>

      {/* ========== NEXT SHOW — edit in src/lib/content.ts ========== */}
      <ShowBlock />

      {/* ========== MANIFESTO ========== */}
      <section className="px-5 py-16 sm:px-8 lg:flex lg:items-end lg:justify-between lg:px-16 lg:py-24">
        <p className="vibe max-w-xl text-3xl text-fg sm:text-4xl">{ARTIST.manifesto}</p>
        <p className="mt-6 max-w-sm font-body text-lg tracking-wide text-muted lg:mt-0">
          Iris Onyx — also styled iris 0nyx — is a Utah independent goth-pop artist and producer.
          Goth chick making pop. Art proceeds go to Corvus.
        </p>
      </section>
    </main>
  );
}
