import Tag from "./Tag";

export const ExperienceCard = ({ title, company, date, technologies, description }) => {
  return (
    <div className="group grid grid-cols-1 gap-2 rounded-xl border border-navy-lighter/30 bg-navy-light/20 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:bg-navy-light/60 hover:shadow-lg hover:shadow-primary/5 sm:grid-cols-4 sm:gap-6">
      <p className="pt-1 text-xs font-semibold uppercase tracking-wide text-slate-400 sm:col-span-1">
        {date}
      </p>

      <div className="sm:col-span-3">
        <h3 className="text-base font-semibold text-slate-100 transition-colors group-hover:text-primary-light">
          {title}
        </h3>
        <p className="text-sm font-medium text-slate-400">{company}</p>

        <ul className="mt-3 space-y-2">
          {description.map((item, index) => (
            <li
              key={index}
              className="relative pl-5 text-sm leading-relaxed text-slate-400 before:absolute before:left-0 before:text-primary before:content-['▹']"
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-4 flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <Tag key={index}>{tech}</Tag>
          ))}
        </div>
      </div>
    </div>
  );
};
