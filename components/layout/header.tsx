import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 sticky top-0 z-50">
      <div className="container flex h-16 items-center justify-between px-4 mx-auto max-w-7xl">
        <Link
          href="/"
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <Image
            src="/logo.jpg"
            alt="CASA Logo"
            width={40}
            height={40}
            className="rounded-lg"
          />
          <div>
            <div className="text-sm font-bold leading-none">CASA</div>
            <div className="text-xs text-muted-foreground leading-none mt-1">
              Chain Agnostic Standards Alliance
            </div>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/members"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Members
          </Link>
          <Link
            href="/groups"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Groups
          </Link>
          <Link
            href="https://chainagnostic.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Specs
          </Link>
          <Link
            href="https://github.com/ChainAgnostic/CASA"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            GitHub
          </Link>
        </nav>
        <Button
          variant="outline"
          size="sm"
          asChild
          className="hidden md:inline-flex bg-transparent"
        >
          <Link href="/#join">Join Alliance</Link>
        </Button>
      </div>
    </header>
  );
}
