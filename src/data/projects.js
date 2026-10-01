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
      "Fine-tuned ResNet50 on 33,126 ISIC 2020 dermoscopy images with a 56:1 benign-to-malignant class imbalance.",
      "Built a LangGraph agent that routes the CNN prediction through a Gemini reasoning node for plain-language explanations and next steps; 27+ early users.",
      "Migrated the FastAPI backend from Render to Google Cloud Run, cutting hosting cost to $0 on the free tier; uploads are deleted after inference.",
    ],
    websiteLink: "https://mediskinai.vercel.app/",
    sourceCodeLink: "https://github.com/Ryuichi-Yamafuji-Lun/MediSkinAI",
  },
  {
    title: "Tetris AI Benchmarking Agent",
    imageSrc: TetrisAI,
    technologies: ["Gemini API", "Python", "DQN", "LangGraph"],
    description: [
      "Built a custom Gymnasium interface that lets text-based foundation models (Gemini, GPT) play Tetris, benchmarking them head-to-head against a reinforcement learning agent.",
      "Devised a Chain-of-Thought (CoT) reasoning module (Gemini API) which improved survival rates by 8.2%.",
      "Trained a Deep Q-Network (DQN) policy to establish a high-performance baseline (approx. 600 reward).",
    ],
    sourceCodeLink: "https://github.com/Ryuichi-Yamafuji-Lun/Tetris-Benchmark",
  },
  {
    title: "Maigo (MMO GeoGuessr Clone)",
    imageSrc: MaigoGame,
    technologies: ["Firebase", "TypeScript", "Svelte"],
    description: [
      "A GeoGuessr clone for MMO developed collaboratively with a team of six.",
      "Contributed to user authentication for multiplayer game rooms using SvelteKit, TypeScript, and Firebase.",
    ],
    websiteLink: "https://maigo-bd6b7.web.app/",
    sourceCodeLink: "https://github.com/leochoo/maigo",
  },
];
