// ProjectCard.jsx

const ProjectCard = ({ title, imageSrc, technologies, description, websiteLink, sourceCodeLink }) => {
    return (
      <div className="transition w-max-[1000px] m-3 mt-20 md:mt-0 rounded-lg overflow-hidden shadow-lg hover:-translate-y-1 hover:scale-105">
        <div className="mb-4 relative w-full">
          <a
            href={websiteLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={imageSrc}
              alt=""
              className="w-full h-auto" 
            />
          </a>
          {/* Buttons container */}
          <div className="flex items-center justify-center absolute bottom-0 left-0 right-0 p-4">
            {websiteLink && (
              <a
                href={websiteLink}
                target="_blank"
                rel="noopener noreferrer"
                className="transition font-bold text-line-white bg-background-white border-2 border-line-white p-1 rounded-lg hover:bg-black mx-2 hover:-translate-y-1 hover:scale-110"
              >
                Website
              </a>
            )}
            {sourceCodeLink && (
              <a
                href={sourceCodeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="transition font-bold text-line-white bg-background-white border-2 border-line-white p-1 rounded-lg hover:bg-black mx-2 hover:-translate-y-1 hover:scale-110"
              >
                Source Code
              </a>
            )}
          </div>
        </div>
        <div className="max-w-full px-4"> {/* Set maxWidth to 100% */}
          <p className="text-2xl text-line-white font-bold md:text-3xl mb-1">{title}</p>
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
      </div>
    );
  };
  
  export default ProjectCard;
  