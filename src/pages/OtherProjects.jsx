import OTAction from "../assets/image/OpenTron/OpenTronInAction.png";
import BpTree from "../assets/image/BpTree/BptreeIMG.png";
import DT from "../assets/image/FafnirDT/FafnirDT.png";
import ProjectCard from "../components/ProjectCard";


const OtherProjects = () => {
  const otherprojects = [
    {
      title: "Dynamic Timestamp in Lock-based Concurrency Control Protocols",
      imageSrc: DT,
      technologies: [
        { logo: "C/C++" },
        { logo: "CCBench" },
      ],
      description: `
      Optimized Two-Phase Locking with Starvation Freedom (2PLSF) for high contention, integrating an elastic reader-writer lock and dynamic timestamp tracking to ensure performance even in rare zero-transaction scenarios.
      `,
    },
    {
      title: "Opentron OT-2",
      imageSrc: OTAction,
      technologies: [
        { logo: "Python" },
        { logo: "OpenTron" },
        { logo: "Arduino" }
      ],
      description: `
      Automation of the liquid handling processes of molecular biology experiments
      `,
    },
    {
      title: "B+Tree Implementation",
      imageSrc: BpTree,
      technologies: [
        { logo: "C" },
        { logo: "C++" },
      ],
      description: `
      Implementation of B+tree with 2-phase locking
      `,
    },
  ];

  return (
    <div name="otherproject" className="w-full font-lato">
      <div className="container mx-auto p-10 md:p-5 text-line-white">
        <div className="font-bold p-4">
          <p className="text-3xl text-center md:text-left md:text-6xl">OTHER PROJECTS</p>
        </div>
        <div className="grid grid-cols-1 ">
          {otherprojects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OtherProjects;
