import { AiOutlineArrowRight } from "react-icons/ai";

import { ExperienceCard } from "../components/ExperienceCard";

const Experience = () => {

  const experiences = [
    {
      title: "Tomorrow's AI",
      date: "Oct 2024 ~ Present",
      technologies: [
        { lang: "Python" },
        { lang: "React" },
        { lang: "Docker" },
        { lang: "AWS" },
      ],
      description: `
      Software Engineer Intern at Tomorrow's AI
      `,
    },
    {
      title: "Data Platform Laboratory",
      date: "APR 2022 ~ Sep 2024",
      technologies: [
        { lang: "C" },
        { lang: "C++" },
      ],
      description: `
      Kawashima Hideyuki Laboratory: Data Platform and Algorithm Sciences. 
      Currently researching on AI and concurrency control mechanism (SILO and 2-PL with Starvation Freedom). 
      `,
    },
    {
      title: "Mitsubishi UFJ Information Technology",
      date: "OCT 2023 ~ Jun 2024",
      technologies: [
        { lang: "C" },
        { lang: "C++" },
      ],
      description: `
      Undergraduate researcher for one of the biggest banks in Japan MUFJ.
      Solving issues about concurrency control mechanism.
      `,
    },
    {
      title: "JST-Mirai Program",
      date: "AUG 2023",
      technologies: [
        { lang: "Python" },
        { lang: "OpenTron" },
      ],
      description: `
      Participated in the full-scale R&D project 'Accelerating Life Sciences by Robotics Biology' of the JST-Mirai Program. 
      Automated liquid handling processes of molecular biology experiments on the Opentrons application. Led the optimization 
      and refinement of protocol programs and codes with particular emphases on increasing efficiency and decreasing resource waste (samples, reagents, and pipette tips). 
      `,
    },
    {
      title: "Software Systems Laboratory",
      date: "OCT 2021 ~ JULY 2022",
      technologies: [
        { lang: "GatsbyJS" },
        { lang: "SCSS" },
        { lang: "Svelte" },
        { lang: "Typescript" },
        { lang: "Vite" },
        { lang: "Firebase" },
      ],
      description: `
      Hagino-Hattori Laboratory: Participated in 2 projects involving web development, (1) Maigo and (2) a tourist location info-sharing app.
      `,
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