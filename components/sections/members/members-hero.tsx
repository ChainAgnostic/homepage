import Link from "next/link";
import { Button } from "@/components/ui/button";

export function MembersHero() {
  return (
    <section className="border-b border-border bg-linear-to-b from-muted/50 to-background">
      <div className="container px-4 py-16 mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold tracking-tight mb-6 text-balance">
            Members
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            The Chain Agnostic Standards Alliance is a self-organized alliance
            of blockchain developers creating standards that support
            interoperability and facilitate communication between protocols,
            software, and companies.
          </p>
          <Button asChild size="lg">
            <Link
              href="https://github.com/chainagnostic/casa"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Alliance
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default MembersHero;

// Already has default export above
