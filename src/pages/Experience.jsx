import { AiOutlineArrowRight } from "react-icons/ai";
import { ExperienceCard } from "../components/ExperienceCard";
import { experiences } from "../data/experiences";

const RESUME_LINK =
  "https://docs.google.com/document/d/1LsHdHDT1QlYNuUpqcHDuX9iiHpufoeJY6G4o7vQz6IA/edit?usp=sharing";

const Experience = () => {
  return (
    <section id="experience" name="experience" className="scroll-mt-24 pt-16 lg:pt-24">
      <h2 className="mb-6 text-sm font-bold uppercase tracking-widest text-primary-light">
        Experience
      </h2>

      <div className="flex flex-col gap-2">
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} {...experience} />
        ))}
      </div>

      <a
        className="group mt-6 inline-flex items-center gap-2 px-4 font-medium text-slate-200 transition-colors hover:text-primary-light"
        aria-label="View full résumé"
        href={RESUME_LINK}
        target="_blank"
        rel="noopener noreferrer"
      >
        See my full résumé
        <AiOutlineArrowRight className="transition-transform group-hover:translate-x-1" />
      </a>
    </section>
  );
};

export default Experience;
