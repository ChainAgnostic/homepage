import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BookOpen, Code, Users } from "lucide-react";

const workingGroupTypes = [
  {
    name: "Editorial",
    icon: BookOpen,
    description:
      "Review, refine, and approve new CAIPs and namespace specifications. Editorial groups ensure standards are well-documented, consistent, and meet the alliance's quality criteria.",
    focus: [
      "CAIP proposal review",
      "Namespace specifications",
      "Documentation standards",
      "Specification governance",
    ],
  },
  {
    name: "Technical",
    icon: Code,
    description:
      "Deep dive into implementation details, protocols, and technical challenges. Technical groups develop and maintain specific standards for blockchain interoperability.",
    focus: [
      "Protocol development",
      "Implementation guidelines",
      "Security considerations",
      "Cross-chain compatibility",
    ],
  },
  {
    name: "Community",
    icon: Users,
    description:
      "Foster collaboration, outreach, and adoption of CASA standards. Community groups connect developers, organize events, and promote best practices across the ecosystem.",
    focus: [
      "Developer outreach",
      "Educational resources",
      "Ecosystem partnerships",
      "Adoption initiatives",
    ],
  },
];

export function WorkingGroupsSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Types of Working Groups</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            CASA working groups are organized around specific areas of focus,
            bringing together experts to advance blockchain interoperability
            standards.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workingGroupTypes.map((group) => {
            const Icon = group.icon;
            return (
              <Card
                key={group.name}
                className="border-border hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>{group.name}</CardTitle>
                  <CardDescription>{group.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-foreground">
                      Key Focus Areas:
                    </p>
                    <ul className="space-y-1.5">
                      {group.focus.map((item, index) => (
                        <li
                          key={index}
                          className="text-sm text-muted-foreground flex items-start"
                        >
                          <span className="text-primary mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
