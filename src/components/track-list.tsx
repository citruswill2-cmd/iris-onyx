import { featuredTracks, tracks, type Track } from "@/lib/content";
import { cn } from "@/lib/utils";

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="currentColor">
      <path d="M7.2 4.8v14.4L20 12 7.2 4.8z" />
    </svg>
  );
}

export function TrackRow({
  track,
  index,
  enterClass,
}: {
  track: Track;
  index: number;
  enterClass?: string;
}) {
  const n = String(index + 1).padStart(2, "0");
  const href = track.spotify || track.apple;
  return (
    <div className={cn("track-row", enterClass)}>
      <span className="font-body text-sm tracking-[0.14em] text-muted">{n}</span>
      <a href={href} target="_blank" rel="noreferrer" className="shrink-0" tabIndex={-1}>
        <picture>
          <source type="image/webp" srcSet={`${track.coverWebp} 640w`} />
          <img
            src={track.cover}
            alt=""
            width={52}
            height={52}
            className="size-[52px] object-cover"
            loading="lazy"
          />
        </picture>
      </a>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="min-w-0"
        aria-label={`Play ${track.title} on Spotify`}
      >
        <p className="display display-track">{track.title}</p>
        <p className="mt-1 font-body text-sm tracking-wide text-muted">
          {track.line}
          {track.duration ? ` · ${track.duration}` : ""}
        </p>
      </a>
      <div className="flex flex-col items-end gap-1">
        <a
          href={track.spotify}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-11 min-w-11 items-center justify-center gap-1 text-xs font-semibold tracking-[0.18em] uppercase text-fg transition-colors duration-150 hover:text-blood"
        >
          <PlayIcon className="size-3.5" />
          Play
        </a>
        {track.apple ? (
          <a
            href={track.apple}
            target="_blank"
            rel="noreferrer"
            className="text-[0.68rem] font-semibold tracking-[0.16em] uppercase text-muted hover:text-fg"
          >
            Apple
          </a>
        ) : null}
      </div>
    </div>
  );
}

export function TrackList({
  featuredOnly = false,
  enterClass = "js-track js-enter",
}: {
  featuredOnly?: boolean;
  enterClass?: string;
}) {
  const list = featuredOnly ? featuredTracks : tracks;
  return (
    <div>
      {list.map((track, i) => (
        <TrackRow key={track.id} track={track} index={i} enterClass={enterClass} />
      ))}
    </div>
  );
}
