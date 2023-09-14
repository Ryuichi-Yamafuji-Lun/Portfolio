import { BiLogoReact, BiLogoTailwindCss, BiLogoFlask, BiLogoFirebase, BiLogoTypescript } from "react-icons/bi";

const OtherProjects = () => {
  const otherprojects = [
    {
      title: "Opentron Coding",
      imageSrc: "URL_TO_YOUR_IMAGE_1",
      technologies: [
        { logo: <BiLogoFlask size={35} />, name: "Flask" },
        { logo: <BiLogoReact size={35} />, name: "React" },
        { logo: <BiLogoTailwindCss size={35} />, name: "Tailwind CSS" },
      ],
      description: `
      description`,
    },
    {
      title: "B+Tree Implementation",
      imageSrc: "URL_TO_YOUR_IMAGE_2",
      technologies: [
        { logo: <BiLogoFirebase size={35} />, name: "Firebase" },
        { logo: <BiLogoTypescript size={35} />, name: "TypeScript" },
      ],
      description: "description",
    },
  ];

  return (
    <div name="otherproject" className="w-full font-lato">
      <div className="container mx-auto p-10 md:p-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 ">
          {otherprojects.map((otherprojects, index) => (
            <div key={index} className="max-w-[1000px] px-4 md:pl-20 pr-3 md:pr-5 mt-20 md:mt-0">
              <p className="text-2xl text-line-white font-bold md:text-3xl">{otherprojects.title}</p>
              <div className="mb-4">
                image
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
