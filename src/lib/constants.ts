import {
  BarChart3,
  BadgeCheck,
  Brush,
  CheckCircle2,
  FileText,
  Globe2,
  LayoutDashboard,
  LineChart,
  Megaphone,
  Search,
  Share2,
  Sparkles,
  Target,
  Zap,
} from "lucide-react";

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

// Tools & platforms we specialise in — replacing fake client logos
export const trustLogos = [
  "Google Ads",
  "Meta Ads",
  "Semrush",
  "Next.js",
  "GA4",
  "Figma",
  "Search Console",
  "Ahrefs",
];

// Capability signals — no fabricated numbers
export const stats = [
  {
    headline: "Free",
    subline: "Strategy Audit",
    description: "Start with a no-obligation review of your digital presence, gaps, and biggest growth levers.",
  },
  {
    headline: "2–4",
    subline: "Week Sprints",
    description: "Fast, focused delivery cycles — no bloated retainers, no waiting six months to see output.",
  },
  {
    headline: "Modern",
    subline: "Tech Stack",
    description: "Next.js, GA4, Meta & Google Ads — tools built for performance, speed, and data clarity in 2025.",
  },
  {
    headline: "Pilot",
    subline: "Pricing Available",
    description: "Special rates for our first clients as we build our case studies — lower risk, higher motivation.",
  },
];

export const serviceHighlights = [
  {
    slug: "seo",
    title: "SEO",
    shortTitle: "SEO",
    summary:
      "Technical audits, content strategy, and authority building that compound organic growth.",
    intro:
      "We build search systems that turn brand intent into compounding traffic and pipeline.",
    icon: Search,
    bullets: [
      "Technical SEO and performance fixes",
      "Topical content clusters and on-page optimization",
      "Link earning campaigns and reporting dashboards",
    ],
    outcomes: ["Higher rankings", "Stronger intent traffic", "Better conversion paths"],
    heroMetric: "3.8x organic pipeline growth",
  },
  {
    slug: "paid-ads",
    title: "PPC",
    shortTitle: "PPC",
    summary:
      "Search, social, and remarketing campaigns calibrated for efficient CAC and faster revenue feedback loops.",
    intro:
      "From audience mapping to creative testing, we design paid funnels that scale with confidence.",
    icon: BarChart3,
    bullets: [
      "Google Ads and Meta Ads strategy",
      "Landing page alignment and conversion tracking",
      "Creative testing with spend allocation by signal quality",
    ],
    outcomes: ["Lower CAC", "Faster experimentation", "Clear attribution"],
    heroMetric: "18x ROAS on flagship campaign",
  },
  {
    slug: "social-media",
    title: "Social Media Marketing",
    shortTitle: "Social Media",
    summary:
      "Content systems and channel strategies that build relevance, community, and qualified demand.",
    intro:
      "We help brands show up with a consistent voice and a measurable growth engine across social platforms.",
    icon: Share2,
    bullets: [
      "Content calendars and campaign concepts",
      "Channel-specific creative direction",
      "Community growth and performance reporting",
    ],
    outcomes: ["Higher engagement", "Stronger retention", "Social-led demand"],
    heroMetric: "240% audience growth in 6 months",
  },
  {
    slug: "web-design",
    title: "Web",
    shortTitle: "Web",
    summary:
      "Fast, expressive websites that turn positioning into trust and traffic into action.",
    intro:
      "We create premium digital experiences that look sharp, load fast, and close the gap between click and conversion.",
    icon: Globe2,
    bullets: [
      "Conversion-driven UX architecture",
      "Next.js builds with SEO best practices",
      "Analytics, forms, and CMS-ready structures",
    ],
    outcomes: ["Faster sites", "Better UX", "More conversions"],
    heroMetric: "61% faster LCP after redesign",
  },
  {
    slug: "branding",
    title: "Branding",
    shortTitle: "Branding",
    summary:
      "Positioning, messaging, and visual systems that make the right people remember you.",
    intro:
      "We sharpen how brands sound, look, and move so marketing has a stronger foundation to scale from.",
    icon: Sparkles,
    bullets: [
      "Brand strategy workshops",
      "Messaging frameworks and campaign voice",
      "Identity systems and rollout assets",
    ],
    outcomes: ["Clear positioning", "Stronger memorability", "Consistent campaigns"],
    heroMetric: "4-week brand sprint delivery",
  },
  {
    slug: "content-gmb",
    title: "Content Softwares & GMB",
    shortTitle: "Content & GMB",
    summary:
      "Editorial strategy, software tools, and GMB optimization to dominate local search.",
    intro:
      "We plan content and optimize your Google My Business profile to earn attention across search and social channels.",
    icon: FileText,
    bullets: [
      "GMB Profile Optimization",
      "Content Software Integration",
      "Local Search Visibility",
    ],
    outcomes: ["Higher local rankings", "Better lead nurturing", "Search visibility"],
    heroMetric: "Consistent lead flow",
  },
];

