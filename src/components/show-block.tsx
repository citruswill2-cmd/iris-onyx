import { nextShow, type Show } from "@/lib/content";
import { cn } from "@/lib/utils";

export function ShowBlock({
  show = nextShow,
  className,
  enter = true,
}: {
  show?: Show;
  className?: string;
  enter?: boolean;
}) {
  if (!show) return null;

  return (
    <section
      id="show"
      className={cn("flyer", enter && "js-show js-enter", className)}
      style={{ ["--flyer-image" as string]: "url(/images/backyard-1200.webp)" }}
    >
      <div className="relative z-10 px-5 py-12 sm:px-8 lg:px-16 lg:py-16">
        <p className="kicker">This Saturday · Free · All ages</p>
        <h2 className="display display-date mt-4 text-fg">{show.dateLockup}</h2>
        <p className="display display-section mt-2 text-fg">{show.title}</p>
        <p className="vibe mt-4 text-2xl text-moss sm:text-3xl">{show.theme}</p>

        <dl className="mt-8 grid gap-3 font-body text-lg tracking-wide sm:grid-cols-2 lg:max-w-3xl">
          <div>
            <dt className="kicker text-muted">When</dt>
            <dd className="mt-1">
              {show.time} · {show.ages}
            </dd>
          </div>
          <div>
            <dt className="kicker text-muted">Where</dt>
            <dd className="mt-1">
              <a
                href={show.maps}
                target="_blank"
                rel="noreferrer"
                className="underline decoration-blood decoration-1 underline-offset-4 hover:text-blood"
              >
                {show.address}
                <br />
                {show.city}
              </a>
            </dd>
          </div>
        </dl>

        <p className="mt-8 max-w-xl font-body text-lg leading-snug tracking-wide">{show.benefit}</p>
        {show.note ? <p className="mt-2 font-body text-muted">{show.note}</p> : null}

        <div className="mt-8 max-w-xl border-t border-line pt-6">
          <p className="kicker">Lineup</p>
          <p className="mt-2 font-body text-lg tracking-wide">{show.lineup.join(" · ")}</p>
          <p className="mt-4 font-body text-sm tracking-[0.08em] text-muted uppercase">
            {show.presented}
            {show.host ? ` · Host: ${show.host}` : ""}
            {show.dj ? ` · DJ: ${show.dj}` : ""}
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href={show.maps} target="_blank" rel="noreferrer" className="play-pill">
            Get there
          </a>
          <a href="mailto:iris0nyx@gmail.com?subject=August%2022%20backyard%20show" className="ghost-pill">
            Help raise
          </a>
        </div>
      </div>
    </section>
  );
}
