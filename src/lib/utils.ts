export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function absoluteUrl(path = "") {
  return `https://www.vyesdigigrow.com${path}`;
}

export function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(value));
}

export function getReadingTime(content: string) {
  const words = content.trim().split(/\s+/).length;
  return `${Math.max(2, Math.ceil(words / 220))} min read`;
}
