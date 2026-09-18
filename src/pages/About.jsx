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
          I&rsquo;m Ryuichi Lun, a Computer Science Master&rsquo;s student at the
          University of Southern California, graduating December 2026. I work on
          AI agent infrastructure and the systems underneath it. Most recently I
          interned on Rakuten Group&rsquo;s AI for Business Center of Excellence,
          where I built an Azure-hosted LLM cost-monitoring pipeline and a
          human-in-the-loop reporting bot on the Claude Agent SDK.
        </p>
        <p>
          Before that I spent two years in a database research lab at Keio,
          where I diagnosed a multicore contention failure and designed a C++
          reader-writer lock that restored throughput from 0 to over{" "}
          <span className="font-medium text-slate-200">
            500,000 transactions/sec
          </span>
          . That systems background shapes how I build AI products; MediSkinAI,
          a melanoma screening tool I shipped on Google Cloud Run, pairs a
          ResNet50 trained on{" "}
          <span className="font-medium text-slate-200">33K dermoscopy images</span>{" "}
          with a LangGraph agent that explains each result in plain language.
        </p>
        <p>
          I&rsquo;m looking for full-time AI Engineer or Backend Engineer roles
          where I can build agent platforms, developer tooling, and the pipelines
          behind them.
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
