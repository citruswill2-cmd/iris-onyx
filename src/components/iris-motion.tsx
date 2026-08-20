import { useEffect } from "react";

/**
 * Purposeful, short anime.js entrances. No decoration.
 * Hero lockup, track rows, next-show block.
 */
export function IrisMotion() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const done = () => document.documentElement.classList.add("motion-done");

    if (reduced) {
      done();
      return;
    }

    const fallback = window.setTimeout(done, 1200);

    const run = () => {
      const anime = window.anime;
      if (!anime) return false;
      window.clearTimeout(fallback);

      const hero = document.querySelectorAll(".js-hero");
      const tracks = document.querySelectorAll(".js-track");
      const show = document.querySelectorAll(".js-show");

      const tl = anime.timeline({
        easing: "easeOutCubic",
        duration: 480,
        complete: done,
      });

      if (hero.length) {
        tl.add({
          targets: hero,
          opacity: [0, 1],
          translateY: [18, 0],
          delay: anime.stagger(70),
        });
      }
      if (tracks.length) {
        tl.add(
          {
            targets: tracks,
            opacity: [0, 1],
            translateY: [16, 0],
            delay: anime.stagger(55),
            duration: 420,
          },
          hero.length ? "-=220" : undefined,
        );
      }
      if (show.length) {
        tl.add(
          {
            targets: show,
            opacity: [0, 1],
            translateY: [14, 0],
            duration: 400,
          },
          "-=240",
        );
      }
      if (!hero.length && !tracks.length && !show.length) done();
      return true;
    };

    if (run()) return () => window.clearTimeout(fallback);

    const id = window.setInterval(() => {
      if (run()) window.clearInterval(id);
    }, 40);

    return () => {
      window.clearInterval(id);
      window.clearTimeout(fallback);
    };
  }, []);

  return null;
}

export function useRowReveal(selector = ".js-row") {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const nodes = Array.from(document.querySelectorAll<HTMLElement>(selector));
    if (!nodes.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const anime = window.anime;
        const incoming = entries.filter((e) => e.isIntersecting).map((e) => e.target);
        if (!incoming.length) return;
        incoming.forEach((el) => io.unobserve(el));
        if (anime) {
          anime({
            targets: incoming,
            opacity: [0, 1],
            translateY: [14, 0],
            delay: anime.stagger(50),
            duration: 380,
            easing: "easeOutCubic",
          });
        } else {
          incoming.forEach((el) => {
            (el as HTMLElement).style.opacity = "1";
            (el as HTMLElement).style.transform = "none";
          });
        }
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" },
    );

    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, [selector]);
}
