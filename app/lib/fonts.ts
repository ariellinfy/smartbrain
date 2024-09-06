import { Roboto, Roboto_Mono } from "next/font/google";

export const roboto = Roboto({
    weight: ["400", "500", "700"],
    subsets: ["latin"],
    display: "swap",
    variable: "--font-roboto",
});

export const roboto_mono = Roboto_Mono({
    weight: ["400", "500", "700"],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-roboto-mono',
})