import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full font-lato">
      <div className="container mx-auto p-5">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {/* About Me */}
          <div className="md:col-span-2">
            <div className="max-w-[1000px] px-4 md:pl-10 pr-4 md:pr-5 mt-20 md:mt-20">
              <p className="text-3xl text-line-white font-bold pb-5 text-center sm:text-6xl lg:text-left">ABOUT ME</p>
              <p className="text-2xl">
                Hello, I'm Ryuichi Yamafuji Lun, a dedicated software engineer fueled by an 
                insatiable appetite for learning and a zest for embracing cutting-edge technologies.
                Currently, I'm engaged as an undergraduate researcher at the Data Platform Laboratory at Keio University.
              </p>
              <div className="pt-4">
                <p className="pb-2">Technologies:</p>
                <div className="flex flex-wrap">
                  {["Python", "C/C++", "Javascript", "HTML", "CSS", "React", "Tailwindcss"].map(
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
