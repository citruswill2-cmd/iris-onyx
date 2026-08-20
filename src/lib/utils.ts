import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function inquireMailto(pieceTitle: string) {
  const subject = encodeURIComponent(`Art inquiry — ${pieceTitle}`);
  const body = encodeURIComponent(
    `Hi Iris —\n\nI'd like to inquire about "${pieceTitle}".\n\n`,
  );
  return `mailto:iris0nyx@gmail.com?subject=${subject}&body=${body}`;
}
