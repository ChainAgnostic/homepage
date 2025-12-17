import { Card } from "@/components/ui/card";

export function RolesSection() {
  const roles = [
    {
      title: "Members",
      description:
        "All participants who contribute in any form, including github review. Expected to participate in one or more topical working groups.",
    },
    {
      title: "Working Groups",
      description:
        "Topical clusters of CAIPs, namespaces, and other repositories/workstreams. These change over time according to activity.",
    },
    {
      title: "Editorial Working Group",
      description:
        "A subset of membership including the authors of accepted CAIPs committed to ongoing review and maintenance of the CAIPs and namespaces.",
    },
    {
      title: "Board",
      description:
        "Governing/steering body of core members guiding the organization and making high-level strategic decisions about its execution of its mission.",
    },
    {
      title: "Steward",
      description:
        "Drive and oversee operations, budget, editorial processes, and events.",
    },
    {
      title: "Treasurer",
      description:
        "Oversight and reporting on any external grants or donations.",
    },
  ];

  return (
    <section className="py-16 border-b border-border">
      <div className="container mx-auto max-w-7xl px-4">
        <h2 className="text-3xl font-bold mb-8">Organizational Structure</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roles.map((role) => (
            <Card
              key={role.title}
              className="p-6 hover:border-primary/50 transition-colors"
            >
              <h3 className="text-lg font-semibold mb-3">{role.title}</h3>
              <p className="text-sm text-muted-foreground text-pretty">
                {role.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RolesSection;
