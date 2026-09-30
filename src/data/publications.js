// Research & publications — edit here to update the Research section.
import MIRROR from "../assets/image/MIRROR/MIRROR.png";
import DT from "../assets/image/FafnirDT/FafnirDT.png";

export const publications = [
  {
    title: "MIRROR: Multipath Quorum Integrity for LLM Multi-Agent Communication",
    venue: "NeurIPS 2026 FLMSec Workshop · Accepted",
    authors: "Lun, R. (First Author, led 4-person team), et al.",
    imageSrc: MIRROR,
    technologies: ["LLMs", "Multi-Agent", "Security"],
    description: [
      "Architected a quorum-based communication-integrity protocol for LLM multi-agent systems, reducing the attack success rate to 0%.",
      "Bypassed the 35× API token overhead required by standard semantic defenses.",
    ],
    websiteLink: "https://demo-nine-lemon-64.vercel.app/",
    sourceCodeLink: "https://github.com/highphysicist/MIRROR-defense-for-aitm-mas",
  },
  {
    title: "FafnirDT: Dynamic Timestamp in Lock-based Concurrency Control Protocols",
    venue: "163rd System Software & OS Symposium, 2024",
    authors: "Lun, R. (First Author), et al.",
    imageSrc: DT,
    technologies: ["C++", "Concurrency", "Database Systems"],
    description: [
      "Proposed a novel elastic reader-writer lock using dynamic thread and timestamp injection to eliminate static allocation bottlenecks under multi-core contention.",
      "Restored system throughput from 0 to 500,000+ transactions/sec in benchmarks.",
    ],
    paperLink: "https://jglobal.jst.go.jp/en/detail?JGLOBAL_ID=202402231694286824",
    sourceCodeLink: "https://github.com/Ryuichi-Yamafuji-Lun/FafnirDT",
  },
];
