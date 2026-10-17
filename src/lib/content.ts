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
  site: "https://iris0nyx.com",
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

const ART = ARTIST.spotifyArtist;

/* ========== TRACKS ==========
 * featured: true  → home page + music page
 * featured: false → music page only
 * Newest first.
 */
export const tracks: Track[] = [
  {
    id: "whats-reality",
    title: "Whats Reality",
    line: "newest single",
    duration: "3:14",
    year: "2026",
    featured: true,
    spotify: ART,
    apple: "https://music.apple.com/us/album/whats-reality/6809522505?i=6809522509",
    cover: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/e3/9d/58/e39d58a0-9c33-2828-26f9-a51499d08a9d/991061045133.png/600x600bb.jpg",
    coverWebp: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/e3/9d/58/e39d58a0-9c33-2828-26f9-a51499d08a9d/991061045133.png/600x600bb.jpg",
  },
  {
    id: "forgettin-you",
    title: "Forgettin You",
    line: "newest cut",
    duration: "3:51",
    year: "2026",
    featured: false,
    spotify: ART,
    apple: "https://music.apple.com/us/album/forgettin-you/6797250252?i=6797250253",
    cover: "/images/cover-more-640.jpg",
    coverWebp: "/images/cover-more-640.webp",
  },
  {
    id: "bleeding-heart",
    title: "Bleeding Heart",
    line: "the saddest one I ever wrote",
    duration: "3:07",
    year: "2026",
    featured: true,
    spotify: "https://open.spotify.com/track/2pAb6zmao9XQeeTiP41ZYU",
    apple: "https://music.apple.com/us/album/bleeding-heart/6792559904?i=6792559905",
    cover: "/images/cover-bleeding-640.jpg",
    coverWebp: "/images/cover-bleeding-640.webp",
  },
  {
    id: "religion",
    title: "Religion",
    line: "single",
    duration: "3:27",
    year: "2026",
    featured: false,
    spotify: "https://open.spotify.com/track/0xj8ipQSllPivbuqL6A5kr",
    apple: "https://music.apple.com/us/album/religion/1896130917?i=6765935237",
    cover: "/images/iris-street-800.jpg",
    coverWebp: "/images/iris-street-800.webp",
  },
  {
    id: "lust",
    title: "L.U.S.T.",
    line: "single",
    duration: "3:57",
    year: "2026",
    featured: false,
    spotify: ART,
    apple: "https://music.apple.com/us/album/l-u-s-t/1875985055?i=1875985176",
    cover: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/f3/5e/60/f35e605a-32a4-0a9d-f60e-9415012d9f4f/057914848013.png/600x600bb.jpg",
    coverWebp: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/f3/5e/60/f35e605a-32a4-0a9d-f60e-9415012d9f4f/057914848013.png/600x600bb.jpg",
  },
  {
    id: "poison",
    title: "Poison In My Veins",
    line: "it stays",
    duration: "2:50",
    year: "2026",
    featured: false,
    spotify: "https://open.spotify.com/track/5lrJZGTSc5Ydy8J8MnkVsI",
    apple: "https://music.apple.com/us/album/poison-in-my-veins/1868101021?i=1868101022",
    cover: "/images/cover-poison-640.jpg",
    coverWebp: "/images/cover-poison-640.webp",
  },
  {
    id: "cigarette",
    title: "Cigarette",
    line: "your voice is my favorite song",
    duration: "2:56",
    year: "2025",
    featured: true,
    spotify: "https://open.spotify.com/track/0wCf0J4lSwgs2LFhjAhdEa",
    apple: "https://music.apple.com/us/album/cigarette/1732130909?i=1732130910",
    cover: "/images/cover-cigarette-640.jpg",
    coverWebp: "/images/cover-cigarette-640.webp",
  },
  {
    id: "use-me",
    title: "Use Me! (Reimagined)",
    line: "don't look away",
    duration: "2:51",
    year: "2025",
    featured: false,
    spotify: ART,
    apple: "https://music.apple.com/us/album/use-me-reimagined/1850861639?i=1850861640",
    cover: "/images/iris-look-800.jpg",
    coverWebp: "/images/iris-look-800.webp",
  },
  {
    id: "time-of-our-lifes",
    title: "The Time of Our Lifes",
    line: "single",
    duration: "2:14",
    year: "2025",
    featured: false,
    spotify: "https://open.spotify.com/track/6CBEflaWEsuKGIqXAE5Vof",
    apple: "https://music.apple.com/us/album/the-time-of-our-lifes/1847059549?i=1847059550",
    cover: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/a7/b9/64/a7b9648f-5328-1bcc-8c58-44a880bbf918/057829863828.png/600x600bb.jpg",
    coverWebp: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/a7/b9/64/a7b9648f-5328-1bcc-8c58-44a880bbf918/057829863828.png/600x600bb.jpg",
  },
  {
    id: "my-drug",
    title: "My Drug",
    line: "late night, windows down",
    duration: "2:20",
    year: "2025",
    featured: true,
    spotify: "https://open.spotify.com/album/72LkljGHnXKS36KoOEFage",
    apple: "https://music.apple.com/us/album/my-drug/1834309350?i=1834309351",
    cover: "/images/cover-mydrug-640.jpg",
    coverWebp: "/images/cover-mydrug-640.webp",
  },
  {
    id: "clown-2",
    title: "Clown 2",
    line: "single",
    duration: "3:05",
    year: "2025",
    featured: false,
    spotify: ART,
    apple: "https://music.apple.com/us/album/clown-2/1827197077?i=1827197078",
    cover: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/0a/c9/4e/0ac94e49-8054-7592-a95f-de435c3fb675/057829015692.png/600x600bb.jpg",
    coverWebp: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/0a/c9/4e/0ac94e49-8054-7592-a95f-de435c3fb675/057829015692.png/600x600bb.jpg",
  },
  {
    id: "haunted",
    title: "Haunted",
    line: "single",
    duration: "2:00",
    year: "2025",
    featured: false,
    spotify: ART,
    apple: "https://music.apple.com/us/album/haunted/1818656506?i=1818656507",
    cover: "/images/iris-hero-800.jpg",
    coverWebp: "/images/iris-hero-800.webp",
  },
  {
    id: "only-you",
    title: "Only You and Me",
    line: "single",
    duration: "2:11",
    year: "2025",
    featured: false,
    spotify: "https://open.spotify.com/track/6dXDDNdvZe7ipvoncEb2fv",
    apple: "https://music.apple.com/us/album/only-you-and-me/1813805016?i=1813805017",
    cover: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/7c/4b/13/7c4b1310-aad2-688e-41bb-92a2ac3b3ae1/990591259942.png/600x600bb.jpg",
    coverWebp: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/7c/4b/13/7c4b1310-aad2-688e-41bb-92a2ac3b3ae1/990591259942.png/600x600bb.jpg",
  },
  {
    id: "cannibal",
    title: "Cannibal!",
    line: "single",
    duration: "2:57",
    year: "2025",
    featured: false,
    spotify: ART,
    apple: "https://music.apple.com/us/album/cannibal/1796865234?i=1796865235",
    cover: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/b2/20/69/b2206908-d81c-7d4d-7b1d-6e6745c8332c/056870135403.png/600x600bb.jpg",
    coverWebp: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/b2/20/69/b2206908-d81c-7d4d-7b1d-6e6745c8332c/056870135403.png/600x600bb.jpg",
  },
  {
    id: "pretty-boy",
    title: "Pretty Boy!",
    line: "single",
    duration: "2:50",
    year: "2025",
    featured: false,
    spotify: ART,
    apple: "https://music.apple.com/us/album/pretty-boy/1794052744?i=1794052745",
    cover: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/d7/d6/82/d7d682cf-51cd-d491-1881-82d0b4ef8225/055905953043.png/600x600bb.jpg",
    coverWebp: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/d7/d6/82/d7d682cf-51cd-d491-1881-82d0b4ef8225/055905953043.png/600x600bb.jpg",
  },
  {
    id: "you",
    title: "You!",
    line: "single",
    duration: "3:26",
    year: "2025",
    featured: false,
    spotify: ART,
    apple: "https://music.apple.com/us/album/you/1791801551?i=1791801552",
    cover: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/25/3c/8a/253c8a9d-b9c9-aa0f-4211-dcdc13ed6cb2/055905789505.png/600x600bb.jpg",
    coverWebp: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/25/3c/8a/253c8a9d-b9c9-aa0f-4211-dcdc13ed6cb2/055905789505.png/600x600bb.jpg",
  },
  {
    id: "what-if",
    title: "What If",
    line: "Polaroid Funeral",
    duration: "3:46",
    year: "2024",
    featured: false,
    spotify: "https://open.spotify.com/track/0JrLSZWTj3sDTLR2vkY7Ze",
    apple: "https://music.apple.com/us/album/what-if/1788124566?i=1788124567",
    cover: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/fb/1a/77/fb1a7720-10ad-c7f0-9d62-8376a16e45c9/055905509318.png/600x600bb.jpg",
    coverWebp: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/fb/1a/77/fb1a7720-10ad-c7f0-9d62-8376a16e45c9/055905509318.png/600x600bb.jpg",
  },
  {
    id: "piece-of-me",
    title: "Piece of Me",
    line: "Polaroid Funeral",
    duration: "2:37",
    year: "2024",
    featured: false,
    spotify: ART,
    apple: "https://music.apple.com/us/album/piece-of-me/1788124566?i=1788124568",
    cover: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/fb/1a/77/fb1a7720-10ad-c7f0-9d62-8376a16e45c9/055905509318.png/600x600bb.jpg",
    coverWebp: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/fb/1a/77/fb1a7720-10ad-c7f0-9d62-8376a16e45c9/055905509318.png/600x600bb.jpg",
  },
  {
    id: "ment-for-me",
    title: "Ment for Me",
    line: "Polaroid Funeral",
    duration: "2:37",
    year: "2024",
    featured: false,
    spotify: ART,
    apple: "https://music.apple.com/us/album/ment-for-me/1788124566?i=1788124569",
    cover: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/fb/1a/77/fb1a7720-10ad-c7f0-9d62-8376a16e45c9/055905509318.png/600x600bb.jpg",
    coverWebp: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/fb/1a/77/fb1a7720-10ad-c7f0-9d62-8376a16e45c9/055905509318.png/600x600bb.jpg",
  },
  {
    id: "i-keep-fucking-up",
    title: "I Keep Fucking Up",
    line: "Polaroid Funeral",
    duration: "2:12",
    year: "2024",
    featured: false,
    spotify: ART,
    apple: "https://music.apple.com/us/album/i-keep-f-g-up/1788124566?i=1788124570",
    cover: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/fb/1a/77/fb1a7720-10ad-c7f0-9d62-8376a16e45c9/055905509318.png/600x600bb.jpg",
    coverWebp: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/fb/1a/77/fb1a7720-10ad-c7f0-9d62-8376a16e45c9/055905509318.png/600x600bb.jpg",
  },
  {
    id: "in-the-dark",
    title: "In the Dark! (feat. ¢urious G)",
    line: "single",
    duration: "2:48",
    year: "2024",
    featured: false,
    spotify: "https://open.spotify.com/track/2cxmATYfRDNDtc26WydZHO",
    apple: "https://music.apple.com/us/album/in-the-dark-feat-%C2%A2urious-g/1767983032?i=1767983033",
    cover: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/96/48/1b/96481b29-4938-f5ae-dfc3-4d02c58d5945/055855639615.png/600x600bb.jpg",
    coverWebp: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/96/48/1b/96481b29-4938-f5ae-dfc3-4d02c58d5945/055855639615.png/600x600bb.jpg",
  },
  {
    id: "home",
    title: "Home!",
    line: "single",
    duration: "3:22",
    year: "2024",
    featured: false,
    spotify: ART,
    apple: "https://music.apple.com/us/album/home/1760027605?i=1760027606",
    cover: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/77/ae/5c/77ae5c86-df37-aabb-864a-87e8559da09e/055855335418.png/600x600bb.jpg",
    coverWebp: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/77/ae/5c/77ae5c86-df37-aabb-864a-87e8559da09e/055855335418.png/600x600bb.jpg",
  },
  {
    id: "saved-me",
    title: "Saved Me!",
    line: "single",
    duration: "2:51",
    year: "2024",
    featured: false,
    spotify: "https://open.spotify.com/track/7Go0857UuOrTV8EEo7Jbs1",
    apple: "https://music.apple.com/us/album/saved-me/1755278688?i=1755279019",
    cover: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/ed/ea/54/edea5444-fb20-54e8-0782-f66e27388438/055855220417.png/600x600bb.jpg",
    coverWebp: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/ed/ea/54/edea5444-fb20-54e8-0782-f66e27388438/055855220417.png/600x600bb.jpg",
  },
  {
    id: "watch-me",
    title: "Watch Me!",
    line: "first single",
    duration: "3:00",
    year: "2023",
    featured: false,
    spotify: ART,
    apple: "https://music.apple.com/us/album/watch-me/1718747805?i=1718747806",
    cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/24/0b/fa/240bfa50-e95b-3f76-6beb-abe8e17eb529/064837238913.png/600x600bb.jpg",
    coverWebp: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/24/0b/fa/240bfa50-e95b-3f76-6beb-abe8e17eb529/064837238913.png/600x600bb.jpg",
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
export const shows: Show[] = [];

export const nextShow: Show | undefined = shows[0];

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
