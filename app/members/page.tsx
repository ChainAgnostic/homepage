import { MembersHero } from "@/components/sections/members/members-hero";
import { RolesSection } from "@/components/sections/members/roles-section";
import { BoardSection } from "@/components/sections/members/board-section";
import { MembersTable } from "@/components/sections/members/members-table";
import { JoinSection } from "@/components/sections/members/join-section";

export const metadata = {
  title: "Members | CASA",
  description:
    "Chain Agnostic Standards Alliance members, board, and working groups",
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
