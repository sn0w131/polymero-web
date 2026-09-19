// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono, Syne } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import CookieBanner from "./components/CookieBanner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "latin-ext"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin", "latin-ext"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://polymero.cz"),
  title: {
    default: "POLYMERO — Modulární ekosystém. Přetvořen.",
    template: "%s | POLYMERO",
  },
  description: "Prémiový modulární rolling tray systém. Čistý design, magnetické spojení, vyrobeno v ČR.",
  openGraph: {
    title: "POLYMERO — Modulární ekosystém. Přetvořen.",
    description: "Prémiový modulární rolling tray systém. Čistý design, magnetické spojení, vyrobeno v ČR.",
    url: "https://polymero.cz",
    siteName: "POLYMERO",
    locale: "cs_CZ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="cs"
      className={`${geistSans.variable} ${geistMono.variable} ${syne.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-foreground selection:text-background">
        {children}
        <CookieBanner />
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
      </body>
    </html>
  );
}