import { createFileRoute } from "@tanstack/react-router";
import { shows } from "@/lib/content";
import { ShowBlock } from "@/components/show-block";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/shows")({
  component: ShowsPage,
  head: () =>
    pageHead({
      title: "Shows | Iris Onyx",
      description:
        "Iris Onyx live dates. New shows get added here as they lock.",
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
          {lead ? `Utah dates. Next: ${lead.city}.` : "Utah dates. New ones land here."}
        </p>
      </header>

      {lead ? <ShowBlock show={lead} enter={false} /> : (
        <section className="px-5 py-10 sm:px-8 lg:px-16">
          <p className="vibe text-2xl text-muted">No dates on the board yet.</p>
        </section>
      )}

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
      </section>
    </main>
  );
}
