/* Single source of truth for site-wide constants.
   Set NEXT_PUBLIC_SITE_URL in Vercel once the domain exists —
   everything (sitemap, robots, OG, JSON-LD) follows automatically. */

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const PERSON = {
  name: "Infant Ashil A",
  jobTitle: "Founder & CEO, AAA isolutions",
  email: "infantashil55@gmail.com",
  location: "India",
  /* exact profile URLs as supplied — also consumed by JSON-LD */
  sameAs: [
    "https://www.linkedin.com/in/infant-ashil-a-b88a39361/",
    "https://github.com/ashwiths",
  ],
};
