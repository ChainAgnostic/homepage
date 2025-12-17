import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export function DiscordSection() {
  return (
    <section className="border-b border-border">
      <div className="container px-4 py-24 mx-auto max-w-7xl">
        <div className="max-w-3xl mx-auto text-center">
          <MessageCircle className="h-12 w-12 mx-auto mb-6 text-accent-green" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
            Join Our Discord Community
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Prefer real-time communication? Join our Discord server for
            social-style discussions. Note: Discord is secondary to GitHub for
            official archival purposes.
          </p>
          <Button size="lg" variant="outline" asChild>
            <Link
              href="https://discord.gg/KxqKHppC39"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Discord Server
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
