import { getContent } from "@/content/content";

export const TestimonialSection = () => {
  const { hero } = getContent();

  return (
    <section className="mx-auto w-full max-w-2xl px-4 py-10 text-center">
      <h3 className="mb-2 text-base font-semibold uppercase tracking-widest text-muted-foreground">
        {hero.testimonialTitle}
      </h3>
      <blockquote className="rounded-lg bg-muted px-6 py-6 text-lg font-medium italic text-foreground shadow-sm">
        {hero.testimonialBody}
      </blockquote>
    </section>
  );
};