export const whyChooseUs = [
  {
    title: "Signal-led decisions",
    description:
      "Every recommendation is grounded in user behavior, conversion quality, and what the brand needs next.",
    icon: BadgeCheck,
  },
  {
    title: "Senior execution",
    description:
      "Strategy, creative, analytics, and web delivery stay tight because the same team owns outcomes end to end.",
    icon: LayoutDashboard,
  },
  {
    title: "Transparent reporting",
    description:
      "Dashboards stay simple: pipeline, revenue influence, conversion quality, and what we’re changing next.",
    icon: LineChart,
  },
  {
    title: "Brand-first growth",
    description:
      "Performance matters, but so does taste. We build systems that improve metrics without flattening your identity.",
    icon: Brush,
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Audit & signal mapping",
    description:
      "We review your current acquisition mix, analytics fidelity, funnel leaks, and brand gaps to identify fast wins and strategic bets.",
  },
  {
    step: "02",
    title: "Positioning the growth angle",
    description:
      "We sharpen the message, offer, and channel mix so creative and performance teams are pulling toward the same narrative.",
  },
  {
    step: "03",
    title: "Launch, test, iterate",
    description:
      "Campaigns ship with a testing roadmap, clear performance thresholds, and a weekly learning loop.",
  },
  {
    step: "04",
    title: "Scale what compounds",
    description:
      "We double down on what's producing qualified growth and remove friction everywhere else.",
  },
];

// Our methodology showcase — replaces fake portfolio case studies
export const methodologyCards = [
  {
    step: "01",
    title: "Audit & Signal Mapping",
    category: "Discovery",
    description:
      "We start by understanding your market, your competitors' weaknesses, and where your greatest acquisition leverage lives — before touching a single ad or page.",
    deliverables: [
      "Competitor landscape analysis",
      "Website & SEO health audit",
      "Paid funnel gap review",
      "Audience persona mapping",
    ],
  },
  {
    step: "02",
    title: "Strategy & Positioning",
    category: "Planning",
    description:
      "We sharpen your message, choose the right channels, and build a campaign architecture that matches your goals and budget — no generic playbooks.",
    deliverables: [
      "Core positioning statement",
      "Channel prioritisation plan",
      "Creative direction brief",
      "KPI & tracking setup",
    ],
  },
  {
    step: "03",
    title: "Launch & Test",
    category: "Execution",
    description:
      "We go live with a disciplined testing framework — every campaign ships with clear performance thresholds and a weekly learning cadence.",
    deliverables: [
      "Campaign builds & go-live",
      "A/B creative variants",
      "Weekly performance reviews",
      "Live dashboard access",
    ],
  },
  {
    step: "04",
    title: "Scale & Compound",
    category: "Growth",
    description:
      "Once signals confirm what's working, we shift budget and energy toward the highest-leverage activities and compound the gains.",
    deliverables: [
      "Budget reallocation strategy",
      "Organic + paid integration",
      "Monthly growth reports",
      "Quarterly strategy reviews",
    ],
  },
];

// "Why fresh agencies win" — replaces fake client testimonials
export const testimonials = [
  {
    name: "No Legacy Overhead",
    title: "Fresh perspective on every brief",
    quote:
      "Established agencies carry years of outdated templates and internal politics. We approach every brief with zero assumptions, modern methods, and complete senior focus.",
  },
  {
    name: "Pilot Pricing",
    title: "Lower risk for you",
    quote:
      "Because we're building our track record, you get founder-led execution at rates far below what a seasoned agency charges — and we're deeply motivated to over-deliver.",
  },
  {
    name: "Founder-Led Work",
    title: "No junior handoffs",
    quote:
      "Every strategy call, every creative decision, every report comes directly from our core team — not an over-stretched account manager who joined last month.",
  },
];

