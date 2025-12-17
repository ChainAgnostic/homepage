import Link from "next/link";

export function FormNewGroupSection() {
  return (
    <section className="py-20 bg-muted/30 border-t border-border">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold mb-8">
            How to form a new working group
          </h2>

          <ol className="space-y-6">
            <li className="flex gap-4">
              <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm">
                1
              </span>
              <p className="text-muted-foreground leading-relaxed pt-1">
                <Link
                  href="/members#join-casa"
                  className="text-foreground hover:text-primary underline font-medium"
                >
                  Join CASA
                </Link>{" "}
                if you&apos;re not already a member.
              </p>
            </li>
            <li className="flex gap-4">
              <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm">
                2
              </span>
              <p className="text-muted-foreground leading-relaxed pt-1">
                Create a description that explains the goal of your working
                group and related CAIP(s).
              </p>
            </li>
            <li className="flex gap-4">
              <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm">
                3
              </span>
              <p className="text-muted-foreground leading-relaxed pt-1">
                Submit a Pull Request to the CASA repository adding your working
                group.
              </p>
            </li>
            <li className="flex gap-4">
              <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm">
                4
              </span>
              <p className="text-muted-foreground leading-relaxed pt-1">
                Propose your working group at the next editorial WG or in-person
                event. If approved, your PR will be merged, and your working
                group meeting schedule will be added to the CASA calendar.
              </p>
            </li>
            <li className="flex gap-4">
              <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm">
                5
              </span>
              <p className="text-muted-foreground leading-relaxed pt-1">
                Recruit participants for your working group.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
