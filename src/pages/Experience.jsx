import { AiOutlineArrowRight } from "react-icons/ai";
import { ExperienceCard } from "../components/ExperienceCard";

const Experience = () => {

  const experiences = [
    {
      title: "AI Engineer Intern, Red Queen Team",
      company: "Rakuten Group, Inc., Tokyo, Japan",
      date: "May 2026 ~ Aug 2026",
      technologies: [
        { lang: "Python" },
        { lang: "Claude Agent SDK" },
        { lang: "GitHub Actions" },
        { lang: "CI/CD" },
      ],
      description: [
        "Engineered an autonomous reporting pipeline using the Claude Agent SDK and GitHub Actions, scanning repository-wide commits, PRs, and comments to synthesize individualized weekly summaries.",
        "Designed a scheduled Human-in-the-Loop (HITL) workflow to ensure data accuracy, empowering engineering leads to easily validate and execute context-aware report generation via custom integration commands.",
        "Deployed an automated Claude-powered code validation tool into the team's CI/CD environment, enforcing continuous quality and logic checks on all incoming Pull Requests to reduce manual review overhead."
      ],
    },
    {
      title: "AI Engineer Intern",
      company: "Tomorrow's AI, Remote",
      date: "Oct 2024 ~ Oct 2025",
      technologies: [
        { lang: "Python" },
        { lang: "React" },
        { lang: "Docker" },
        { lang: "AWS" },
      ],
      description: [
        "Built a Dockerized data ingestion pipeline on AWS EC2 using web scrapers, reducing data ingestion latency by 10% across 3 NLP pipelines.",
        "Boosted hate speech detection accuracy by 30% by processing and normalizing 7+ real-world news datasets in Python, successfully mitigating linguistic bias across core NLP models.",
        "Revamped the core web interface with modular, mobile-optimized React components to enhance platform usability, reducing engineering sprint completion times by 25%."
      ],
    },
    {
      title: "Systems Research Engineer",
      company: "Data Platform Laboratory, Keio Research Institute",
      date: "Mar 2022 ~ Sep 2024",
      technologies: [
        { lang: "C++" },
        { lang: "C" },
      ],
      description: [
        "Restored database throughput from 0 to 500,000+ TPS by diagnosing a critical multicore contention failure and engineering a custom elastic reader-writer lock in C++.",
        "Achieved recovery with <5% performance overhead by eliminating static allocation bottlenecks through dynamic thread/timestamp injection.",
        "Benchmarked high-performance architecture across multi-core Linux environments, stress-testing hardware concurrency and data throughput to validate scalable infrastructure for compute-intensive processing pipelines."
      ],
    },
    {
      title: "Program Participant & Student Representative",
      company: "JST-Mirai Program",
      date: "Aug 2023 ~ Sep 2023",
      technologies: [
        { lang: "Python" },
        { lang: "Opentrons" },
      ],
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
      technologies: [
        { lang: "C++" },
        { lang: "C" },
      ],
      description: [
        "Supported research on concurrency control mechanisms for high-transaction environments at one of Japan's largest banks."
      ],
    },
    {
      title: "Undergraduate Researcher",
      company: "Software Systems Laboratory",
      date: "Oct 2021 ~ Jul 2022",
      technologies: [
        { lang: "GatsbyJS" },
        { lang: "SCSS" },
        { lang: "Svelte" },
        { lang: "Typescript" },
        { lang: "Vite" },
        { lang: "Firebase" },
      ],
      description: [
        "Participated in projects involving web development, including a tourist location info-sharing app and Maigo."
      ],
    },
  ]

  return (
    <div name="experience" className="w-full font-lato">
      <div className="container mx-auto p-10 md:p-5 text-line-white">
        <div className="font-bold p-4">
          <p className="text-3xl text-center md:text-left md:text-6xl">EXPERIENCE</p>
        </div>
        <div className="grid grid-cols-1 gap-4">
          {experiences.map((experience, index) => (
            <div className="w-full md:w-[400px]" key={index}> 
              <ExperienceCard {...experience} />
            </div>
          ))}
        </div>
        <div className="text-center mt-4 p-4 ">
          <a
            className="group resume-button flex items-center"
            aria-label="View Full Résumé"
            href="YOUR_UPDATED_RESUME_LINK_HERE" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="group-hover:underline font-bold transition-transform pr-2">
              See My Résumé
            </span>{" "}
            <AiOutlineArrowRight className="group-hover:translate-x-3 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Experience;