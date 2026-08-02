import PublicationCard from "../components/PublicationCard";
import { publications } from "../data/publications";

const Publications = () => {
  return (
    <section id="research" className="scroll-mt-24 pt-16 lg:pt-24">
      <h2 className="mb-6 text-sm font-bold uppercase tracking-widest text-primary-light">
        Research &amp; Publications
      </h2>

      <div className="flex flex-col gap-2">
        {publications.map((publication, index) => (
          <PublicationCard key={index} {...publication} />
        ))}
      </div>
    </section>
  );
};

export default Publications;
