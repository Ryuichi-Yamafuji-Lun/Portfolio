export const ExperienceCard = ({ title, date, technologies, description }) => {
  return (
    <div className="w-full md:w-[600px] m-3 mt-5 md:mt-0 rounded-lg overflow-hidden hover:backdrop-blur-3xl hover:bg-slate-800/50 hover:shadow-[inset_0px_1px_0px_0px_rgba(148,163,184,0.1)] flex flex-col md:flex-row">
      <div className="w-full md:w-1/3 p-4">
        <p className="pb-2 text-sm">{date}</p>
      </div>
      <div className="w-full md:w-2/3 pl-4">
        <p className="text-2xl text-line-white font-bold mb-1">{title}</p>
        <p className="pb-2">{description}</p>
        <div className="flex flex-wrap items-center space-x-2 mb-4">
          {technologies.map((tech, techIndex) => (
            <div key={techIndex} className="flex items-center space-x-1 mb-2">
              <div className="rounded-full bg-[#385feb] p-1 px-2 text-white">
                {tech.lang}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
