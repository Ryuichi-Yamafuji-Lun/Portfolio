import Tag from "../components/Tag";

const technologies = [
  "Python", "Java", "C/C++", "TypeScript", "React", "FastAPI",
  "Spring Boot", "PyTorch", "LangGraph", "PostgreSQL", "Docker",
  "AWS", "Google Cloud Run",
];

const About = () => {
  return (
    <section id="about" name="about" className="scroll-mt-24 pt-12 lg:pt-0">
      <h2 className="mb-6 text-sm font-bold uppercase tracking-widest text-primary-light">
        About
      </h2>

      <div className="space-y-4 leading-relaxed text-slate-400">
        <p>
          Hi, I&rsquo;m Ryuichi Lun, an AI-focused Computer Science Master&rsquo;s
          student at the University of Southern California and currently an AI
          Engineer Intern at Rakuten Group&rsquo;s AI Center of Excellence. My
          expertise lies at the intersection of AI/ML solutions and
          high-performance systems.
        </p>
        <p>
          I leveraged low-level systems knowledge to design a C++ concurrency
          lock that restored a database&rsquo;s throughput from 0 to over{" "}
          <span className="font-medium text-slate-200">
            500,000 transactions/sec
          </span>
          . I now apply this systems rigor to building and scaling end-to-end AI
          applications &mdash; such as the full-stack melanoma screening tool
          MediSkinAI, where I achieved{" "}
          <span className="font-medium text-slate-200">91% model accuracy</span>{" "}
          and engineered a conversational AI agent.
        </p>
        <p>
          I&rsquo;m actively seeking challenging AI Engineer or Backend Engineer
          roles where I can build reliable, intelligent systems.
        </p>
      </div>

      <div className="mt-8">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-500">
          Technologies
        </p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
