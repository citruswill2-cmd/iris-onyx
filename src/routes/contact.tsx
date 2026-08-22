import { createFileRoute } from "@tanstack/react-router";
import { ARTIST } from "@/lib/content";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () =>
    pageHead({
      title: "Booking | Iris Onyx",
      description:
        "Book Iris Onyx for shows, features, and sessions. Utah independent pop artist. iris0nyx@gmail.com",
      path: "/contact",
    }),
});


function ContactPage() {
  return (
    <main className="flex min-h-[78dvh] flex-col justify-center px-5 py-16 sm:px-8 lg:px-16">
      <p className="kicker">Booking</p>
      <h1 className="display display-section mt-3">Write her.</h1>
      <a
        href={`mailto:${ARTIST.email}`}
        className="display mt-8 block text-[clamp(1.6rem,8vw,4.4rem)] leading-none text-blood underline decoration-blood decoration-2 underline-offset-8 hover:text-fg"
      >
        {ARTIST.email}
      </a>
      <p className="vibe mt-8 max-w-md text-2xl text-muted">
        Shows, features, sessions. Keep it short.
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        <a href={`mailto:${ARTIST.email}`} className="play-pill">
          Email Iris
        </a>
        <a href={ARTIST.instagram} target="_blank" rel="noreferrer" className="ghost-pill">
          Instagram
        </a>
      </div>
    </main>
  );
}
