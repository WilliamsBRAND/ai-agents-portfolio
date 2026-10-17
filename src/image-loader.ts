/**
 * Image loader for the /ai base path (agentic AI portfolio).
 *
 * The content files write images as "/logos/x.png", but with a base path the optimizer and the static
 * files are both found under /ai. This adds the prefix in one place. SVGs are served as they are
 * (the optimizer does not handle them); anything already starting with /ai is left alone.
 */
const BASE_PATH = "/ai";

export default function imageLoader({ src, width, quality }: { src: string; width: number; quality?: number }) {
  const path = src.startsWith("/") && !src.startsWith(BASE_PATH + "/") ? BASE_PATH + src : src;
  if (path.split("?")[0].endsWith(".svg")) return path;
  return `${BASE_PATH}/_next/image?url=${encodeURIComponent(path)}&w=${width}&q=${quality || 75}`;
}