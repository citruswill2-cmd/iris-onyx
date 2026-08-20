import { createFileRoute } from "@tanstack/react-router";
import { ARTIST, CORVUS_NOTE, artPieces } from "@/lib/content";
import { inquireMailto } from "@/lib/utils";

export const Route = createFileRoute("/art")({ component: ArtPage });

function ArtPage() {
  return (
    <main className="px-5 py-12 sm:px-8 lg:px-16 lg:py-16">
      <p className="kicker">Art</p>
      <h1 className="display display-section mt-2">Needle & bone</h1>
      <p className="vibe mt-4 max-w-lg text-2xl">{CORVUS_NOTE}</p>
      <a
        href={ARTIST.etsy}
        target="_blank"
        rel="noreferrer"
        className="mt-4 inline-block font-body text-sm font-semibold tracking-[0.16em] uppercase text-muted hover:text-fg"
      >
        Etsy shop
      </a>

      {/* ========== ART PIECES — edit in src/lib/content.ts ========== */}
      <ul className="mt-12 space-y-16">
        {artPieces.map((piece, i) => (
          <li key={piece.id} className="grid items-end gap-6 lg:grid-cols-12">
            <figure className={i % 2 === 1 ? "lg:col-span-5 lg:col-start-8" : "lg:col-span-5"}>
              <picture>
                <source type="image/webp" srcSet={piece.imageWebp} />
                <img
                  src={piece.image}
                  alt={piece.alt}
                  width={640}
                  height={640}
                  loading="lazy"
                  className="w-full"
                />
              </picture>
            </figure>
            <div className={i % 2 === 1 ? "lg:col-span-6 lg:col-start-1 lg:row-start-1" : "lg:col-span-6"}>
              <h2 className="display display-section">{piece.title}</h2>
              <p className="mt-3 font-body text-lg tracking-wide text-muted">{piece.price}</p>
              <p className="mt-2 max-w-sm font-body text-muted">{CORVUS_NOTE}</p>
              <a href={inquireMailto(piece.title)} className="play-pill mt-6">
                Inquire
              </a>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
