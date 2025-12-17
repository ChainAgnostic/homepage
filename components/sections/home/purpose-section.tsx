import { FileText, Users, Calendar, MessageCircle } from "lucide-react";
import { FeatureCard } from "@/components/ui/feature-card";

export function PurposeSection() {
  return (
    <section className="border-b border-border">
      <div className="container px-4 py-24 mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
              Our Purpose
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              CASA organizes working groups where proposals are debated,
              drafted, and published as Chain Agnostic Improvement Proposals
              (CAIPs) to harmonize development across developer communities.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We facilitate collaboration through asynchronous work and video
              calls, and organize periodic in-person events at relevant
              conferences.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <FeatureCard
              icon={FileText}
              title="CAIPs"
              description="Public standards documents produced by working groups"
            />
            <FeatureCard
              icon={Users}
              title="Collaboration"
              description="Open working groups and video call discussions"
            />
            <FeatureCard
              icon={Calendar}
              title="Events"
              description="In-person gatherings at blockchain conferences"
            />
            <FeatureCard
              icon={MessageCircle}
              title="Community"
              description="Open Discord server for real-time communication"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
