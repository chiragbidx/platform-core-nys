import { getContent } from "@/content/content";
import { Button } from "@/components/ui/button";
import { Triangle } from "lucide-react";

export const HeroSection = () => {
  const { hero } = getContent();

  return (
    <section className="flex flex-1 flex-col items-center justify-center px-6 text-center">
      <h1 className="max-w-xl text-[28px] font-bold leading-[1.25] tracking-tight sm:text-[36px]">
        {hero.heroTitle}
      </h1>
      <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
        {hero.heroSubtitle}
      </p>
      <div className="mt-8 flex items-center gap-4">
        <Button className="h-11 gap-2 rounded-lg px-5">
          <Triangle className="h-3.5 w-3.5 fill-current" />
          {hero.heroCtaPrimary}
        </Button>
        <Button variant="outline" className="h-11 rounded-lg px-5">
          {hero.heroCtaSecondary}
        </Button>
      </div>
    </section>
  );
};