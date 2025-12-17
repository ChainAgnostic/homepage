import { MembersHero } from "@/components/sections/members/members-hero";
import { RolesSection } from "@/components/sections/members/roles-section";
import { BoardSection } from "@/components/sections/members/board-section";
import { MembersTable } from "@/components/sections/members/members-table";
import { JoinSection } from "@/components/sections/members/join-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Members",
  description:
    "Meet the Chain Agnostic Standards Alliance members, board, and contributors building the future of blockchain interoperability standards.",
  keywords: [
    "CASA members",
    "blockchain developers",
    "blockchain board members",
    "blockchain contributors",
    "web3 community",
  ],
  openGraph: {
    title: "Members | CASA",
    description:
      "Meet the CASA members, board, and contributors building blockchain interoperability standards",
    type: "website",
  },
  alternates: {
    canonical: "/members",
  },
};

export default function MembersPage() {
  return (
    <main className="min-h-screen">
      <MembersHero />
      <RolesSection />
      <BoardSection />
      <MembersTable />
      <JoinSection />
    </main>
  );
}
