import { ARTIST, artPieces, shows, tracks, type Show, type Track } from "./content";

export const SITE = ARTIST.site;

export function pageHead({
  title,
  description,
  path,
  noindex = false,
}: {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
}) {
  const url = path === "/" ? `${SITE}/` : `${SITE}${path}`;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "robots",
        content: noindex
          ? "noindex, nofollow"
          : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      { name: "author", content: ARTIST.name },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

function durationIso(mmss: string) {
  const [m, s] = mmss.split(":").map(Number);
  if (!Number.isFinite(m) || !Number.isFinite(s)) return undefined;
  return `PT${m}M${s}S`;
}

function recording(track: Track) {
  return {
    "@type": "MusicRecording" as const,
    "@id": `${SITE}/music#${track.id}`,
    name: track.title,
    byArtist: { "@id": `${SITE}/#artist` },
    duration: durationIso(track.duration),
    datePublished: track.year,
    url: track.spotify || `${SITE}/music`,
    image: `${SITE}${track.cover}`,
    sameAs: [track.spotify, track.apple].filter(Boolean),
  };
}

function eventNode(show: Show) {
  const start = show.id === "aug-22-west-jordan" ? "2026-08-22T18:00:00-06:00" : undefined;
  const performers = [
    { "@type": "MusicGroup", "@id": `${SITE}/#artist`, name: ARTIST.name },
    ...show.lineup.map((name) => ({ "@type": "Person" as const, name })),
  ];
  return {
    "@type": "MusicEvent" as const,
    "@id": `${SITE}/shows#${show.id}`,
    name: `${ARTIST.name} — ${show.title}`,
    description: `${show.theme}. ${show.benefit} ${show.city}.`,
    startDate: start,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    isAccessibleForFree: true,
    url: `${SITE}/shows`,
    image: `${SITE}/images/backyard-1200.jpg`,
    location: {
      "@type": "Place",
      name: `Backyard show, ${show.address}`,
      address: {
        "@type": "PostalAddress",
        streetAddress: show.address,
        addressLocality: "West Jordan",
        addressRegion: "UT",
        postalCode: "84084",
        addressCountry: "US",
      },
    },
    performer: performers,
    organizer: show.presented
      ? { "@type": "Organization", name: show.presented }
      : { "@id": `${SITE}/#artist` },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: `${SITE}/shows`,
    },
  };
}

export function siteJsonLd() {
  const artist = {
    "@type": "MusicGroup",
    "@id": `${SITE}/#artist`,
    name: ARTIST.name,
    alternateName: ["iris 0nyx", "Iris 0nyx", "iris0nyx", "IRIS ONYX"],
    url: SITE,
    email: ARTIST.email,
    image: [`${SITE}/og.jpg`, `${SITE}/images/iris-hero-1000.jpg`],
    logo: `${SITE}/og.jpg`,
    description:
      "Independent goth-pop artist and producer from Utah. Stream Cigarette, Bleeding Heart, and My Drug. Handmade embroidery proceeds support Corvus.",
    genre: ["Pop", "Goth Pop", "Alternative Pop", "Indie Pop"],
    foundingLocation: {
      "@type": "Place",
      name: "Utah, United States",
      address: {
        "@type": "PostalAddress",
        addressLocality: "West Jordan",
        addressRegion: "UT",
        addressCountry: "US",
      },
    },
    sameAs: [ARTIST.instagram, ARTIST.tiktok, ARTIST.spotifyArtist, ARTIST.appleArtist, ARTIST.shop],
    member: {
      "@type": "Person",
      name: ARTIST.name,
      jobTitle: "Singer, songwriter, producer",
    },
    album: tracks.filter((t) => t.featured).map((t) => ({ "@id": `${SITE}/music#${t.id}` })),
    event: shows.map((s) => ({ "@id": `${SITE}/shows#${s.id}` })),
  };

  return {
    "@context": "https://schema.org",
    "@graph": [
      artist,
      {
        "@type": "WebSite",
        "@id": `${SITE}/#website`,
        url: SITE,
        name: ARTIST.name,
        alternateName: "iris 0nyx",
        description: ARTIST.manifesto,
        inLanguage: "en-US",
        publisher: { "@id": `${SITE}/#artist` },
      },
      ...tracks.map(recording),
      ...shows.map(eventNode),
      ...artPieces.map((piece) => ({
        "@type": "VisualArtwork",
        "@id": `${SITE}/art#${piece.id}`,
        name: piece.title,
        artMedium: "Embroidery",
        creator: { "@id": `${SITE}/#artist` },
        image: `${SITE}${piece.image}`,
        url: `${SITE}/art`,
        description: `${piece.line}. Handmade hoop embroidery by Iris Onyx. ${piece.price}.`,
      })),
    ],
  };
}
