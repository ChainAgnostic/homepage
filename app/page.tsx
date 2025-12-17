import { HeroSection } from "@/components/sections/home/hero-section";
import { PurposeSection } from "@/components/sections/home/purpose-section";
import { MeetingsSection } from "@/components/sections/home/meetings-section";
import { DiscordSection } from "@/components/sections/home/discord-section";
import { CTASection } from "@/components/sections/home/cta-section";

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
