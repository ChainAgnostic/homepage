import { HeroSection } from "@/components/sections/home/hero-section";
import { PurposeSection } from "@/components/sections/home/purpose-section";
import { MeetingsSection } from "@/components/sections/home/meetings-section";
import { DiscordSection } from "@/components/sections/home/discord-section";
import { CTASection } from "@/components/sections/home/cta-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Join the Chain Agnostic Standards Alliance (CASA) - a collaborative community of blockchain developers creating interoperability standards across all blockchain protocols.",
  openGraph: {
    title: "CASA | Chain Agnostic Standards Alliance",
    description:
      "Join the Chain Agnostic Standards Alliance - creating interoperability standards across all blockchain protocols",
    type: "website",
  },
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <PurposeSection />
      <MeetingsSection />
      <DiscordSection />
      <CTASection />
    </main>
  );
}
