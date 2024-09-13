import type { Metadata } from "next";
import { roboto_mono } from "./lib/fonts";
import { siteConfig } from "./lib/sites";
import { Navbar } from "@/ui/navbar";
import "./global.css";

// export const experimental_ppr = true;

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/icons/favicon.ico",
    apple: "/icons/apple-touch-icon.png",
    shortcut: "/icons/favicon-16x16.png",
    other: [
      { rel: "icon", url: "/icons/favicon-32x32.png", sizes: "32x32" },
      {
        rel: "icon",
        url: "/icons/android-chrome-192x192.png",
        sizes: "192x192",
      },
      {
        rel: "icon",
        url: "/icons/android-chrome-512x512.png",
        sizes: "512x512",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto_mono.className} antialiased min-h-screen`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
