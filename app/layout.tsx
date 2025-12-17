import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "CASA | Chain Agnostic Standards Alliance",
  description:
    "CASA is a self-organized alliance of blockchain developers creating standards that support interoperability and facilitate communication between protocols, software, and companies.",
  generator: "v0.app",
  keywords: [
    "blockchain",
    "standards",
    "interoperability",
    "CAIP",
    "chain agnostic",
    "web3",
  ],
  openGraph: {
    title: "Chain Agnostic Standards Alliance",
    description: "Creating standards for blockchain interoperability",
    type: "website",
    images: [
      {
        url: "/logo.jpg",
        width: 400,
        height: 400,
        alt: "CASA Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Chain Agnostic Standards Alliance",
    description: "Creating standards for blockchain interoperability",
    images: ["/logo.jpg"],
  },
  icons: {
    icon: [
      {
        url: "/logo.jpg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/logo.jpg",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
