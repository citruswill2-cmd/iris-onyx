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
  shop: "https://iris-onyx-shop.fourthwall.com",
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
  line: string;
  price: string;
  image: string;
  imageWebp: string;
  alt: string;
};

/* ========== ART ==========
 * Handmade hoop embroidery from IRISNEEDLENBONE.
 * 100% of proceeds support donations to Corvus.
 */
export const artPieces: ArtPiece[] = [
  {
    id: "dark-grunge",
    title: "Dark Grunge",
    line: "Moth, flower, skull",
    price: "Inquire",
    image: "/images/art-grunge-640.jpg",
    imageWebp: "/images/art-grunge-640.webp",
    alt: "Handmade hoop embroidery of a death's-head moth, skull, and night flowers on black linen",
  },
  {
    id: "hilarious",
    title: "Hilarious",
    line: "Alternative wall hanging",
    price: "$30",
    image: "/images/art-hilarious-640.jpg",
    imageWebp: "/images/art-hilarious-640.webp",
    alt: "Handmade hoop embroidery of a snarling anatomical heart on black linen",
  },
  {
    id: "bugs",
    title: "Bugs",
    line: "Beetles, moths, cicada",
    price: "Inquire",
    image: "/images/art-bugs-640.jpg",
    imageWebp: "/images/art-bugs-640.webp",
    alt: "Handmade hoop embroidery of beetles, moths, and a cicada on black linen",
  },
  {
    id: "circus",
    title: "Circus",
    line: "Alternative wall hanging",
    price: "Inquire",
    image: "/images/art-circus-640.jpg",
    imageWebp: "/images/art-circus-640.webp",
    alt: "Handmade hoop embroidery of a strange circus tent and moon on black linen",
  },
  {
    id: "gothic-cow",
    title: "Gothic Cow",
    line: "Alternative farm",
    price: "Inquire",
    image: "/images/art-cow-640.jpg",
    imageWebp: "/images/art-cow-640.webp",
    alt: "Handmade hoop embroidery of a longhorn cow skull and dark flowers on black linen",
  },
  {
    id: "cat",
    title: "Cat",
    line: "Alternative wall hanging",
    price: "Inquire",
    image: "/images/art-cat-640.jpg",
    imageWebp: "/images/art-cat-640.webp",
    alt: "Handmade hoop embroidery of a black cat with a knife on black linen",
  },
  {
    id: "smoking-rat",
    title: "Smoking Rat",
    line: "Alternative farm",
    price: "Inquire",
    image: "/images/art-rat-640.jpg",
    imageWebp: "/images/art-rat-640.webp",
    alt: "Handmade hoop embroidery of a rat smoking a cigarette on black linen",
  },
  {
    id: "abstract",
    title: "Abstract Collage",
    line: "Layered hoop",
    price: "$30",
    image: "/images/art-abstract-640.jpg",
    imageWebp: "/images/art-abstract-640.webp",
    alt: "Handmade abstract embroidery collage on black fabric in a wooden hoop",
  },
];

export type MerchItem = {
  id: string;
  title: string;
  price: string;
  href: string;
  image: string;
  imageWebp: string;
  alt: string;
};

/* ========== MERCH ==========
 * Live shop: iris-onyx-shop.fourthwall.com
 */
export const merchItems: MerchItem[] = [
  {
    id: "hoodie",
    title: "Hoodie",
    price: "$55",
    href: "https://iris-onyx-shop.fourthwall.com/products/iris-onyx-hoddie",
    image: "/images/merch-hoodie-640.jpg",
    imageWebp: "/images/merch-hoodie-640.webp",
    alt: "Black IRIS ONYX hoodie",
  },
  {
    id: "joggers",
    title: "Joggers",
    price: "$40",
    href: "https://iris-onyx-shop.fourthwall.com/products/iris-0nyx-joggers",
    image: "/images/merch-joggers-640.jpg",
    imageWebp: "/images/merch-joggers-640.webp",
    alt: "Black IRIS 0NYX joggers",
  },
  {
    id: "graphic",
    title: "Graphic Tee",
    price: "$30",
    href: "https://iris-onyx-shop.fourthwall.com/products/iris-onyx-graphic-design",
    image: "/images/merch-graphic-640.jpg",
    imageWebp: "/images/merch-graphic-640.webp",
    alt: "Black IRIS ONYX graphic t-shirt",
  },
  {
    id: "rose",
    title: "Pink Rose Tee",
    price: "$30",
    href: "https://iris-onyx-shop.fourthwall.com/products/pink-rose-iris-onyx",
    image: "/images/merch-rose-640.jpg",
    imageWebp: "/images/merch-rose-640.webp",
    alt: "Black t-shirt with pink rose IRIS ONYX print",
  },
  {
    id: "veil",
    title: "Veil Shirt",
    price: "$25",
    href: "https://iris-onyx-shop.fourthwall.com/products/veil-iris-shirt",
    image: "/images/merch-veil-640.jpg",
    imageWebp: "/images/merch-veil-640.webp",
    alt: "Black IRIS ONYX veil shirt",
  },
  {
    id: "est",
    title: "EST. Tee",
    price: "$25",
    href: "https://iris-onyx-shop.fourthwall.com/products/est-iris-onyx",
    image: "/images/merch-est-640.jpg",
    imageWebp: "/images/merch-est-640.webp",
    alt: "Black EST. IRIS ONYX t-shirt",
  },
  {
    id: "beanie",
    title: "Beanie",
    price: "$25",
    href: "https://iris-onyx-shop.fourthwall.com/products/iris-0nys-benie",
    image: "/images/merch-beanie-640.jpg",
    imageWebp: "/images/merch-beanie-640.webp",
    alt: "Black IRIS 0NYX beanie",
  },
  {
    id: "hat",
    title: "Hat",
    price: "$25",
    href: "https://iris-onyx-shop.fourthwall.com/products/iris-onyx-hat-1",
    image: "/images/merch-hat-640.jpg",
    imageWebp: "/images/merch-hat-640.webp",
    alt: "Black IRIS ONYX baseball hat",
  },
  {
    id: "mug",
    title: "EST. Mug",
    price: "$21",
    href: "https://iris-onyx-shop.fourthwall.com/products/est-iris-mug",
    image: "/images/merch-mug-640.jpg",
    imageWebp: "/images/merch-mug-640.webp",
    alt: "Black EST. IRIS ONYX mug",
  },
];

export const CORVUS_NOTE =
  "100% of art proceeds support donations to Corvus.";
