import { AiOutlineArrowRight } from "react-icons/ai";

import { ExperienceCard } from "../components/ExperienceCard";

const Experience = () => {

  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "Tomorrow's AI, Remote",
      date: "Oct 2024 ~ Oct 2025",
      technologies: [
        { lang: "Python" },
        { lang: "React" },
        { lang: "Docker" },
        { lang: "AWS" },
      ],
      description: [
        "Revamped core UI with modular, mobile-optimized React components to enhance usability, reducing sprint completion time by 25%.",
        "Increased hate speech detection accuracy by 30% by processing and normalizing 7+ real-world news datasets in Python.",
        "Constructed a Dockerized data ingestion pipeline with web scrapers on AWS EC2, enhancing article freshness by 10% across 3 NLP model pipelines."
      ],
    },
    {
      title: "Undergraduate Researcher",
      company: "Data Platform Laboratory, Keio Research Institute",
      date: "Mar 2022 ~ Sep 2024",
      technologies: [
        { lang: "C++" },
        { lang: "C" },
      ],
      description: [
        "Discovered and diagnosed a critical failure in a high-throughput transactional database system where throughput collapsed to 0 transactions/sec.",
        "Designed and implemented an elastic reader-writer lock in C++ to dynamically inject threads and timestamps, eliminating static allocation bottlenecks.",
        "Restored system throughput from 0 to over 500,000 transactions/sec in benchmarks, achieving full recovery with <5% performance overhead.",
        "Authored a technical paper on the novel architecture, accepted for presentation at the 163rd System Software & OS Symposium."
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
            href="https://docs.google.com/document/d/1LsHdHDT1QlYNuUpqcHDuX9iiHpufoeJY6G4o7vQz6IA/edit?usp=sharing" 
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