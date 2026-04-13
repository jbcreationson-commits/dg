import type { Metadata } from "next";
import type { FAQPage, LocalBusiness, Organization, Service, WithContext } from "schema-dts";

import { absoluteUrl } from "@/lib/utils";

type MetadataInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  image?: string;
  type?: "website" | "article";
};

export const siteConfig = {
  name: "VYES DigiGrow",
  title: "VYES DigiGrow | Premium Digital Marketing Agency",
  description:
    "We help brands grow digitally with SEO, PPC, Social, Web, Branding, Content softwares and GMB. Results-driven strategies by VYES DigiGrow.",
  siteUrl: "https://www.vyesdigigrow.com",
  keywords: [
    "digital marketing agency",
    "SEO services",
    "PPC management",
    "social media marketing",
    "web design",
    "GMB optimization",
    "VYES DigiGrow",
  ],
};

export function createMetadata({
  title,
  description,
  path = "",
  keywords = [],
  image = "/opengraph-image",
  type = "website",
}: MetadataInput): Metadata {
  const fullTitle = title === siteConfig.title ? title : `${title} | ${siteConfig.name}`;
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return {
    title: fullTitle,
    description,
    keywords: [...siteConfig.keywords, ...keywords],
    alternates: {
      canonical: url,
    },
    openGraph: {
      type,
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [imageUrl],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function createOrganizationSchema(): WithContext<Organization> {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    logo: absoluteUrl("/logo.png"),
    sameAs: [
      "https://www.instagram.com",
      "https://www.linkedin.com",
      "https://www.facebook.com",
    ],
    slogan: "We Grow Brands Digitally. Fearlessly.",
    description: siteConfig.description,
  };
}

export function createLocalBusinessSchema(): WithContext<LocalBusiness> {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    image: absoluteUrl("/logo.png"),
    url: siteConfig.siteUrl,
    telephone: "+91-73587-79414",
    priceRange: "$$",
    areaServed: "Worldwide",
    address: {
      "@type": "PostalAddress",
      streetAddress: "AJS Tower 1ST FLOOR, Sakthi Nagar 3rd St",
      addressLocality: "Tiruchirappalli",
      addressRegion: "Tamil Nadu",
      postalCode: "620019",
      addressCountry: "IN",
    },
  };
}

export function createFaqSchema(
  questions: Array<{ question: string; answer: string }>,
): WithContext<FAQPage> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function createBreadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function createServiceSchema({
  name,
  description,
  providerName,
  url,
}: {
  name: string;
  description: string;
  providerName: string;
  url: string;
}): WithContext<Service> {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: absoluteUrl(url),
    provider: {
      "@type": "Organization",
      name: providerName,
    },
  };
}
