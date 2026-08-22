import { createFileRoute } from "@tanstack/react-router";
import { ARTIST, CORVUS_NOTE, artPieces, merchItems } from "@/lib/content";
import { inquireMailto } from "@/lib/utils";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/art")({
  component: ArtPage,
  head: () =>
    pageHead({
      title: "Art & merch | Iris Onyx embroidery",
      description:
        "Handmade hoop embroidery by Iris Onyx. Inquire to buy. Official IRIS 0NYX merch — hoodies, tees, hats. Art proceeds support Corvus.",
      path: "/art",
    }),
});


function ArtPage() {
  return (
    <main className="px-5 py-12 sm:px-8 lg:px-16 lg:py-16">
      <p className="kicker">Art</p>
      <h1 className="display display-section mt-2">Needle & bone</h1>
      <p className="vibe mt-4 max-w-lg text-2xl">{CORVUS_NOTE}</p>
      <p className="mt-3 max-w-md font-body text-muted">
        Handmade hoop embroidery. One of a kind. Email to claim a piece.
      </p>

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
              <p className="mt-3 font-body text-lg tracking-wide text-muted">{piece.line}</p>
              <p className="mt-1 font-body text-lg tracking-wide">{piece.price}</p>
              <a href={inquireMailto(piece.title)} className="play-pill mt-6">
                Inquire
              </a>
            </div>
          </li>
        ))}
      </ul>

      <section className="mt-24 border-t border-line pt-12">
        <p className="kicker">Merch</p>
        <h2 className="display display-section mt-2">Wear the night</h2>
        <p className="vibe mt-4 max-w-lg text-2xl">Official IRIS 0NYX line.</p>
        <a
          href={ARTIST.shop}
          target="_blank"
          rel="noreferrer"
          className="ghost-pill mt-6"
        >
          Full shop
        </a>

        <ul className="mt-12 grid grid-cols-2 gap-x-4 gap-y-12 lg:grid-cols-3 lg:gap-x-8">
          {merchItems.map((item) => (
            <li key={item.id}>
              <a href={item.href} target="_blank" rel="noreferrer" className="block">
                <picture>
                  <source type="image/webp" srcSet={item.imageWebp} />
                  <img
                    src={item.image}
                    alt={item.alt}
                    width={480}
                    height={640}
                    loading="lazy"
                    className="w-full bg-bg-2"
                  />
                </picture>
                <h3 className="display mt-4 text-3xl tracking-[0.08em]">{item.title}</h3>
                <p className="mt-1 font-body tracking-[0.14em] uppercase text-muted">{item.price}</p>
                <span className="mt-3 inline-block font-body text-sm font-semibold tracking-[0.18em] uppercase text-blood">
                  Shop
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
