import type { Metadata } from "next";
import { roboto_mono } from "./lib/fonts";
import { siteConfig } from "./lib/sites";
import { Navbar } from "@/ui/navbar";
import "./global.css";

// export const experimental_ppr = true;

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
