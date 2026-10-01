// Who Ryu is and how to reach him. Edit here to change the hero card, stats, education, or links.
export const RESUME =
  "https://docs.google.com/document/d/1LsHdHDT1QlYNuUpqcHDuX9iiHpufoeJY6G4o7vQz6IA/edit?usp=sharing";
export const LINKEDIN = "https://www.linkedin.com/in/ryulun/";
export const GITHUB = "https://github.com/Ryuichi-Yamafuji-Lun";
export const SCHOLAR = "https://scholar.google.com/citations?user=oITHaT0AAAAJ&hl=en";

// Assembled at runtime so the address never sits in the bundle as one plain string.
export const getEmail = () => ["ryuichi.y.lun", "gmail.com"].join("@");

export const profile = {
  name: "Ryuichi Y. Lun",
  role: "Software Engineer · AI agents & backend",
  pitch: "I build AI agent systems and the backend infrastructure that keeps them fast and reliable.",
  facts: [
    { label: "Open to full-time", available: true },
    { label: "Graduating Dec 2026" },
    { label: "U.S. Permanent Resident" },
  ],
  footer: "Ryuichi (Ryu) Lun · São Paulo → Honolulu → Tokyo → Los Angeles",
};

// Big-number tiles; "target" is the tile they scroll to.
export const stats = [
  { source: "FafnirDT", value: "500,000+", label: "transactions/sec restored from 0 under multicore contention", target: "fafnir" },
  { source: "Rakuten", value: "10,000+", label: "employee tenant metered for LLM spend", target: "rakuten" },
  { source: "Rakuten", value: "100%", label: "of pull requests get AI code review", target: "rakuten" },
  { source: "MediSkinAI", value: "33,126", label: "dermoscopy images, 56:1 class imbalance", target: "mediskin" },
];

export const education = [
  { degree: "M.S. Computer Science", where: "University of Southern California · Dec 2026" },
  { degree: "B.A. Environment & Information Studies", where: "Keio University · Sep 2024" },
];

// Graduate courses that go beyond a standard CS core.
export const coursework = [
  "Adversarial & Trustworthy Foundation Models",
  "Deep Learning",
  "Machine Learning",
  "Applied NLP",
  "Analysis of Algorithms",
];

// Learning done outside required coursework.
export const beyond = [
  "Mathematics for Machine Learning · Imperial College London",
  "AWS Certified Cloud Practitioner",
];

export const awards = [
  { name: "Outstanding Graduation Project Award", detail: "Keio University · 2024 · one of 12 recipients" },
  { name: "1999 Mita-kai Scholarship", detail: "Keio University · 2024 · merit-based" },
];

export const stack = [
  "Python", "Java", "C/C++", "TypeScript", "React", "FastAPI", "Spring Boot",
  "PyTorch", "LangGraph", "PostgreSQL", "Docker", "AWS", "Cloud Run",
];

export const askChips = [
  "Is he open to work?",
  "How do I contact Ryu?",
  "Most memorable projects",
  "Why AI and backend?",
  "Research",
  "Where is he from?",
  "What is his email?",
];
