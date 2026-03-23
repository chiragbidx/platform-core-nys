import { getContent } from "@/content/content";

export const AboutSection = () => {
  const { hero } = getContent();

  return (
    <section className="mx-auto w-full max-w-3xl px-4 py-8 text-center">
      <h2 className="mb-4 text-xl font-bold sm:text-2xl">{hero.aboutTitle}</h2>
      <p className="text-base text-muted-foreground">{hero.aboutBody}</p>
    </section>
  );
};