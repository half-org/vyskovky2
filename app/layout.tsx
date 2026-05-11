import type { Metadata } from "next";
import { Big_Shoulders, Fraunces, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";
import { Grain } from "@/components/grain";

const display = Big_Shoulders({
  weight: ["700", "800", "900"],
  subsets: ["latin", "latin-ext"],
  variable: "--font-anton",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT"],
  weight: "variable",
});

const mono = JetBrains_Mono({
  subsets: ["latin", "latin-ext"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "VERTIKÁLA — Speciální výškové práce horolezeckou technikou",
  description:
    "Nátěry střech, fasád, montáže, demontáže reklam, kácení stromů po částech a další práce ve výškách prováděné horolezeckou technikou a z plošiny.",
  metadataBase: new URL("https://vertikala.example"),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="cs"
      className={`${display.variable} ${fraunces.variable} ${mono.variable}`}
    >
      <body className="grain min-h-dvh overflow-x-clip antialiased">
        <SmoothScroll>{children}</SmoothScroll>
        <Grain />
      </body>
    </html>
  );
}
