import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "VYES DigiGrow";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background:
            "radial-gradient(circle at 20% 10%, rgba(204,0,0,0.55), transparent 35%), radial-gradient(circle at 85% 20%, rgba(255,68,68,0.4), transparent 24%), linear-gradient(135deg, #050505 0%, #111111 100%)",
          color: "white",
          padding: "56px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "40px",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: "36px",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div
            style={{
              fontSize: 24,
              letterSpacing: 8,
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.7)",
            }}
          >
            VYES DIGI GROW
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div
              style={{
                fontSize: 92,
                lineHeight: 0.92,
                textTransform: "uppercase",
                maxWidth: 900,
              }}
            >
              We Grow Brands Digitally. Fearlessly.
            </div>
            <div
              style={{
                fontSize: 28,
                color: "rgba(255,255,255,0.75)",
                letterSpacing: 2,
              }}
            >
              SEO · Paid Ads · Social Media · Web Design · Branding
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
