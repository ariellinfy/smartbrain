export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Smart Brain",
  description: "Make beautiful websites regardless of your design experience.",
  visitorNavItems: [
    {
      label: "Sign In",
      href: "/signin",
    },
    {
      label: "Sign Up",
      href: "/signup",
    },
  ],
};
