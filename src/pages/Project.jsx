import { BiLogoReact, BiLogoTailwindCss, BiLogoFlask, BiLogoFirebase, BiLogoTypescript } from "react-icons/bi";
import mySQL_Dark from "../assets/icons/programming/mySQL-Dark.png";
import theDuck from "../assets/image/OpenTron/duck.jpeg";
import ProjectCard from "../components/ProjectCard";

const Project = () => {
  const projects = [
    {
      title: "PokéStore Management System",
      imageSrc: theDuck,
      technologies: [
        { logo: <img src={mySQL_Dark} alt="mySQL icon" />, name: "MySQL" },
        { logo: <BiLogoFlask size={35} />, name: "Flask" },
        { logo: <BiLogoReact size={35} />, name: "React" },
        { logo: <BiLogoTailwindCss size={35} />, name: "Tailwind CSS" },
      ],
      description: `
      A full-stack PokéMart themed management system with hidden easter eggs.
      This management system uses mySQL, a database containing information about
      the products available in the store and the orders made. Flask is used as
      an API to make changes to the database, such as adding orders, editing
      product details, deleting products, and more. React was used for the
      frontend user interface.`,
      websiteLink: "https://maigo-bd6b7.web.app/",
      sourceCodeLink: "https://github.com/Ryuichi-Yamafuji-Lun/PokeStore-management-system",
    },
    {
      title: "Maigo",
      imageSrc: theDuck,
      technologies: [
        { logo: <BiLogoFirebase size={35} />, name: "Firebase" },
        { logo: <BiLogoTypescript size={35} />, name: "TypeScript" },
      ],
      description: `
      Maigo is a GeoGuessr clone for MMO made with a team of six. I specifically 
      assisted in the authentication using firebase and other miscellaneous tasks.`,
      websiteLink: "https://maigo-bd6b7.web.app/",
      sourceCodeLink: "https://github.com/leochoo/maigo",
    },
    {
      title: "Portfolio",
      imageSrc: theDuck,
      technologies: [
        { logo: <BiLogoReact size={35} />, name: "React"},
        { logo: <BiLogoTailwindCss size={35} />, name: "Tailwindcss"},
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
          <p className="text-6xl">Projects</p>
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
