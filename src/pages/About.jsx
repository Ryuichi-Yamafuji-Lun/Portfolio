
const About = () => {
  return (
    <div name="about" className="w-full font-lato">
      <div className="container mx-auto p-10 md:p-5">
        <div className="grid grid-cols-1 lg:grid-cols-2"> 
          <div className="md:col-span-2">
            <div className="max-w-4xl px-4 mt-20 md:mt-20 text-line-white"> 
              {/*<p className="text-3xl text-line-white font-bold pb-5 text-center sm:text-6xl lg:text-left">ABOUT ME</p>*/}
              <p className="text-2xl">
                Hi, I’m Ryuichi Lun, an AI-focused Computer Science Master's student at University of Southern California. My expertise lies at the intersection of AI/ML solutions and high-performance systems. I leveraged low-level systems knowledge to design a C++ concurrency lock that restored a database's throughput from 0 to over 500,000 transactions/sec. I now apply this systems rigor to building and scaling end-to-end AI applications, such as the full-stack melanoma screening tool, MediSkinAI, where I achieved 91% model accuracy and engineered a conversational AI agent. I am actively seeking challenging AI Engineer or Backend Engineer roles where I can build reliable, intelligent systems.
              </p>
              <div className="pt-4">
                <p className="pb-2">Technologies:</p>
                <div className="flex flex-wrap">
                  {["Python", "Java", "C/C++", "TypeScript", "React", "FastAPI", "Spring Boot", "PyTorch", "LangGraph", "PostgreSQL", "Docker", "AWS", "Google Cloud Run"].map(
                    (tech, index) => (
                      <span
                        key={index}
                        className="rounded-full bg-[#385feb] p-1 px-2 text-white mr-2 mb-2"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
