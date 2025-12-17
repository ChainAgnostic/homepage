import { GroupsHero } from "@/components/sections/groups/groups-hero";
import { WorkingGroupsSection } from "@/components/sections/groups/working-groups-section";
import { FormNewGroupSection } from "@/components/sections/groups/form-new-group-section";

export default function GroupsPage() {
  return (
    <main>
      <GroupsHero />
      <WorkingGroupsSection />
      <FormNewGroupSection />
    </main>
  );
}
