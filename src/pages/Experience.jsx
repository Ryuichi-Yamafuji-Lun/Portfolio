import { AiOutlineArrowRight } from "react-icons/ai";

import { ExperienceCard } from "../components/ExperienceCard";

const Experience = () => {

  const experiences = [
    {
      title: "Data Platform Laboratory",
      date: "APR 2022 ~ PRESENT",
      technologies: [
        { logo: "C" },
        { logo: "C++" },
      ],
      description: `
      Kawashima Hideyuki Laboratory: Data Platform and Algorithm Sciences. 
      Currently researching on AI and concurrency control (SILO and 2-PL with Starvation Freedom). 
      `,
    },
    {
      title: "Japan Venture Academy",
      date: "AUG 2023 ~ PRESENT",
      technologies: [
        { logo: "React" },
        { logo: "Tailwindcss" },
      ],
      description: `
      Lead Engineer for the startup bOLD. 
      `,
    },
    {
      title: "JST-Mirai Program",
      date: "AUG 2023",
      technologies: [
        { logo: "Python" },
        { logo: "OpenTron" },
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
        { logo: "GatsbyJS" },
        { logo: "SCSS" },
        { logo: "Svelte" },
        { logo: "Typescript" },
        { logo: "Vite" },
        { logo: "Firebase" },
      ],
      description: `
      Hagino-Hattori Laboratory: Participated in 2 projects involving web development, (1) Maigo and (2) a tourist location info-sharing app.
      `,
    }, 
  ]

  return (
    <div name="experience" className="w-full font-lato">
      <div className="container mx-auto p-10 md:p-20">
        <div className="text-line-white font-bold p-4">
          <p className="text-6xl">EXPERIENCE</p>
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
            href="/resume.pdf" // Replace with resume when done
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