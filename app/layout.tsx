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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://chainagnostic.org";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "CASA | Chain Agnostic Standards Alliance",
    template: "%s | CASA",
  },
  description:
    "CASA is a self-organized alliance of blockchain developers creating standards that support interoperability and facilitate communication between protocols, software, and companies.",
  keywords: [
    "blockchain",
    "standards",
    "interoperability",
    "CAIP",
    "chain agnostic",
    "web3",
    "blockchain protocols",
    "cross-chain",
    "crypto standards",
    "blockchain developers",
  ],
  authors: [{ name: "Chain Agnostic Standards Alliance" }],
  creator: "Chain Agnostic Standards Alliance",
  publisher: "Chain Agnostic Standards Alliance",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Chain Agnostic Standards Alliance",
    title: "CASA | Chain Agnostic Standards Alliance",
    description: "Creating standards for blockchain interoperability",
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
    card: "summary_large_image",
    title: "Chain Agnostic Standards Alliance",
    description: "Creating standards for blockchain interoperability",
    images: ["/logo.jpg"],
    creator: "@ChainAgnostic",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-48x48.png", type: "image/png", sizes: "48x48" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#000000",
      },
    ],
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Chain Agnostic Standards Alliance",
    alternateName: "CASA",
    url: siteUrl,
    logo: `${siteUrl}/logo.jpg`,
    description:
      "A self-organized alliance of blockchain developers creating standards that support interoperability and facilitate communication between protocols, software, and companies.",
    sameAs: [
      "https://github.com/ChainAgnostic",
      "https://twitter.com/ChainStandards",
    ],
  };

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
