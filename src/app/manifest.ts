import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "VYES DigiGrow",
    short_name: "DigiGrow",
    description: "Premium digital marketing agency website for VYES DigiGrow.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#CC0000",
    icons: [
      {
        src: "/icon-192.svg",
        sizes: "192x192",
        type: "image/svg+xml",
      },
      {
        src: "/icon-512.svg",
        sizes: "512x512",
        type: "image/svg+xml",
      },
      {
        src: "/maskable-512.svg",
        sizes: "512x512",
        type: "image/svg+xml",
        purpose: "maskable",
      },
    ],
  };
}
