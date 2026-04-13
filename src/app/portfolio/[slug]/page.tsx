import { redirect } from "next/navigation";

// No case studies exist yet — redirect to the approach/methodology page
export function generateStaticParams() {
  return [];
}

export default function CaseStudyPage() {
  redirect("/portfolio");
}
