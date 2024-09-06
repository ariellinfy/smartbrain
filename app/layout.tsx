import type { Metadata } from "next";
import { siteConfig } from "./lib/sites";
import "@/app/ui/global.css";

import { roboto, roboto_mono } from "@/app/lib/fonts";
import { Navbar } from "./ui/navbar";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
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
