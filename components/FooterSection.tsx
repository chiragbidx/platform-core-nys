import { getContent } from "@/content/content";
import { Button } from "@/components/ui/button";

export const FooterSection = () => {
  const { hero } = getContent();

  return (
    <footer className="w-full border-t border-border bg-background py-8">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 px-4 text-center">
        <span className="text-lg font-semibold">{hero.footerCta}</span>
        <Button className="h-10 w-44 rounded-lg bg-primary text-primary-foreground">
          {hero.footerButton}
        </Button>
        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-muted-foreground">
          <span>
            Built by Chirag Dodiya • Powered by AgencyFlow •{" "}
            <a
              href="mailto:chirag@bidx.ai"
              className="underline"
              tabIndex={0}
            >
              Contact
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};