// Project card

const ProjectCard = ({ title, imageSrc, technologies, description, websiteLink, sourceCodeLink }) => {
  return (
    <div className="max-w-[1000px] px-4 m-2 md:p-5 mt-20 md:mt-0 border-2 border-line-white rounded-lg">
      <div className="mb-4 pt-1 relative">
        <a
          href={websiteLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={imageSrc} alt="" />
        </a>
        {/* Buttons container */}
        <div className="flex items-center justify-center absolute bottom-0 left-0 right-0 p-4">
          {websiteLink && (
            <a
              href={websiteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-line-white bg-background-white border-2 border-line-white p-1 hover:bg-black mx-2"
            >
              Website
            </a>
          )}
          {sourceCodeLink && (
            <a
              href={sourceCodeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-line-white bg-background-white border-2 border-line-white p-1 hover:bg-black mx-2"
            >
              Source Code
            </a>
          )}
        </div>
      </div>
      <p className="text-2xl text-line-white font-bold md:text-3xl">{title}</p>
      <div className="flex items-center space-x-2 mb-4">
        <p className="text-line-white text-sm">Created with: </p>
        {technologies.map((tech, techIndex) => (
          <div key={techIndex} className="flex items-center space-x-1">
            {tech.logo}
          </div>
        ))}
      </div>
      <p className="pb-2">{description}</p>
    </div>
  );
};

export default ProjectCard;
