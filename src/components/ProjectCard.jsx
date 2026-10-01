import { FiExternalLink, FiGithub } from "react-icons/fi";
import Tag from "./Tag";

const ProjectCard = ({ title, imageSrc, technologies, description, websiteLink, sourceCodeLink }) => {
  return (
    <div className="group flex flex-col gap-4 rounded-xl border border-navy-lighter/30 bg-navy-light/20 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:bg-navy-light/60 hover:shadow-lg hover:shadow-primary/5 sm:p-5">
      {/* Full-width landscape screenshot on top */}
      <a
        href={websiteLink || sourceCodeLink}
        target="_blank"
        rel="noopener noreferrer"
        className="block overflow-hidden rounded-lg border border-slate-700/50 transition-colors group-hover:border-primary/40"
        aria-label={websiteLink ? `${title} — live site` : `${title} — source code`}
      >
        <img
          src={imageSrc}
          alt={`${title} screenshot`}
          loading="lazy"
          className="aspect-video w-full bg-slate-900 object-contain transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </a>

      <div>
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-base font-semibold text-slate-100 transition-colors group-hover:text-primary-light sm:text-lg">
            {title}
          </h3>
          <div className="flex flex-shrink-0 items-center gap-3 pt-1 text-slate-400">
            {websiteLink && (
              <a
                href={websiteLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Live site"
                className="transition-colors hover:text-primary-light"
              >
                <FiExternalLink />
              </a>
            )}
            {sourceCodeLink && (
              <a
                href={sourceCodeLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Source code"
                className="transition-colors hover:text-primary-light"
              >
                <FiGithub />
              </a>
            )}
          </div>
        </div>

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

export default ProjectCard;
