/**
 * IRIS ONYX — site content
 * ----------------------
 * Non-technical updates live here. Change tracks, shows, art, and links
 * in this file; the pages pick them up automatically.
 *
 * STREAMING: paste full Spotify / Apple Music URLs when you have them.
 * PHOTOGRAPHY: drop replacement files in /public/images and keep the
 * same filenames (or update the `src` fields below).
 */

export const ARTIST = {
  name: "Iris Onyx",
  lockup: "IRIS ONYX",
  vibe: "the softest knife",
  manifesto: "Pop with teeth. Windows down. Lights off.",
  email: "iris0nyx@gmail.com",
  instagram: "https://www.instagram.com/official_iris0nyx/",
  tiktok: "https://www.tiktok.com/@iris0nyx",
  etsy: "https://www.etsy.com/shop/IRISNEEDLENBONE",
  spotifyArtist: "https://open.spotify.com/artist/5p5jkzzew7nU5ReP3BKvE7",
  appleArtist: "https://music.apple.com/us/artist/iris-0nyx/1718747489",
} as const;

export type Track = {
  id: string;
  title: string;
  /** Short line under the title. Keep it one breath. */
  line: string;
  duration: string;
  year: string;
  featured: boolean;
  /**
   * One-click play. Prefer a TRACK url, not the artist page.
   * Leave empty string if you do not have it yet.
   */
  spotify: string;
  apple: string;
  /** Square cover from her streaming pages. */
  cover: string;
  coverWebp: string;
};

/* ========== TRACKS ==========
 * featured: true  → home page + music page
 * featured: false → music page only
 * Paste Spotify/Apple track URLs when they land.
 */
export const tracks: Track[] = [
  {
    id: "cigarette",
    title: "Cigarette",
    line: "your voice is my favorite song",
    duration: "2:56",
    year: "2025",
    featured: true,
    spotify: "https://open.spotify.com/track/0wCf0J4lSwgs2LFhjAhdEa",
    apple: "https://music.apple.com/us/artist/iris-0nyx/1718747489", // TODO: paste Cigarette Apple Music track URL
    cover: "/images/cover-cigarette-640.jpg",
    coverWebp: "/images/cover-cigarette-640.webp",
  },
  {
    id: "bleeding-heart",
    title: "Bleeding Heart",
    line: "the saddest one I ever wrote",
    duration: "3:07",
    year: "2026",
    featured: true,
    spotify: "https://open.spotify.com/track/2pAb6zmao9XQeeTiP41ZYU",
    apple: "https://music.apple.com/us/artist/iris-0nyx/1718747489", // TODO: paste Bleeding Heart Apple Music track URL
    cover: "/images/cover-bleeding-640.jpg",
    coverWebp: "/images/cover-bleeding-640.webp",
  },
  {
    id: "my-drug",
    title: "My Drug",
    line: "late night, windows down",
    duration: "2:20",
    year: "2025",
    featured: true,
    spotify: "https://open.spotify.com/album/72LkljGHnXKS36KoOEFage",
    apple: "https://music.apple.com/us/artist/iris-0nyx/1718747489", // TODO: paste My Drug Apple Music track URL
    cover: "/images/cover-mydrug-640.jpg",
    coverWebp: "/images/cover-mydrug-640.webp",
  },
  {
    id: "forgettin-you",
    title: "Forgettin You",
    line: "newest cut",
    duration: "",
    year: "2026",
    featured: false,
    spotify: ARTIST.spotifyArtist,
    apple: ARTIST.appleArtist,
    cover: "/images/cover-more-640.jpg",
    coverWebp: "/images/cover-more-640.webp",
  },
  {
    id: "use-me",
    title: "Use Me! (Reimagined)",
    line: "don't look away",
    duration: "2:51",
    year: "2025",
    featured: false,
    spotify: ARTIST.spotifyArtist,
    apple: ARTIST.appleArtist,
    cover: "/images/iris-look-800.jpg",
    coverWebp: "/images/iris-look-800.webp",
  },
  {
    id: "poison",
    title: "Poison In My Veins",
    line: "it stays",
    duration: "",
    year: "2026",
    featured: false,
    spotify: "https://open.spotify.com/track/5lrJZGTSc5Ydy8J8MnkVsI",
    apple: ARTIST.appleArtist,
    cover: "/images/cover-poison-640.jpg",
    coverWebp: "/images/cover-poison-640.webp",
  },
  {
    id: "religion",
    title: "Religion",
    line: "single",
    duration: "",
    year: "2026",
    featured: false,
    spotify: ARTIST.spotifyArtist,
    apple: "https://music.apple.com/us/album/religion-single/1896130917",
    cover: "/images/iris-street-800.jpg",
    coverWebp: "/images/iris-street-800.webp",
  },
  {
    id: "haunted",
    title: "Haunted",
    line: "single",
    duration: "",
    year: "2025",
    featured: false,
    spotify: ARTIST.spotifyArtist,
    apple: ARTIST.appleArtist,
    cover: "/images/iris-hero-800.jpg",
    coverWebp: "/images/iris-hero-800.webp",
  },
];

