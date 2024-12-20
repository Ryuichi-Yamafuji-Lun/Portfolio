
const About = () => {
  return (
    <div name="about" className="w-full font-lato">
      <div className="container mx-auto p-10 md:p-5">
        <div className="grid grid-cols-1 lg:grid-cols-2"> 
          <div className="md:col-span-2">
            <div className="max-w-4xl px-4 mt-20 md:mt-20 text-line-white"> 
              {/*<p className="text-3xl text-line-white font-bold pb-5 text-center sm:text-6xl lg:text-left">ABOUT ME</p>*/}
              <p className="text-2xl">
              Hi, I’m Ryuichi Lun, a Master’s student at USC’s Viterbi School of Engineering, specializing in Artificial Intelligence.
              At Keio Research Institute, I contributed to groundbreaking research advancing the scalability and efficiency of database systems.
              Fueled by a passion for applying AI to real-world challenges, I embrace opportunities to collaborate with diverse teams to create technologies that empower and inspire.
              </p>
              <div className="pt-4">
                <p className="pb-2">Technologies:</p>
                <div className="flex flex-wrap">
                  {["Python", "C/C++", "Javascript", "React", "Flask", "FastAPI","PostgreSQL", "Docker", "AWS"].map(
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
