"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/ui/status-badge";

export function HeroSection() {
  const blockchainLogos = [
    { src: "/images/ethereum.webp", alt: "Ethereum" },
    { src: "/images/filecoin.webp", alt: "Filecoin" },
    { src: "/images/cosmos.webp", alt: "Cosmos" },
    { src: "/images/bitcoin.webp", alt: "Bitcoin" },
    { src: "/images/polkadot.webp", alt: "Polkadot" },
    { src: "/images/solana.webp", alt: "Solana" },
    { src: "/images/stellar.webp", alt: "Stellar" },
    { src: "/images/sui.webp", alt: "Sui" },
    { src: "/images/algorand.webp", alt: "Algorand" },
    { src: "/images/hedera.webp", alt: "Hedera" },
  ];

  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      <div className="container px-4 pt-12 pb-24 md:py-32 mx-auto max-w-7xl relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-3xl">
            <StatusBadge>Building Chain-Agnostic Standards</StatusBadge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
              Unifying blockchain development through open standards
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed text-pretty">
              CASA is a self-organized alliance of blockchain developers
              creating standards that support interoperability and facilitate
              communication between protocols, software, and companies.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                asChild
                className="bg-primary hover:bg-primary/90"
              >
                <Link
                  href="https://standards.chainagnostic.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View CAIPs
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#meetings">Join a Meeting</Link>
              </Button>
            </div>
          </div>

          <div className="relative w-full lg:w-[400px] h-[400px] shrink-0">
            <div className="absolute inset-0 flex items-center justify-center">
              {blockchainLogos.map((logo, index) => (
                <div
                  key={logo.alt}
                  className="absolute w-20 h-20 rounded-full bg-background border-2 border-border shadow-lg flex items-center justify-center rotating-logo"
                  style={{
                    animation: `rotate 20s linear infinite`,
                    animationDelay: `${-index * 2}s`,
                  }}
                >
                  <div
                    className="w-full h-full flex items-center justify-center counter-rotate"
                    style={{
                      animation: `counterRotate 20s linear infinite`,
                      animationDelay: `${-index * 2}s`,
                    }}
                  >
                    <Image
                      src={logo.src || "/placeholder.svg"}
                      alt={logo.alt}
                      width={48}
                      height={48}
                      className="object-contain"
                      priority={index < 5}
                      loading={index < 5 ? "eager" : "lazy"}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes rotate {
          from {
            transform: rotate(0deg) translateX(180px);
          }
          to {
            transform: rotate(360deg) translateX(180px);
          }
        }

        @keyframes counterRotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }

        .rotating-logo {
          transform-origin: center;
        }

        @media (max-width: 1024px) {
          @keyframes rotate {
            from {
              transform: rotate(0deg) translateX(140px);
            }
            to {
              transform: rotate(360deg) translateX(140px);
            }
          }
        }
      `}</style>
    </section>
  );
}
