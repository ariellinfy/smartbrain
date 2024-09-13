export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Next Smart Brain",
  description:
    "A web application that allows users to detect faces in images by uploading URLs, featuring real-time face detection with bounding boxes and confidence scores. Sign in using Google or GitHub to track your image processing stats.",
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
