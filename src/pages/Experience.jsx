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
    }
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
      </div>
    </div>
  );
};

export default Experience;