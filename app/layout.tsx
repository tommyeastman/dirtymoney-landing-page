import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ColorVariables } from "./components/ColorVariables";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dirty Money - Know Where Your Money Really Goes",
  description:
    "Dirty Money scans your bank transactions, flags companies funding unethical causes, and helps you find ethical alternatives. Vote with your wallet.",
  openGraph: {
    title: "Dirty Money - Know Where Your Money Really Goes",
    description:
      "Scan your bank transactions. Flag unethical companies. Discover ethical alternatives. Take control of where your money goes.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dirty Money - Know Where Your Money Really Goes",
    description:
      "Scan your bank transactions. Flag unethical companies. Discover ethical alternatives.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ColorVariables />
        {children}
      </body>
    </html>
  );
}
