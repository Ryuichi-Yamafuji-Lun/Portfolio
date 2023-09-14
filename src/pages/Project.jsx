import { BiLogoReact, BiLogoTailwindCss, BiLogoFlask, BiLogoFirebase, BiLogoTypescript } from "react-icons/bi";
import mySQL_Dark from "../assets/icons/programming/mySQL-Dark.png";
import theDuck from "../assets/image/OpenTron/duck.jpeg";

const Project = () => {
  const projects = [
    {
      title: "PSMS",
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
      description: "Maigo is a GeoGuessr clone for MMO made with a team of six. I specifically assisted in the authentication using firebase and other miscellaneous tasks.",
      websiteLink: "https://maigo-bd6b7.web.app/",
      sourceCodeLink: "https://github.com/leochoo/maigo",
    },
  ];

  return (
    <div name="project" className="w-full font-lato">
      <div className="container mx-auto p-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 ">
          {projects.map((project, index) => (
            <div key={index} className="max-w-[1000px] px-4 md:pl-20 pr-3 md:pr-5 mt-20 md:mt-0">
              <p className="text-2xl text-line-white font-bold md:text-3xl">{project.title}</p>
              <div className="mb-4 pt-1 relative">
                <a
                  href={project.websiteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={project.imageSrc} alt="Project Image" />
                </a>
                {/* Buttons container */}
                <div className="flex items-center justify-center absolute bottom-0 left-0 right-0 p-4">
                  <a
                    href={project.websiteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-line-white bg-background-white border-2 border-line-white p-1 hover:bg-black mx-2"
                  >
                    Website
                  </a>
                  <a
                    href={project.sourceCodeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-line-white bg-background-white border-2 border-line-white p-1 hover:bg-black mx-2"
                  >
                    Source Code
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-2 mb-4">
                <p className="text-line-white text-sm">Created with: </p>
                {project.technologies.map((tech, techIndex) => (
                  <div key={techIndex} className="flex items-center space-x-1">
                    {tech.logo}
                  </div>
                ))}
              </div>
              <p className="pb-2">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
