import Image from "next/image";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Calendar, Tag } from "lucide-react";

import { FadeInUp } from "@/components/animations/FadeInUp";
import CTA from "@/components/sections/CTA";
import { blogPosts } from "@/lib/constants";
import { createMetadata, siteConfig } from "@/lib/seo";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return {};
  }

  return createMetadata({
    title: `${post.title} | ${siteConfig.title}`,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    image: post.image,
    type: "article",
  });
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  // Generate localized date
  const date = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <article className="min-h-screen pb-24">
        {/* Post Hero */}
        <section className="relative pt-40 pb-20">
          <div className="absolute inset-0 bg-brand-radial opacity-20 mix-blend-screen" />
          <div className="container max-w-4xl relative z-10 text-center">
             <FadeInUp>
                 <div className="flex items-center justify-center gap-6 text-sm text-brand-300 uppercase tracking-widest font-bold">
                    <span className="flex items-center gap-2"><Tag size={16} /> {post.category}</span>
                    <span>•</span>
                    <span className="flex items-center gap-2"><Calendar size={16} /> {date}</span>
                 </div>
             </FadeInUp>
             <FadeInUp delay={0.1}>
                 <h1 className="mt-8 font-heading text-5xl md:text-6xl lg:text-7xl uppercase leading-[0.9] text-white">
                    {post.title}
                 </h1>
             </FadeInUp>
          </div>
        </section>

        <FadeInUp delay={0.2} className="container max-w-5xl mb-20">
            <div className="aspect-[21/9] w-full relative rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.5)]">
               <Image 
                  src={post.image} 
                  alt={post.title} 
                  fill 
                  className="object-cover"
                  priority
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
        </FadeInUp>

        {/* Post Content */}
        <div className="container max-w-3xl">
           <div className="prose prose-lg prose-invert prose-brand mx-auto">
              <p className="lead text-2xl text-white/90 font-medium leading-relaxed mb-10">
                 {post.excerpt}
              </p>
              
              {post.content.map((paragraph, idx) => (
                  <p key={idx} className="text-white/70 leading-loose mb-6">
                     {paragraph}
                  </p>
              ))}
           </div>
        </div>
      </article>

      <CTA />
    </>
  );
}
