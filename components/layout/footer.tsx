import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container px-4 py-12 mx-auto max-w-7xl">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="font-bold">CASA</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Chain Agnostic Standards Alliance
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="https://chainagnostic.org/"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Standards
                </Link>
              </li>
              <li>
                <Link
                  href="https://namespaces.chainagnostic.org/"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Namespaces
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm">Community</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="https://discord.gg/KxqKHppC39"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Discord
                </Link>
              </li>
              <li>
                <Link
                  href="https://twitter.com/ChainStandards"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Twitter
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm">About</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#members"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Members
                </Link>
              </li>
              <li>
                <Link
                  href="#work"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Groups
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-8">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Chain Agnostic Standards Alliance
          </p>
        </div>
      </div>
    </footer>
  );
}
