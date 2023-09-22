import { BiLogoPython } from "react-icons/bi";
import C_Dark from "../assets/icons/programming/C-dark.png";
import Cpp_Dark from "../assets/icons/programming/C++-dark.png";
import theDuck from "../assets/image/OpenTron/duck.jpeg";
import openTron from "../assets/icons/programming/openTron.png";
import ProjectCard from "../components/ProjectCard";

const OtherProjects = () => {
  const otherprojects = [
    {
      title: "Opentron OT-2",
      imageSrc: theDuck,
      technologies: [
        { logo: <BiLogoPython size={35} />, name: "Python" },
        { logo: <img src={openTron} alt="OpenTron icon" style={{ height: '35px', width: '35px' }}/>, name: "openTron" },
      ],
      description: "description",
    },
    {
      title: "B+Tree Implementation",
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
          <p className="text-6xl">OTHER PROJECTS</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {otherprojects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OtherProjects;
