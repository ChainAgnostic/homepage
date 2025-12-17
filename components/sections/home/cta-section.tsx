import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

export function CTASection() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="container px-4 py-24 mx-auto max-w-7xl">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
            Ready to Contribute?
          </h2>
          <p className="text-lg mb-8 opacity-90 leading-relaxed text-pretty">
            Help shape the future of blockchain interoperability by joining our
            working groups and contributing to Chain Agnostic Improvement
            Proposals.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link
                href="https://github.com/ChainAgnostic/CASA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-5 w-5" />
                View on GitHub
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <Link href="#members">View Members</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
