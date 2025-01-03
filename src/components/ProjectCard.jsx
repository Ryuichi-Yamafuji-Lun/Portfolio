import { MdWebAsset } from "react-icons/md";
import { BiCodeAlt } from "react-icons/bi";

const ProjectCard = ({ title, imageSrc, technologies, description, websiteLink, sourceCodeLink }) => {
  return (
    <div className="transition w-full md:w-[600px] m-3 mt-20 md:mt-0 rounded-lg overflow-hidden hover:backdrop-blur-3xl hover:bg-slate-800/50 hover:shadow-[inset_0px_1px_0px_0px_rgba(148,163,184,0.1)] flex flex-col md:flex-row">

      <div className="w-full md:w-1/3">
        <a
          href={websiteLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={imageSrc}
            alt=""
            className="w-full h-2/3 p-3 rounded-2xl"
          />
        </a>
        <div className="flex items-center space-x-2 mt-2 p-3 md:mt-0">
          {websiteLink && (
            <a
              href={websiteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="transition font-bold text-line-white"
            >
              <div className="flex items-center transition hover:-translate-y-1 hover:translate-x-1 hover:scale-110">
                <MdWebAsset />
                <span>Live</span>
              </div>
            </a>
          )}
          {sourceCodeLink && (
            <a
              href={sourceCodeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="transition font-bold text-line-white"
            >
              <div className="flex items-center transition hover:-translate-y-1 hover:translate-x-1 hover:scale-110">
                <BiCodeAlt />
                <span>Source Code</span>
              </div>
            </a>
          )}
        </div>
      </div>
      <div className="w-full md:w-2/3 p-4">
        <p className="text-2xl text-line-white font-bold mb-1">{title}</p>
        <p className="pb-2">{description}</p>
        <div className="flex flex-wrap items-center space-x-2 mb-4">
          {technologies.map((tech, techIndex) => (
            <div key={techIndex} className="flex items-center space-x-1 mb-2">
              <div className="rounded-full bg-[#385feb] p-1 px-2 text-white">
                {tech.logo}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
