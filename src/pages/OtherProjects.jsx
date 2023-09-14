import { BiLogoPython } from "react-icons/bi";

import C_Dark from "../assets/icons/programming/C-dark.png";
import Cpp_Dark from "../assets/icons/programming/C++-dark.png";
import theDuck from "../assets/image/OpenTron/duck.jpeg";
import openTron from "../assets/icons/programming/openTron.png"

const OtherProjects = () => {
  const otherprojects = [
    {
      title: "Opentron OT-2",
      imageSrc: theDuck,
      technologies: [
        { logo: <BiLogoPython size={35} />, name: "Python" },
        { logo: <img src={openTron} alt="OpenTron icon" style={{ height: '35px', width: '35px' }}/>, name: "openTron" },
      ],
      description: `
      description`,
    },
    {
      title: "B+Tree ",
      imageSrc: theDuck,
      technologies: [
        { logo: <img src={C_Dark} alt="mySQL icon" style={{ height: '35px', width: '35px' }}/>, name: "C" },
        { logo: <img src={Cpp_Dark} alt="mySQL icon" style={{ height: '35px', width: '35px' }}/>, name: "C++" },

      ],
      description: "description",
    },
  ];

  return (
    <div name="otherproject" className="w-full font-lato">
      <div className="container mx-auto p-10 md:p-20">
        <div className="text-center text-line-white font-bold pb-4">
          <p className="text-6xl">Other Projects</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 ">
          {otherprojects.map((otherprojects, index) => (
            <div key={index} className="max-w-[1000px] px-4 md:pl-20 pr-3 md:pr-5 mt-20 md:mt-0">
              <p className="text-2xl text-line-white font-bold md:text-3xl">{otherprojects.title}</p>
              <div className="mb-4">
                <img src={otherprojects.imageSrc} alt="Project Image" />
              </div>
              <div className="flex items-center space-x-2 mb-4">
                <p className="text-line-white text-sm">Created with: </p>
                {otherprojects.technologies.map((tech, techIndex) => (
                  <div key={techIndex} className="flex items-center space-x-1">
                    {tech.logo}
                  </div>
                ))}
              </div>
              <p className="pb-2">{otherprojects.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OtherProjects;
