import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "max-w-3xl space-y-4",
        align === "center" && "mx-auto text-center",
      )}
    >
      {eyebrow ? <Badge>{eyebrow}</Badge> : null}
      <h2 className="font-heading text-4xl uppercase leading-none text-white sm:text-5xl md:text-6xl">
        {title}
      </h2>
      {description ? (
        <p className="text-base leading-7 text-white/68 md:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
