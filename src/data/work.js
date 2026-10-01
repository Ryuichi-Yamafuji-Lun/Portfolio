// Projects, research, and experience. Edit here to add, remove, or reword tiles.
import mirrorImg from "../assets/image/web/mirror.jpg";
import mediskinImg from "../assets/image/web/mediskinai.jpg";
import fafnirImg from "../assets/image/web/fafnirdt.jpg";
import tetrisImg from "../assets/image/web/tetris.jpg";

// Image tiles in grid order. "span" is the width on desktop (out of 12 columns).
export const projects = [
  {
    id: "mirror",
    span: 7,
    image: mirrorImg,
    alt: "MIRROR diagram: a traditional attack, an agent-in-the-middle attack, and the MIRROR quorum defense",
    badge: "NeurIPS 2026 FLMSec Workshop · Accepted",
    title: "MIRROR: Multipath Quorum Integrity for LLM Multi-Agent Communication",
    sub: "First author, led a 4-person team",
    lead: "Protects messages between LLM agents from an intermediary that can read and rewrite them.",
    details: [
      "Sends each message over several independent routes and accepts it only when a majority of routes agree.",
      "Adds no extra LLM calls, which judge-based defenses need.",
    ],
    links: [["Code", "https://github.com/highphysicist/MIRROR-defense-for-aitm-mas"]],
    tags: ["LLMs", "Multi-Agent", "Security"],
  },
  {
    id: "mediskin",
    span: 4,
    image: mediskinImg,
    alt: "MediSkinAI landing page",
    title: "MediSkinAI",
    sub: "Melanoma screening agent · 27+ early users",
    details: [
      "Fine-tuned ResNet50 on 33,126 ISIC 2020 dermoscopy images with a 56:1 benign-to-malignant class imbalance.",
      "Built a LangGraph agent that routes the CNN prediction through a Gemini reasoning node for plain-language explanations and next steps.",
      "Migrated the FastAPI backend from Render to Google Cloud Run, cutting hosting cost to $0 on the free tier; uploads are deleted after inference.",
    ],
    links: [
      ["Live site", "https://mediskinai.vercel.app/"],
      ["Code", "https://github.com/Ryuichi-Yamafuji-Lun/MediSkinAI"],
    ],
    tags: ["PyTorch", "LangGraph", "FastAPI", "React", "Cloud Run"],
  },
  {
    id: "fafnir",
    span: 4,
    image: fafnirImg,
    alt: "FafnirDT throughput chart",
    badge: "163rd System Software & OS Symposium, 2024",
    title: "FafnirDT",
    sub: "Dynamic timestamps in lock-based concurrency control · First author",
    details: [
      "Proposed an elastic reader-writer lock using dynamic thread and timestamp injection to eliminate static allocation bottlenecks under multi-core contention.",
      "Restored system throughput from 0 to 500,000+ transactions/sec in benchmarks.",
    ],
    links: [
      ["Paper", "https://jglobal.jst.go.jp/en/detail?JGLOBAL_ID=202402231694286824"],
      ["Code", "https://github.com/Ryuichi-Yamafuji-Lun/FafnirDT"],
    ],
    tags: ["C++", "Concurrency", "Databases"],
  },
  {
    id: "tetris",
    span: 4,
    image: tetrisImg,
    alt: "Tetris benchmark boards",
    title: "Tetris AI Benchmark",
    sub: "Foundation models vs. reinforcement learning",
    details: [
      "Built a custom Gymnasium interface that lets text-based foundation models (Gemini, GPT) play Tetris, benchmarking them head-to-head against a reinforcement learning agent.",
      "Devised a Chain-of-Thought reasoning module (Gemini API) which improved survival rates by 8.2%.",
      "Trained a Deep Q-Network policy to establish a high-performance baseline (approx. 600 reward).",
    ],
    links: [["Code", "https://github.com/Ryuichi-Yamafuji-Lun/Tetris-Benchmark"]],
    tags: ["Gemini API", "Python", "DQN"],
  },
];

// Newest first. The first role gets the glowing "current" dot and its own feature tile.
export const roles = [
  {
    title: "AI Engineer Intern",
    when: "May – Aug 2026",
    org: "Rakuten Group (Rakuten AI) · Red Queen Team, AI for Business CoE · Tokyo",
    highlight: "LLM cost monitoring on self-hosted Claude Managed Agents, and AI code review for 100% of pull requests.",
    bullets: [
      "Built an Azure-hosted LLM cost-monitoring pipeline on self-hosted Claude Managed Agents that performs schema-aware retrieval across MongoDB and PostgreSQL, metering LLM spend against real usage data from a 10,000+ employee tenant.",
      "Eliminated duplicate message processing across concurrent Azure jobs through optimistic concurrency control in MongoDB, claiming each Teams message by unique-ID compare-and-set.",
      "Engineered a scheduled Human-in-the-Loop reporting bot with the Claude Agent SDK and GitHub Actions to scan repository activity and generate weekly summaries.",
      "Deployed a Claude-powered code review tool into the team's CI/CD pipeline, extending automated quality and logic checks to 100% of incoming pull requests.",
    ],
    tags: ["Python", "Claude Agent SDK", "Azure", "MongoDB", "PostgreSQL", "GitHub Actions"],
  },
  {
    title: "Software Engineer Intern",
    when: "Oct 2024 – Oct 2025",
    org: "Tomorrow's AI · Remote",
    highlight: "NLP data pipelines on AWS, 30% better hate-speech detection, and a React front-end rebuild.",
    bullets: [
      "Slashed data ingestion latency by 10% across 3 NLP pipelines by building a Dockerized, web-scraper-driven pipeline on AWS EC2.",
      "Boosted hate-speech detection accuracy by 30% and mitigated linguistic bias by processing and normalizing 150,000+ real-world news articles (450+ MB) in Python.",
      "Reduced engineering sprint completion times by 25% by revamping the core web interface with modular, mobile-optimized React components.",
    ],
  },
  {
    title: "Systems Research Engineer (Student)",
    when: "Mar 2022 – Sep 2024",
    org: "Data Platform Laboratory, Keio Research Institute",
    highlight: "A C++ reader-writer lock that restored a database from 0 to 500,000+ transactions/sec.",
    bullets: [
      "Restored database throughput from 0 to 500,000+ TPS by diagnosing a critical multicore contention failure and engineering a custom elastic reader-writer lock in C++.",
      "Maintained <5% performance overhead during recovery by eliminating static allocation bottlenecks through dynamic injection of threads and timestamps.",
      "Collaborated with Mitsubishi UFJ Information Technology (Oct 2023 – Jun 2024) on concurrency control research for high-transaction banking environments.",
    ],
  },
  {
    title: "Research Engineer Intern",
    when: "Aug – Sep 2023",
    org: "Japan Science and Technology Agency (JST) · Tokyo",
    highlight: "Lab-automation scripts that cut resource waste by 75% and experiment time by 50%.",
    bullets: [
      "Led protocol optimization for a JST R&D project, refining automation scripts to reduce resource waste by 75%.",
      "Reduced experimentation time by 50% by optimizing code and protocol execution for robotics-driven workflows.",
    ],
  },
];
