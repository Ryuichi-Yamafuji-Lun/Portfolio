// Project content — edit here to update the Projects section.
import MediSkinAI from "../assets/image/MediSkinAI/MediSkinAI.png";
import MaigoGame from "../assets/image/Maigo/MaigoInGame.png";
import TetrisAI from "../assets/image/TetrisLM/TetrisLM.png";

export const projects = [
  {
    title: "MediSkinAI: Melanoma Screening Agent",
    imageSrc: MediSkinAI,
    technologies: ["PyTorch", "LangGraph", "FastAPI", "React", "Google Cloud Run"],
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
    technologies: ["Gemini API", "Python", "DQN", "LangGraph"],
    description: [
      "Adapted LLM architecture for the first head-to-head benchmarking of Generative AI against Reinforcement Learning.",
      "Devised a Chain-of-Thought (CoT) reasoning module (Gemini API) which improved survival rates by 8.2%.",
      "Trained a Deep Q-Network (DQN) policy to establish a high-performance baseline (approx. 600 reward).",
    ],
    websiteLink: "https://github.com/Ryuichi-Yamafuji-Lun/Tetris-Benchmark/tree/main",
    sourceCodeLink: "https://github.com/Ryuichi-Yamafuji-Lun/Tetris-Benchmark/tree/main",
  },
  {
    title: "Maigo (MMO GeoGuessr Clone)",
    imageSrc: MaigoGame,
    technologies: ["Firebase", "TypeScript", "Svelte"],
    description: [
      "A GeoGuessr clone for MMO developed collaboratively with a team of six.",
      "Showcases front-end development, real-time collaboration, and proficiency with modern web technologies (TypeScript, Svelte).",
    ],
    websiteLink: "https://maigo-bd6b7.web.app/",
    sourceCodeLink: "https://github.com/leochoo/maigo",
  },
];
