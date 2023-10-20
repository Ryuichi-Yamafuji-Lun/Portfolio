import theDuck from "../assets/image/OpenTron/duck.jpeg";
import OTAction from "../assets/image/OpenTron/OpenTronInAction.png";
import ProjectCard from "../components/ProjectCard";


const OtherProjects = () => {
  const otherprojects = [
    {
      title: "Opentron OT-2",
      imageSrc: OTAction,
      technologies: [
        { logo: "Python" },
        { logo: "openTron" },
      ],
      description: "description",
    },
    {
      title: "B+Tree Implementation",
      imageSrc: theDuck,
      technologies: [
        { logo: "C" },
        { logo: "C++" },
      ],
      description: "description",
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
