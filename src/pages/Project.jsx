import MediSkinAI from "../assets/image/MediSkinAI/MediSkinAI.png";
import MaigoGame from "../assets/image/Maigo/MaigoInGame.png";
import ProjectCard from "../components/ProjectCard";
import TetrisAI from "../assets/image/TetrisLM/TetrisLM.png";
import DT from "../assets/image/FafnirDT/FafnirDT.png";
import MIRROR from "../assets/image/MIRROR/MIRROR.png"

const Project = () => {
  const projects = [
    {
      title: "MIRROR: Byzantine-Resilient LLM Multi-Agent Systems",
      imageSrc: MIRROR,
      technologies: [
        { logo: "LLMs" },
        { logo: "Multi-Agent" },
        { logo: "Research" },
      ],
      description: [
        "First-author publication currently under review for NeurIPS 2026 (Double Blind).",
        "Architected a cryptographic defense framework for LLM multi-agent systems, reducing the attack success rate to 0%.",
        "Completely bypassed the 35x API token overhead required by standard semantic defenses."
      ],
      websiteLink: "https://demo-nine-lemon-64.vercel.app/", 
      sourceCodeLink: "https://github.com/highphysicist/MIRROR-defense-for-aitm-mas", 
    },
    {
      title: "MediSkinAI: Melanoma Screening Agent",
      imageSrc: MediSkinAI,
      technologies: [
        { logo: "PyTorch" },
        { logo: "LangGraph" },
        { logo: "FastAPI" },
        { logo: "React" },
        { logo: "Google Cloud Run" },
      ],
      description: [
        "Fine-tuned ResNet50 on 33K+ images, achieving 91% test accuracy on melanoma detection.",
        "Engineered a LangGraph-based agent to orchestrate the CNN model with an LLM for conversational explanations and diagnosis.",
        "Optimized deployment from Render to Google Cloud Run (GCR), reducing hosting costs to $0 via free-tier optimization.",
      ],

      websiteLink: "https://mediskinai.vercel.app/",
      sourceCodeLink: "https://github.com/Ryuichi-Yamafuji-Lun/MediSkinAI",
    },
    {
      title: "Tetris AI Benchmarking Agent",
      imageSrc: TetrisAI, 
      technologies: [
        { logo: "Gemini API" },
        { logo: "Python" },
        { logo: "DQN" },
        { logo: "LangGraph" },
      ],
      description: [
        "Adapted LLM architecture for the first head-to-head benchmarking of Generative AI against Reinforcement Learning.",
        "Devised a Chain-of-Thought (CoT) reasoning module (Gemini API) which improved survival rates by 8.2%.",
        "Trained a Deep Q-Network (DQN) policy to establish a high-performance baseline (approx. 600 reward).",
      ],
      websiteLink: "https://github.com/Ryuichi-Yamafuji-Lun/Tetris-Benchmark/tree/main",
      sourceCodeLink: "https://github.com/Ryuichi-Yamafuji-Lun/Tetris-Benchmark/tree/main",
    },
    {
      title: "FafnirDT: Dynamic Timestamp in Concurrency Control",
      imageSrc: DT,
      technologies: [
        { logo: "C++" },
        { logo: "Database Systems" },
        { logo: "Research" },
      ],
      description: [
        "Proposed a novel elastic reader-writer lock architecture utilizing dynamic thread and timestamp injection to eliminate static allocation bottlenecks.",
        "Restored system throughput from 0 to 500,000+ transactions/sec in benchmarks.",
        "First-author technical paper accepted for presentation at the 163rd System Software & OS Symposium (2024).",
      ],
      websiteLink: "https://jglobal.jst.go.jp/en/detail?JGLOBAL_ID=202402231694286824", 
      sourceCodeLink: "https://github.com/Ryuichi-Yamafuji-Lun/FafnirDT",
    },
    {
      title: "Maigo (MMO GeoGuessr Clone)",
      imageSrc: MaigoGame,
      technologies: [
        { logo: "Firebase" },
        { logo: "TypeScript" },
        { logo: "Svelte" },
      ],
      description: [
        "A GeoGuessr clone for MMO developed collaboratively with a team of six.",
        "Showcases front-end development, real-time collaboration, and proficiency with modern web technologies (TypeScript, Svelte).",
      ],
      websiteLink: "https://maigo-bd6b7.web.app/",
      sourceCodeLink: "https://github.com/leochoo/maigo",
    },
  ];

  return (
    <div name="project" className="w-full font-lato">
      <div className="container mx-auto p-10 md:p-5 text-line-white">
        <div className="font-bold p-4">
          <p className="text-3xl text-center md:text-left md:text-6xl">PROJECTS</p>
        </div>
        <div className="grid grid-cols-1 gap-4">
          {projects.map((project, index) => (
            <div className="w-full md:w-[400px]" key={index}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;