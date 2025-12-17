import { GroupsHero } from "@/components/sections/groups/groups-hero";
import { WorkingGroupsSection } from "@/components/sections/groups/working-groups-section";
import { FormNewGroupSection } from "@/components/sections/groups/form-new-group-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Working Groups",
  description:
    "Explore CASA working groups focused on blockchain interoperability standards including CAIP, Namespaces, and cross-chain communication protocols.",
  keywords: [
    "blockchain working groups",
    "CAIP standards",
    "blockchain namespaces",
    "cross-chain protocols",
    "blockchain collaboration",
  ],
  openGraph: {
    title: "Working Groups | CASA",
    description:
      "Explore CASA working groups focused on blockchain interoperability standards",
    type: "website",
  },
  alternates: {
    canonical: "/groups",
  },
};

export default function GroupsPage() {
  return (
    <main>
      <GroupsHero />
      <WorkingGroupsSection />
      <FormNewGroupSection />
    </main>
  );
}
