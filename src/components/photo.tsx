type Source = { type: string; srcSet: string };

type PhotoProps = {
  sources: Source[];
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes: string;
  className?: string;
  eager?: boolean;
};

export function Photo({
  sources,
  src,
  alt,
  width,
  height,
  sizes,
  className,
  eager,
}: PhotoProps) {
  return (
    <picture className="block h-full w-full">
      {sources.map((s) => (
        <source key={s.type} type={s.type} srcSet={s.srcSet} sizes={sizes} />
      ))}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        className={className}
        fetchPriority={eager ? "high" : undefined}
        loading={eager ? "eager" : "lazy"}
        decoding={eager ? "sync" : "async"}
      />
    </picture>
  );
}

/** Official public photo of Iris (Apple Music / Spotify artist image, dramatic crop). */
export const irisHero: Omit<PhotoProps, "className" | "eager"> = {
  sources: [
    {
      type: "image/avif",
      srcSet: "/images/iris-hero-800.avif 800w, /images/iris-hero-1000.avif 1000w",
    },
    {
      type: "image/webp",
      srcSet:
        "/images/iris-hero-480.webp 480w, /images/iris-hero-800.webp 800w, /images/iris-hero-1000.webp 1000w",
    },
  ],
  src: "/images/iris-hero-800.jpg",
  alt: "Iris Onyx",
  width: 800,
  height: 800,
  sizes: "(min-width: 1024px) 42vw, 100vw",
};

/** Official Apple Music artist portrait. */
export const irisClose: Omit<PhotoProps, "className" | "eager"> = {
  sources: [
    {
      type: "image/avif",
      srcSet: "/images/iris-close-800.avif 800w, /images/iris-close-1200.avif 1200w",
    },
    {
      type: "image/webp",
      srcSet:
        "/images/iris-close-480.webp 480w, /images/iris-close-800.webp 800w, /images/iris-close-1200.webp 1200w",
    },
  ],
  src: "/images/iris-close-800.jpg",
  alt: "Iris Onyx, official artist portrait",
  width: 800,
  height: 800,
  sizes: "(min-width: 1024px) 40vw, 100vw",
};

/** Cigarette single cover — photo of Iris. */
export const irisStreet: Omit<PhotoProps, "className" | "eager"> = {
  sources: [
    {
      type: "image/avif",
      srcSet: "/images/iris-street-800.avif 800w, /images/iris-street-1000.avif 1000w",
    },
    {
      type: "image/webp",
      srcSet:
        "/images/iris-street-480.webp 480w, /images/iris-street-800.webp 800w, /images/iris-street-1000.webp 1000w",
    },
  ],
  src: "/images/iris-street-800.jpg",
  alt: "Iris Onyx on the street, from the Cigarette single",
  width: 800,
  height: 800,
  sizes: "100vw",
};