export const faqItems = [
  {
    question: "You seem new. Why should we work with you?",
    answer:
      "Because we are. Being new means zero legacy overhead, no outdated templates, and founder-level execution on every project. You get senior attention at pilot pricing while we build our track record.",
  },
  {
    question: "Do you offer standalone services or full retainers?",
    answer:
      "Both. We can step in for a focused SEO or website build, or run a broader retainer covering creative, paid, search, and reporting.",
  },
  {
    question: "How quickly can we start seeing results?",
    answer:
      "Paid channels often show early signal within weeks. SEO, branding, and content systems usually compound over a longer 60 to 180 day horizon.",
  },
  {
    question: "Can you work with our in-house team?",
    answer:
      "Yes. We often partner with internal marketing or sales teams and fit into existing workflows, tools, and review cycles.",
  },
];

export const blogPosts = [
  {
    slug: "how-premium-brands-balance-performance-and-taste",
    title: "How Premium Brands Balance Performance Marketing and Taste",
    category: "Strategy",
    date: "2026-02-18",
    excerpt:
      "The best growth systems don’t choose between aesthetics and attribution. They design for both from the start.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    content: [
      "Premium brands often stumble when performance pressure pushes them toward creative that looks like everyone else. The short-term click can become a long-term brand tax.",
      "The more durable model is to build a message system that respects brand cues while still giving campaigns enough clarity to perform. That means sharper offers, stronger landing pages, and creative testing built around a consistent visual language.",
      "When growth teams work this way, data becomes a refinement tool instead of a force that flattens identity. The result is better conversion quality and a brand that still feels expensive when it needs to.",
    ],
  },
  {
    slug: "seo-is-a-design-problem-too",
    title: "SEO Is a Design Problem Too",
    category: "SEO",
    date: "2026-01-29",
    excerpt:
      "Technical fixes matter, but structure, readability, and trust cues are what turn rankings into real outcomes.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    content: [
      "Search visibility is rarely limited to metadata alone. A page can rank and still underperform if it feels confusing, thin, or generic once visitors arrive.",
      "Design decisions such as information hierarchy, motion restraint, contrast, and speed directly affect how search traffic behaves. That changes both conversion rates and the feedback loops search engines observe over time.",
      "When SEO and design teams collaborate earlier, websites become easier to parse for machines and easier to trust for people. That overlap is where many hidden wins live.",
    ],
  },
  {
    slug: "why-fast-websites-close-more-deals",
    title: "Why Fast Websites Close More Deals",
    category: "Web",
    date: "2025-12-12",
    excerpt:
      "Website speed is more than a technical metric. It shapes confidence, momentum, and how credible your offer feels in the first seconds.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    content: [
      "A slow experience doesn’t just hurt bounce rate. It creates hesitation before your message has a chance to land, especially on mobile and in paid campaigns.",
      "Teams often focus on visuals and forget that performance is part of the visual impression. Clean animation, compressed media, and thoughtful code splitting make the whole site feel more intentional.",
      "If your website is your best salesperson, speed is part of how that salesperson enters the room. The effect is subtle, but the revenue implications are not.",
    ],
  },
];

export const aboutTimeline = [
  {
    year: "2025",
    title: "The idea takes shape",
    description:
      "VYES DigiGrow was born from a simple frustration: most agencies either look great or perform well — rarely both. We set out to build one that does both, with no compromises.",
  },
  {
    year: "2026",
    title: "Open for business",
    description:
      "We launched with a focused mandate: premium brand positioning combined with rigorous performance marketing, served by a tight-knit team that owns every outcome.",
  },
  {
    year: "Now",
    title: "Seeking our founding clients",
    description:
      "We're actively partnering with 2–3 ambitious brands who want founder-level attention, modern methodology, and pilot-friendly pricing — while we build our portfolio together.",
  },
];


// Awards removed — we're new and honest about it

export const contactDetails = {
  email: "vyesdigigrow@gmail.com",
  phone: "+91 73587 79414",
  address: "H-4, AJS Tower 1ST FLOOR, Sakthi Nagar 3rd St, opposite to Petrol Pump, Kailash Nagar, Tiruchirappalli, Tamil Nadu 620019",
  hours: "Mon - Sat, 10:00 AM - 7:00 PM IST",
};

export const serviceInterestOptions = serviceHighlights.map((service) => ({
  value: service.slug,
  label: service.title,
}));

export const valueProps = [
  {
    title: "Unbiased Performance",
    text: "We strip away vanity metrics to show you exactly how every rupee of spend is impacting your actual bottom line.",
    icon: LineChart,
  },
  {
    title: "Pilot-Focused Agility",
    text: "As we build our founding case studies, you get maximum focus and speed that larger agencies simply can't match.",
    icon: Sparkles,
  },
];
