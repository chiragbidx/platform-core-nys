import { getContent } from "@/content/content";

export const FeaturesSection = () => {
  const { hero } = getContent();

  return (
    <section className="mx-auto flex w-full max-w-4xl flex-col items-center gap-5 px-4 py-12 text-center">
      <h2 className="mb-6 text-2xl font-bold sm:text-3xl">
        {hero.featuresTitle}
      </h2>
      <ul className="grid gap-4 sm:grid-cols-2">
        {hero.featuresList.map((feature, idx) => (
          <li
            key={idx}
            className="rounded-lg bg-muted px-6 py-4 text-base text-foreground shadow"
          >
            {feature}
          </li>
        ))}
      </ul>
    </section>
  );
};