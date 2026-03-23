export type HeroContent = {
  heroTitle: string;
  heroSubtitle: string;
  heroCtaPrimary: string;
  heroCtaSecondary: string;
  featuresTitle: string;
  featuresList: string[];
  aboutTitle: string;
  aboutBody: string;
  testimonialTitle: string;
  testimonialBody: string;
  footerCta: string;
  footerButton: string;
};

export type NavbarContent = {
  brandLabel: string;
};

export type SiteContent = {
  hero: HeroContent;
  navbar: NavbarContent;
};

export const defaultContent: SiteContent = {
  hero: {
    heroTitle: "Grow Your Agency with AgencyFlow",
    heroSubtitle:
      "The all-in-one platform for digital marketing agencies to manage clients, campaigns, and teams—all from one streamlined dashboard.",
    heroCtaPrimary: "Start Free Trial",
    heroCtaSecondary: "Book a Demo",
    featuresTitle: "Why Choose AgencyFlow?",
    featuresList: [
      "Centralize client and campaign management",
      "Collaborate seamlessly with your team",
      "Track campaign performance at a glance",
      "Streamline onboarding and client communication",
    ],
    aboutTitle: "Built for Modern Agencies",
    aboutBody:
      "AgencyFlow empowers digital marketing agencies to deliver better results by simplifying day-to-day operations. Focus on creativity and growth while we handle the busywork.",
    testimonialTitle: "Agencies Love AgencyFlow",
    testimonialBody:
      '"AgencyFlow has transformed how we manage our clients and campaigns. The dashboard is intuitive and saves us hours every week."',
    footerCta: "Ready to streamline your agency?",
    footerButton: "Get Started",
  },
  navbar: {
    brandLabel: "AgencyFlow",
  },
};

export const siteContent: SiteContent = defaultContent;

export function getContent(): SiteContent {
  return siteContent;
}