import { createFileRoute } from "@tanstack/react-router";
import { shows } from "@/lib/content";
import { ShowBlock } from "@/components/show-block";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/shows")({
  component: ShowsPage,
  head: () =>
    pageHead({
      title: "Shows | Iris Onyx — West Jordan backyard Aug 22",
      description:
        "Iris Onyx live. Free all-ages backyard show Saturday August 22 at 6 PM, 6825 S. Dixie Drive, West Jordan, Utah. Mossblood southern goth.",
      path: "/shows",
    }),
});


function ShowsPage() {
  const [lead, ...rest] = shows;

  return (
    <main>
      <header className="px-5 pt-10 pb-6 sm:px-8 lg:px-16">
        <p className="kicker">Shows</p>
        <h1 className="display display-section mt-2">On the dirt</h1>
        <p className="vibe mt-3 max-w-md text-2xl text-muted">
          Utah dates. Next: West Jordan backyard, August 22.
        </p>
      </header>

      {/* ========== NEXT SHOW — edit in src/lib/content.ts ========== */}
      <ShowBlock show={lead} enter={false} />

      {/* ========== FUTURE SHOWS — duplicate a <article> below to add dates ========== */}
      <section className="px-5 py-14 sm:px-8 lg:px-16">
        {rest.length === 0 ? (
          <p className="vibe text-2xl text-muted">More dates when they land.</p>
        ) : (
          rest.map((show) => (
            <article key={show.id} className="border-t border-line py-8">
              <p className="kicker">{show.weekday}</p>
              <h2 className="display display-section mt-2">{show.dateLockup}</h2>
              <p className="mt-2 font-body text-xl tracking-wide">{show.title}</p>
              <p className="text-muted">
                {show.time} · {show.city}
              </p>
            </article>
          ))
        )}

        {/*
          SHOW SLOT — copy this block when a date is confirmed:

          <article className="border-t border-line py-8">
            <p className="kicker">WEEKDAY</p>
            <h2 className="display display-section mt-2">MONTH DAY</h2>
            <p className="mt-2 font-body text-xl tracking-wide">Title</p>
            <p className="text-muted">Time · City</p>
          </article>
        */}
      </section>
    </main>
  );
}
