import Link from "next/link";

const workingGroups = [
  {
    name: "Editorial",
    scope: (
      <>
        New{" "}
        <Link
          href="https://chainagnostic.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          CAIPs
        </Link>{" "}
        and{" "}
        <Link
          href="https://namespaces.chainagnostic.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          Namespaces
        </Link>
      </>
    ),
    frequency: "every 4 weeks",
    chair: "@bumblefudge",
  },
  {
    name: "Addressing",
    scope: "CAIP-2, -10, -19; URN/URI systems",
    frequency: "Sporadic/By request",
    chair: "@bumblefudge",
  },
  {
    name: "JSON-RPC",
    scope: "CAIP-25, -27",
    frequency: "Sporadic/By request",
    chair: "@hmalik88",
  },
  {
    name: "CACAO/AuthZ",
    scope: (
      <>
        CAIP-74, -122, -168;{" "}
        <Link
          href="https://github.com/chainAgnostic/varsig"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          varsig
        </Link>{" "}
        &{" "}
        <Link
          href="https://github.com/chainAgnostic/multidid"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          multidid
        </Link>
        , interop with UCAN and ZCAP-LD
      </>
    ),
    frequency: "every 4 weeks",
    chair: "@bumblefudge/TBD",
  },
  {
    name: "Browser Security",
    scope: "CAIP-169, -171",
    frequency: "Sporadic/By request",
    chair: "@kdenhartog",
  },
  {
    name: "Secure Design",
    scope: "UX<>Security, Privacy",
    frequency: "every 4 weeks",
    chair: "@depatchedmode",
  },
];

export function WorkingGroupsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold mb-8">List of working groups</h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 px-4 font-semibold">
                  Working Group
                </th>
                <th className="text-left py-4 px-4 font-semibold">Scope</th>
                <th className="text-left py-4 px-4 font-semibold">
                  Meeting Frequency
                </th>
                <th className="text-left py-4 px-4 font-semibold">Chair</th>
              </tr>
            </thead>
            <tbody>
              {workingGroups.map((group, index) => (
                <tr
                  key={index}
                  className="border-b border-border hover:bg-muted/50 transition-colors"
                >
                  <td className="py-4 px-4 font-medium">{group.name}</td>
                  <td className="py-4 px-4 text-muted-foreground">
                    {group.scope}
                  </td>
                  <td className="py-4 px-4 text-muted-foreground">
                    {group.frequency}
                  </td>
                  <td className="py-4 px-4 text-muted-foreground font-mono text-sm">
                    {group.chair}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
