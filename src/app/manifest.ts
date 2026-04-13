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
        src: "/logo.png",
        sizes: "192x192 512x512",
        type: "image/png",
      },
    ],
  };
}
