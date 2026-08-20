/// <reference types="vite/client" />

interface AnimeTimeline {
  add: (params: Record<string, unknown>, offset?: string | number) => AnimeTimeline;
}

interface AnimeStatic {
  (params: Record<string, unknown>): unknown;
  timeline: (params?: Record<string, unknown>) => AnimeTimeline;
  stagger: (value: number) => unknown;
}

interface Window {
  anime?: AnimeStatic;
}
