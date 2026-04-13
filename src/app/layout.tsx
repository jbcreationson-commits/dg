import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Inter, Rajdhani } from "next/font/google";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

import { CursorHalo } from "@/components/layout/CursorHalo";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { ScrollProgressBar } from "@/components/layout/ScrollProgressBar";
import { ScrollToTopButton } from "@/components/layout/ScrollToTopButton";
import { WhatsAppCTA } from "@/components/layout/WhatsAppCTA";
import {
  createLocalBusinessSchema,
  createMetadata,
  createOrganizationSchema,
  siteConfig,
} from "@/lib/seo";

import "./globals.css";

const headingFont = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-heading",
  display: "swap",
});

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const accentFont = Rajdhani({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-accent",
  display: "swap",
});

export const metadata: Metadata = {
  ...createMetadata({
    title: siteConfig.title,
    description: siteConfig.description,
    path: "/",
  }),
  metadataBase: new URL(siteConfig.siteUrl),
  icons: {
    icon: [{ url: "/logo.png", type: "image/png" }],
    shortcut: ["/logo.png"],
    apple: [{ url: "/logo.png", type: "image/png" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#CC0000",
};

const organizationSchema = createOrganizationSchema();
const localBusinessSchema = createLocalBusinessSchema();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

  return (
    <html lang="en" className="dark">
      <body
        className={`${headingFont.variable} ${bodyFont.variable} ${accentFont.variable} min-h-screen overflow-x-hidden bg-canvas text-ink`}
      >
        {gtmId ? <GoogleTagManager gtmId={gtmId} /> : null}
        {gaId ? <GoogleAnalytics gaId={gaId} /> : null}

        <ScrollProgressBar />
        <CursorHalo />
        <Navbar />
        <main className="relative pt-2">{children}</main>
        <Footer />
        <ScrollToTopButton />
        <WhatsAppCTA />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </body>
    </html>
  );
}
