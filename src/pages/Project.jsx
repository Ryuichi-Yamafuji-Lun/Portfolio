import theDuck from "../assets/image/OpenTron/duck.jpeg";
import ProjectCard from "../components/ProjectCard";

const Project = () => {
  const projects = [
    {
      title: "PokéStore Management System",
      imageSrc: theDuck,
      technologies: [
        { logo: "MySQL" },
        { logo: "Flask" },
        { logo: "React" },
        { logo: "Tailwind CSS" },
      ],
      description: `
      A full-stack PokéMart themed management system with hidden easter eggs.
      `,
      websiteLink: "https://maigo-bd6b7.web.app/",
      sourceCodeLink: "https://github.com/Ryuichi-Yamafuji-Lun/PokeStore-management-system",
    },
    {
      title: "Maigo",
      imageSrc: theDuck,
      technologies: [
        { logo: "Firebase" },
        { logo: "TypeScript" },
      ],
      description: `
      Maigo is a GeoGuessr clone for MMO made with a team of six.`,
      websiteLink: "https://maigo-bd6b7.web.app/",
      sourceCodeLink: "https://github.com/leochoo/maigo",
    },
    {
      title: "Portfolio",
      imageSrc: theDuck,
      technologies: [
        { logo: "React"},
        { logo: "Tailwindcss"},
      ],
      description: `My Portfolio was made with React and Tailwindcss to showcase my works`,
      websiteLink: "https://maigo-bd6b7.web.app/",
      sourceCodeLink: "https://github.com/leochoo/maigo",
    }
  ];

  return (
    <div name="project" className="w-full font-lato">
      <div className="container mx-auto p-10">
        <div className="text-center text-line-white font-bold p-4">
          <p className="text-6xl">PROJECTS</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 ">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
