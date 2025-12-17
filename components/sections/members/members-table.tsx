import Link from "next/link";
import { ExternalLink } from "lucide-react";

export function MembersTable() {
  const members = [
    {
      organization: "ChainAgnostic",
      url: "https://chainagnostic.org",
      members:
        "Ligi (@ligi), Pedro Gomes (@pedrouid), Antoine Herzog (@antoineherzog), Amadeo Pellicce (@pellicceama)",
      status: "Maintainer",
      workingGroups: "All Working groups",
    },
    {
      organization: "Epicenter",
      url: "https://epicenter.tv",
      members: "Sebastien Couture (@seb2point0)",
      status: "Member",
      workingGroups: "CAIPs discussion",
    },
    {
      organization: "Tally",
      url: "https://tally.xyz",
      members: "Tarrence (@tarrencev)",
      status: "Maintainer (go-caip)",
      workingGroups: "All Working groups",
    },
    {
      organization: "Ceramic",
      url: "https://ceramic.network",
      members: "Joel Thorstensson (@oed), Sergey Ukustov (@ukstv)",
      status: "Member",
      workingGroups: "All Working groups",
    },
    {
      organization: "Spruce",
      url: "https://spruceid.com",
      members:
        "Wayne Chang (@wyc), Gregory Rocco (@obstropolos), Oliver Terbu (@awoie)",
      status: "Member",
      workingGroups: "CAIPs discussion",
    },
    {
      organization: "Learning Proof UG",
      url: "https://learningproof.xyz",
      members: "Juan Caballero (@bumblefudge)",
      status: "Maintainer",
      workingGroups: "CAIPs",
    },
    {
      organization: "Block",
      url: "https://block.xyz",
      members:
        "Gabe Cohen (@decentralgabe), Daniel Buchner (@csuwildcat), Moe Jangda (@mistermoe)",
      status: "Member",
      workingGroups: "All Working groups",
    },
    {
      organization: "SKALE Network",
      url: "https://skale.network",
      members: "Chadwick Strange (@cstrangedk)",
      status: "Member",
      workingGroups: "All Working Groups",
    },
    {
      organization: "Metagov",
      url: "https://metagov.org",
      members: "Joshua Tan (@thelastjosh)",
      status: "Member",
      workingGroups: "All Working Groups",
    },
    {
      organization: "kycDAO",
      url: "https://kycdao.xyz",
      members: "Balázs Némethi (@nembal)",
      status: "Member",
      workingGroups: "All Working Groups",
    },
    {
      organization: "cheqd",
      url: "https://www.cheqd.io/",
      members: "Ross Power (@rosspower11)",
      status: "Member",
      workingGroups: "All Working Groups",
    },
    {
      organization: "Fission",
      url: "https://fission.codes/",
      members:
        "Boris Mann (@bmann), Brooklyn Zelenka (@expede), Ryan Betts (@depatchedmode), Andy Vivash (@avivash)",
      status: "Member",
      workingGroups: "All Working Groups",
    },
    {
      organization: "Danube Tech",
      url: "https://danubetech.com/",
      members: "Markus Sabadello (@peacekeeper)",
      status: "Member",
      workingGroups: "All Working Groups",
    },
    {
      organization: "Obvious",
      url: "https://obvious.technology/",
      members: "Jebu Ittiachen (@jebu)",
      status: "Member",
      workingGroups: "All Working Groups",
    },
    {
      organization: "Dynamic",
      url: "https://www.dynamic.xyz/",
      members: "Itai Turbahn (@turbahn), Paolo Lim (@paololim)",
      status: "Member",
      workingGroups: "All Working Groups",
    },
    {
      organization: "Notabene",
      url: "https://www.notabene.id/",
      members: "Andrés Junge (@ajunge)",
      status: "Member",
      workingGroups: "All Working Groups",
    },
    {
      organization: "Ledger",
      url: "https://www.ledger.com/",
      members: "Rod Carraresi (@carraresi)",
      status: "Member",
      workingGroups: "All Working Groups",
    },
    {
      organization: "ITSA",
      url: "https://www.itsa.global/",
      members: "Valentin Seehausen (@valleXYZ)",
      status: "Member",
      workingGroups: "All Working Groups",
    },
    {
      organization: "Protocol Labs",
      url: "https://protocol.ai/",
      members: "Eva Shon (@eshon)",
      status: "Member",
      workingGroups: "All Working Groups",
    },
    {
      organization: "Fireblocks",
      url: "https://www.fireblocks.com/",
      members: "Oren Yomtov (@orenyomtov), Arik Galansky (@arikg)",
      status: "Member",
      workingGroups: "All Working Groups",
    },
    {
      organization: "MetaMask",
      url: "https://metamask.io/",
      members: "Erik Marks (@rekmarks), Olaf Tomalka (@ritave)",
      status: "Member",
      workingGroups: "All Working Groups",
    },
    {
      organization: "Shovel Company",
      url: "https://shovel.company/",
      members: "Prashant Mittal (@prashant3863)",
      status: "Member",
      workingGroups: "All Working Groups",
    },
    {
      organization: "Status",
      url: "https://status.im/",
      members:
        "Anthony Laibe (@alaibe), Iuri Matias (@iurimatias), John (@john-44)",
      status: "Member",
      workingGroups: "All Working Groups",
    },
    {
      organization: "Fetcch",
      url: "https://fetcch.xyz/",
      members: "Satyam Kulkarni (@sk1122), Mandar Dange (@mandarr-source)",
      status: "Member",
      workingGroups: "All Working Groups",
    },
    {
      organization: "Attestate",
      url: "https://attestate.com",
      members: "Tim Daubenschütz (@timdaub)",
      status: "Member",
      workingGroups: "All Working Groups",
    },
    {
      organization: "KILT Protocol",
      url: "https://kilt.io",
      members: "Antonio Antonino (@ntn-x2)",
      status: "Member",
      workingGroups: "All Working Groups",
    },
    {
      organization: "Everyname",
      url: "https://everyname.xyz",
      members: "Vinay Vasanji (@iamvkv)",
      status: "Member",
      workingGroups: "All Working Groups",
    },
    {
      organization: "vDL Digital Ventures GmbH",
      url: "https://vdl.digital/",
      members: "Carlo van Driesten (@jdsika), Roy Scheeren (@royscheeren)",
      status: "Member",
      workingGroups: "All Working Groups",
    },
    {
      organization: "Peanut Protocol",
      url: "https://peanut.to",
      members: "Hugo Montenegro (@hugo0), Konrad Urban (@0xkkonrad)",
      status: "Member",
      workingGroups: "All Working Groups",
    },
  ];

  return (
    <section className="py-16 border-b border-border">
      <div className="container mx-auto max-w-7xl px-4">
        <h2 className="text-3xl font-bold mb-8">Member Organizations</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold">
                  Organizations
                </th>
                <th className="text-left py-3 px-4 font-semibold">Members</th>
                <th className="text-left py-3 px-4 font-semibold">Status</th>
                <th className="text-left py-3 px-4 font-semibold">
                  Working Groups
                </th>
              </tr>
            </thead>
            <tbody>
              {members.map((member) => (
                <tr
                  key={member.organization}
                  className="border-b border-border hover:bg-muted/50 transition-colors"
                >
                  <td className="py-3 px-4">
                    <Link
                      href={member.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline inline-flex items-center gap-1 font-medium"
                    >
                      {member.organization}
                      <ExternalLink className="h-3 w-3" />
                    </Link>
                  </td>
                  <td className="py-3 px-4 text-sm text-muted-foreground">
                    {member.members}
                  </td>
                  <td className="py-3 px-4 text-sm">
                    <span
                      className={
                        member.status.includes("Maintainer")
                          ? "text-primary font-medium"
                          : ""
                      }
                    >
                      {member.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-sm text-muted-foreground">
                    {member.workingGroups}
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

export default MembersTable;
