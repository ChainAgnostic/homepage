import Link from "next/link";
import { ExternalLink } from "lucide-react";

export function MembersTable() {
  const members = [
    {
      organization: "Attestate",
      url: "https://attestate.com",
      members: "Tim Daubenschütz (@timdaub)",
    },
    {
      organization: "Block",
      url: "https://block.xyz",
      members:
        "Gabe Cohen (@decentralgabe), Daniel Buchner (@csuwildcat), Moe Jangda (@mistermoe)",
    },
    {
      organization: "Ceramic",
      url: "https://ceramic.network",
      members: "Joel Thorstensson (@oed), Sergey Ukustov (@ukstv)",
    },
    {
      organization: "CHEQs",
      url: "https://cheqs.com",
      members: "Richard Piacentini (@ricp)",
    },
    {
      organization: "cheqd",
      url: "https://www.cheqd.io/",
      members: "Ross Power (@rosspower11)",
    },
    {
      organization: "Danube Tech",
      url: "https://danubetech.com/",
      members: "Markus Sabadello (@peacekeeper)",
    },
    {
      organization: "Dynamic",
      url: "https://www.dynamic.xyz/",
      members: "Itai Turbahn (@turbahn), Paolo Lim (@paololim)",
    },
    {
      organization: "Epicenter",
      url: "https://epicenter.tv",
      members: "Sebastien Couture (@seb2point0)",
    },
    {
      organization: "Etherspot",
      url: "https://etherspot.io",
      members:
        "Parthasarathy Ramanujam (@ch4r10t33r), Michael Messele (@mm319)",
    },
    {
      organization: "Everyname",
      url: "https://everyname.xyz",
      members: "Vinay Vasanji (@iamvkv)",
    },
    {
      organization: "Fetcch",
      url: "https://fetcch.xyz/",
      members: "Satyam Kulkarni (@sk1122), Mandar Dange (@mandarr-source)",
    },
    {
      organization: "Fireblocks",
      url: "https://www.fireblocks.com/",
      members: "Oren Yomtov (@orenyomtov), Arik Galansky (@arikg)",
    },
    {
      organization: "Fission",
      url: "https://fission.codes/",
      members:
        "Boris Mann (@bmann), Brooklyn Zelenka (@expede), Ryan Betts (@depatchedmode), Andy Vivash (@avivash)",
    },
    {
      organization: "ITSA",
      url: "https://www.itsa.global/",
      members: "Valentin Seehausen (@valentin-seehausen)",
    },
    {
      organization: "KILT Protocol",
      url: "https://kilt.io",
      members: "Antonio Antonino (@ntn-x2)",
    },
    {
      organization: "kycDAO",
      url: "https://kycdao.xyz",
      members: "Balázs Némethi (@nembal)",
    },
    {
      organization: "Learning Proof UG",
      url: "https://learningproof.xyz",
      members: "Juan Caballero (@bumblefudge)",
    },
    {
      organization: "Ledger",
      url: "https://www.ledger.com/",
      members: "Rod Carraresi (@carraresi)",
    },
    {
      organization: "MetaMask",
      url: "https://metamask.io/",
      members: "Erik Marks (@rekmarks), Olaf Tomalka (@ritave)",
    },
    {
      organization: "Metagov",
      url: "https://metagov.org",
      members: "Joshua Tan (@thelastjosh)",
    },
    {
      organization: "Notabene",
      url: "https://www.notabene.id/",
      members: "Andrés Junge (@ajunge)",
    },
    {
      organization: "Obvious",
      url: "https://obvious.technology/",
      members: "Jebu Ittiachen (@jebu)",
    },
    {
      organization: "Peanut Protocol",
      url: "https://peanut.to",
      members: "Hugo Montenegro (@hugo0), Konrad Urban (@0xkkonrad)",
    },
    {
      organization: "Protocol Labs",
      url: "https://protocol.ai/",
      members: "Eva Shon (@eshon)",
    },
    {
      organization: "Shovel Company",
      url: "https://shovel.company/",
      members: "Prashant Mittal (@prashant3863)",
    },
    {
      organization: "SKALE Network",
      url: "https://skale.network",
      members: "Chadwick Strange (@cstrangedk)",
    },
    {
      organization: "Spruce",
      url: "https://spruceid.com",
      members:
        "Wayne Chang (@wyc), Gregory Rocco (@obstropolos), Oliver Terbu (@awoie)",
    },
    {
      organization: "Status",
      url: "https://status.im/",
      members:
        "Anthony Laibe (@alaibe), Iuri Matias (@iurimatias), John (@john-44)",
    },
    {
      organization: "Tally",
      url: "https://tally.xyz",
      members: "Tarrence (@tarrencev)",
    },
    {
      organization: "vDL Digital Ventures GmbH",
      url: "https://vdl.digital/",
      members: "Carlo van Driesten (@jdsika), Roy Scheeren (@royscheeren)",
    },
    {
      organization: "WalletConnect",
      url: "https://walletconnect.com",
      members: "Pedro Gomes (@pedrouid)",
    },
  ];

  return (
    <section className="py-16 border-b border-border">
      <div className="container mx-auto max-w-7xl px-4">
        <h2 className="text-3xl font-bold mb-8">Organizations</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold">
                  Organizations
                </th>
                <th className="text-left py-3 px-4 font-semibold">Members</th>
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
