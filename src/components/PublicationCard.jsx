import { FiExternalLink, FiGithub, FiFileText } from "react-icons/fi";
import Tag from "./Tag";

const PublicationCard = ({
  title, venue, authors, imageSrc, technologies, description,
  paperLink, websiteLink, sourceCodeLink,
}) => {
  return (
    <div className="group flex flex-col gap-4 rounded-xl border border-navy-lighter/30 bg-navy-light/20 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:bg-navy-light/60 hover:shadow-lg hover:shadow-primary/5 sm:p-5">
      <a
        href={websiteLink || paperLink || sourceCodeLink}
        target="_blank"
        rel="noopener noreferrer"
        className="block overflow-hidden rounded-lg border border-slate-700/50 transition-colors group-hover:border-primary/40"
        aria-label={`${title} — learn more`}
      >
        <img
          src={imageSrc}
          alt={`${title} figure`}
          loading="lazy"
          className="aspect-video w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </a>

      <div>
        <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary-light">
          {venue}
        </span>

        <div className="mt-2 flex items-start justify-between gap-3">
          <h3 className="text-base font-semibold text-slate-100 transition-colors group-hover:text-primary-light sm:text-lg">
            {title}
          </h3>
          <div className="flex flex-shrink-0 items-center gap-3 pt-1 text-slate-400">
            {paperLink && (
              <a href={paperLink} target="_blank" rel="noopener noreferrer" aria-label="Paper" className="transition-colors hover:text-primary-light">
                <FiFileText />
              </a>
            )}
            {websiteLink && (
              <a href={websiteLink} target="_blank" rel="noopener noreferrer" aria-label="Demo" className="transition-colors hover:text-primary-light">
                <FiExternalLink />
              </a>
            )}
            {sourceCodeLink && (
              <a href={sourceCodeLink} target="_blank" rel="noopener noreferrer" aria-label="Source code" className="transition-colors hover:text-primary-light">
                <FiGithub />
              </a>
            )}
          </div>
        </div>

        <p className="mt-1 text-sm italic text-slate-500">{authors}</p>

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

export default PublicationCard;
