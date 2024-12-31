import MediSkinAI from "../assets/image/MediSkinAI/MediSkinAI.png";
import MaigoGame from "../assets/image/Maigo/MaigoInGame.png";
import NYHomePage from "../assets/image/NYHouse/LRAI_NY_Housing_Forecast.png"
import ProjectCard from "../components/ProjectCard";

const Project = () => {
  const projects = [
    {
      title: "MediSkinAI",
      imageSrc: MediSkinAI,
      technologies: [
        { logo: "FastAPI" },
        { logo: "React" },
        { logo: "Tailwindcss" },
        { logo: "Pytorch" },
      ],
      description: `
      Built a full-stack web app using PyTorch and a CNN (ResNet50) trained from scratch to analyze skin lesion images. Provides diagnoses, confidence scores, and recommendations. Developed with FastAPI for the backend and React for a seamless, privacy-focused interface.
      `,

      websiteLink: "https://mediskinai.vercel.app/",
      sourceCodeLink: "https://github.com/Ryuichi-Yamafuji-Lun/MediSkinAI",
    },
    {
      title: "Linear Regression AI model for NY House Value Forecast",
      imageSrc: NYHomePage,
      technologies: [
        { logo: "FastAPI" },
        { logo: "React" },
        { logo: "Tailwindcss" },
        { logo: "Scikit-learn" },
      ],
      description: `
      A full-stack web app featuring a custom AI model built with Kaggle data to predict NYC house prices. Integrates FastAPI for backend processing and React with TailwindCSS for a responsive user experience.
      `,
      websiteLink: "https://new-york-housing-price-prediction.vercel.app/",
      sourceCodeLink: "https://github.com/Ryuichi-Yamafuji-Lun/New-York-Housing-Price-Prediction",
    },
    {
      title: "Maigo",
      imageSrc: MaigoGame,
      technologies: [
        { logo: "Firebase" },
        { logo: "TypeScript" },
      ],
      description: `
      Maigo is a GeoGuessr clone for MMO made with a team of six.`,
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
