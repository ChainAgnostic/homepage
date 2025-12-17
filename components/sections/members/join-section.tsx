import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { GitPullRequest, Eye } from "lucide-react";

export function JoinSection() {
  const repos = [
    {
      name: "Gatherings",
      url: "https://github.com/ChainAgnostic/Gatherings",
      description: "Stay up to date with in person gatherings",
    },
    {
      name: "CASA",
      url: "https://github.com/ChainAgnostic/CASA",
      description: "Stay up to date with the organisation and scheduled calls",
    },
    {
      name: "CAIPs",
      url: "https://github.com/ChainAgnostic/CAIPs",
      description: "Chain Agnostic Improvement Proposals",
    },
    {
      name: "namespaces",
      url: "https://github.com/ChainAgnostic/namespaces",
      description: "Chain-specific namespace definitions",
    },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Join CASA</h2>
          <p className="text-lg text-muted-foreground text-pretty mb-8">
            Submit a Pull Request to this repository adding yourself as a member
            in the table above. Once a maintainer has confirmed you have
            completed this step, they will merge your PR.
          </p>
          <Button size="lg" asChild className="bg-primary">
            <Link
              href="https://github.com/ChainAgnostic/CASA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitPullRequest className="mr-2 h-5 w-5" />
              Submit Pull Request
            </Link>
          </Button>
        </div>

        <div className="max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold mb-6 text-center">
            Recommended Repositories to Watch
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {repos.map((repo) => (
              <Card
                key={repo.name}
                className="p-6 hover:border-primary/50 transition-colors"
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-semibold text-lg">{repo.name}</h4>
                  <Eye className="h-5 w-5 text-muted-foreground" />
                </div>
                <p className="text-sm text-muted-foreground mb-4 text-pretty">
                  {repo.description}
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="w-full bg-transparent"
                >
                  <Link
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on GitHub
                  </Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default JoinSection;
