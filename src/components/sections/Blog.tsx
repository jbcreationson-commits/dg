import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { FadeInUp } from "@/components/animations/FadeInUp";
import { Badge } from "@/components/ui/Badge";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { BlogSkeleton } from "@/components/ui/Skeletons";
import { blogPosts } from "@/lib/constants";
import { formatDate } from "@/lib/utils";

const blurDataUrl =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMzAnIGhlaWdodD0nMjAnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHJlY3Qgd2lkdGg9JzMwJyBoZWlnaHQ9JzIwJyBmaWxsPScjMTAxMDEwJy8+PC9zdmc+";

export default function Blog({ limit, isLoading = false }: { limit?: number; isLoading?: boolean }) {
  const posts = typeof limit === "number" ? blogPosts.slice(0, limit) : blogPosts;

  return (
    <section className="py-24">
      <div className="container space-y-12">
        <SectionTitle
          eyebrow="Insights"
          title="Notes from the growth edge"
          description="A running set of ideas on SEO, web performance, creative systems, and how premium brands should think about digital acquisition."
        />

        {isLoading ? (
          <BlogSkeleton count={limit || 3} />
        ) : (
          <div className="grid gap-6 lg:grid-cols-3">
            {posts.map((post, index) => (
              <FadeInUp key={post.slug} delay={index * 0.08}>
                <article className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04]">
                  <div className="relative aspect-[16/11] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                      placeholder="blur"
                      blurDataURL={blurDataUrl}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
                    <div className="absolute left-5 top-5">
                      <Badge>{post.category}</Badge>
                    </div>
                  </div>

                  <div className="space-y-5 p-6">
                    <p className="text-xs uppercase tracking-[0.22em] text-white/45">
                      {formatDate(post.date)}
                    </p>
                    <div>
                      <h3 className="font-heading text-3xl uppercase leading-none text-white sm:text-4xl">
                        {post.title}
                      </h3>
                      <p className="mt-4 text-base leading-7 text-white/65">{post.excerpt}</p>
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.22em] text-brand-100"
                    >
                      Read article <ArrowUpRight size={16} />
                    </Link>
                  </div>
                </article>
              </FadeInUp>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
