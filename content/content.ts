// ─── Hero ───────────────────────────────────────────────────────────────────
export type HeroContent = {
  heading: string;
  description: string;
  hintBefore: string;
  hintBold1: string;
  hintBetween: string;
  hintBold2: string;
  hintAfter: string;
  primaryCta: string;
  secondaryCta: string;
};

// ─── Navbar ─────────────────────────────────────────────────────────────────
export type NavbarContent = {
  brandPrefix: string;
  brandSuffix: string;
};

// ─── Root ───────────────────────────────────────────────────────────────────
export type SiteContent = {
  hero: HeroContent;
  navbar: NavbarContent;
};

// ─── Defaults ───────────────────────────────────────────────────────────────

export const defaultContent: SiteContent = {
  hero: {
    heading: "To get started, edit the page.tsx file.",
    description: "Looking for a starting point or more instructions?",
    hintBefore: "Head over to ",
    hintBold1: "Templates",
    hintBetween: " or the ",
    hintBold2: "Learning",
    hintAfter: " center.",
    primaryCta: "Deploy Now",
    secondaryCta: "Documentation",
  },
  navbar: {
    brandPrefix: "NEXT",
    brandSuffix: ".JS",
  },
};

export const siteContent: SiteContent = defaultContent;

export function getContent(): SiteContent {
  return siteContent;
}
