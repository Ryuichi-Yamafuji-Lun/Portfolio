// Experience content — edit here to update the Experience section.
export const experiences = [
  {
    title: "AI Engineer Intern, Red Queen Team (AI for Business CoE)",
    company: "Rakuten Group, Inc., Tokyo, Japan",
    date: "May 2026 ~ Aug 2026",
    technologies: ["Python", "Claude Agent SDK", "Azure", "MongoDB", "PostgreSQL", "GitHub Actions"],
    description: [
      "Built an Azure-hosted LLM cost-monitoring pipeline on self-hosted Claude Managed Agents that performs schema-aware retrieval across MongoDB and PostgreSQL, metering LLM spend against real usage data from a 10,000+ employee tenant.",
      "Eliminated duplicate message processing across concurrent Azure jobs through optimistic concurrency control in MongoDB, claiming each Teams message by unique-ID compare-and-set.",
      "Engineered a scheduled Human-in-the-Loop reporting bot with the Claude Agent SDK and GitHub Actions to scan repository activity and generate weekly summaries.",
      "Deployed a Claude-powered code review tool into the team's CI/CD pipeline, extending automated quality and logic checks to 100% of incoming pull requests.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "Tomorrow's AI, Remote",
    date: "Oct 2024 ~ Oct 2025",
    technologies: ["Python", "React", "Docker", "AWS"],
    description: [
      "Slashed data ingestion latency by 10% across 3 NLP pipelines by building a Dockerized, web-scraper-driven pipeline on AWS EC2.",
      "Boosted hate-speech detection accuracy by 30% and mitigated linguistic bias by processing and normalizing 150,000+ real-world news articles (450+ MB) in Python.",
      "Reduced engineering sprint completion times by 25% by revamping the core web interface with modular, mobile-optimized React components.",
    ],
  },
  {
    title: "Systems Research Engineer (Student)",
    company: "Data Platform Laboratory, Keio Research Institute",
    date: "Mar 2022 ~ Sep 2024",
    technologies: ["C++", "C"],
    description: [
      "Restored database throughput from 0 to 500,000+ TPS by diagnosing a critical multicore contention failure and engineering a custom elastic reader-writer lock in C++.",
      "Maintained <5% performance overhead during recovery by eliminating static allocation bottlenecks through dynamic injection of threads and timestamps.",
      "Validated scalability by benchmarking the custom lock architecture across multi-core Linux environments under mixed workloads.",
    ],
  },
  {
    title: "Research Engineer Intern",
    company: "Japan Science and Technology Agency (JST), Tokyo, Japan",
    date: "Aug 2023 ~ Sep 2023",
    technologies: ["Python", "Opentrons"],
    description: [
      "Led protocol optimization for a JST R&D project, refining automation scripts to reduce resource waste by 75% (samples, reagents, pipette tips).",
      "Reduced experimentation time by 50% by optimizing code and refining protocol execution for robotics-driven workflows.",
      "Automated liquid handling processes for molecular biology experiments using the Opentrons application.",
    ],
  },
  {
    title: "Undergraduate Researcher",
    company: "Mitsubishi UFJ Information Technology (MUFJ)",
    date: "Oct 2023 ~ Jun 2024",
    technologies: ["C++", "C"],
    description: [
      "Supported research on concurrency control mechanisms for high-transaction environments at one of Japan's largest banks.",
    ],
  },
  {
    title: "Undergraduate Researcher",
    company: "Software Systems Laboratory",
    date: "Oct 2021 ~ Jul 2022",
    technologies: ["GatsbyJS", "SCSS", "Svelte", "Typescript", "Vite", "Firebase"],
    description: [
      "Participated in projects involving web development, including a tourist location info-sharing app and Maigo.",
    ],
  },
];
