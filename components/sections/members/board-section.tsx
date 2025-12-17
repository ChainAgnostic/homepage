import Link from "next/link";
import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

export function BoardSection() {
  const boardMembers = [
    {
      name: "Pedro Gomes",
      github: "pedrouid",
      organization: "WalletConnect Founder",
      address: "eip155:1:0xcBec15583A21C3ddAD5fab658be5b4FE85Df730b",
    },
    {
      name: "Ligi",
      github: "ligi",
      organization: "Independent",
      address: "eip155:1:0x0402c3407dcBD476C3d2Bbd80d1b375144bAF4a2",
    },
    {
      name: "Joel Thorstenssen",
      github: "oed",
      organization: "Ceramic Founder",
      address: "eip155:1:0x9fA6c303300ed23CeFB0b1106aE898810DC01cC3",
    },
    {
      name: "Gregory Rocco",
      github: "obstropolos",
      organization: "Spruce Founder, Independent",
      address: "eip155:1:0x4Aa43327b1a7c60D6570F8692339EFC1f46bdF85",
    },
    {
      name: "Olaf Tomalka",
      github: "ritave",
      organization: "MetaMask Snaps Lead",
      address: "eip155:1:0xd6CE8bCa06795CC1711DFd4927A6EBde6C86F1E2",
    },
    {
      name: "Boris Mann",
      github: "bmann",
      organization: "Fission Founder",
      address: "eip155:1:0xA8C7372dC993d7510C9c45425807d463967cbb12",
    },
    {
      name: "Juan Caballero",
      github: "bumblefudge",
      organization: "Acting Executive Director, Independent",
      role: "Chairman/Tiebreaker",
      address: "eip155:1:0xf5fEcE320f378bbAED76F38e7a9e9Fa5048b5A93",
    },
  ];

  return (
    <section className="py-16 border-b border-border bg-muted/30">
      <div className="container mx-auto max-w-7xl px-4">
        <h2 className="text-3xl font-bold mb-4">Board</h2>
        <p className="text-muted-foreground mb-8 max-w-3xl text-pretty">
          The Board members use their listed addresses to directly control a{" "}
          <Link
            href="https://app.safe.global/home?safe=eth:0xEDA75C4e519FD27d7d28B7F20be407435fb74e2d"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline inline-flex items-center gap-1"
          >
            multi-signature vault
            <ExternalLink className="h-3 w-3" />
          </Link>{" "}
          for transparent, on-chain grant reporting and other disbursements.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {boardMembers.map((member) => (
            <Card
              key={member.github}
              className="p-6 hover:border-primary/50 transition-colors"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-semibold text-lg">{member.name}</h3>
                  {member.role && (
                    <span className="text-xs text-primary font-medium">
                      {member.role}
                    </span>
                  )}
                </div>
                <Link
                  href={`https://github.com/${member.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                {member.organization}
              </p>
              <div className="text-xs font-mono bg-muted p-2 rounded break-all">
                {member.address}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BoardSection;