export const featuredTracks = tracks.filter((t) => t.featured);

export type Show = {
  id: string;
  /** Giant date lockup, e.g. AUGUST 22ND */
  dateLockup: string;
  dateShort: string;
  weekday: string;
  title: string;
  theme: string;
  time: string;
  ages: string;
  address: string;
  city: string;
  maps: string;
  benefit: string;
  note: string;
  presented: string;
  host: string;
  dj: string;
  lineup: string[];
};

/* ========== SHOWS ==========
 * The first item is the next show (home + shows page).
 * Duplicate the object below to add dates. Keep id unique.
 */
export const shows: Show[] = [
  {
    id: "aug-22-west-jordan",
    dateLockup: "AUGUST 22ND",
    dateShort: "AUG 22",
    weekday: "Saturday",
    title: "Free Backyard Show",
    theme: "Mossblood Themed: Southern Goth",
    time: "6 PM",
    ages: "All Ages",
    address: "6825 S. Dixie Drive",
    city: "West Jordan, UT",
    maps: "https://maps.google.com/?q=6825+S.+Dixie+Drive,+West+Jordan,+UT",
    benefit: "Benefit show — help raise funds for a friend with funeral costs.",
    note: "Limited prizes for those who help raise.",
    presented: "Glass Snare Productions",
    host: "Luh Benzo",
    dj: "Tumnus",
    lineup: ["Grody DaGrimy1", "Why Carson", "Javion King"],
  },
  /* ---- SHOW SLOT 2
  {
    id: "show-2",
    dateLockup: "MONTH DAY",
    dateShort: "MON 00",
    weekday: "Weekday",
    title: "Show title",
    theme: "Theme",
    time: "8 PM",
    ages: "All Ages",
    address: "Venue address",
    city: "City, ST",
    maps: "https://maps.google.com/?q=",
    benefit: "",
    note: "",
    presented: "",
    host: "",
    dj: "",
    lineup: [],
  },
  ---- */
  /* ---- SHOW SLOT 3
  {
    id: "show-3",
    dateLockup: "MONTH DAY",
    dateShort: "MON 00",
    weekday: "Weekday",
    title: "Show title",
    theme: "Theme",
    time: "8 PM",
    ages: "All Ages",
    address: "Venue address",
    city: "City, ST",
    maps: "https://maps.google.com/?q=",
    benefit: "",
    note: "",
    presented: "",
    host: "",
    dj: "",
    lineup: [],
  },
  ---- */
];

export const nextShow = shows[0];

export type ArtPiece = {
  id: string;
  title: string;
  price: string;
  image: string;
  imageWebp: string;
  alt: string;
};

/* ========== ART ==========
 * 100% of proceeds support donations to Corvus.
 * price: a dollar amount or the word "Inquire"
 */
export const artPieces: ArtPiece[] = [
  {
    id: "mossblood-heart",
    title: "Mossblood Heart",
    price: "Inquire",
    image: "/images/art-heart-640.jpg",
    imageWebp: "/images/art-heart-640.webp",
    alt: "Embroidered anatomical heart in blood-red thread on black linen",
  },
  {
    id: "corvus",
    title: "Corvus",
    price: "Inquire",
    image: "/images/art-crow-640.jpg",
    imageWebp: "/images/art-crow-640.webp",
    alt: "Embroidered crow in bone-white thread on black linen",
  },
  {
    id: "night-smoke",
    title: "Night Smoke",
    price: "Inquire",
    image: "/images/art-cigarette-640.jpg",
    imageWebp: "/images/art-cigarette-640.webp",
    alt: "Embroidered cigarette and night flower in bone and red thread",
  },
];

export const CORVUS_NOTE =
  "100% of art proceeds support donations to Corvus.";
