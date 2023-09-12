import { BiLogoPython, BiLogoJavascript, BiLogoHtml5, BiLogoCss3, BiLogoReact, BiLogoTailwindCss } from "react-icons/bi";

import C_Dark from "../assets/icons/programming/C-dark.png";
import Cpp_Dark from "../assets/icons/programming/C++-dark.png";

const About = () => {
  return (
    <div name="about" className="w-full font-lato">
      <div className="container mx-auto p-10 md:p-20">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {/* About Me */}
          <div className="md:col-span-2">
            <div className="max-w-[1000px] px-4 md:pl-20 pr-4 md:pr-5 mt-20 md:mt-0">
              <p className="text-3xl text-line-white font-bold pb-5 text-center sm:text-6xl lg:text-left"> About Me</p>
              <p className="text-2xl">
                Hello, I'm Ryuichi Yamafuji Lun, a dedicated software engineer fueled by an 
                insatiable appetite for learning and a zest for embracing cutting-edge technologies.
                Currently, I'm engaged as an undergraduate researcher at the Data Platform Laboratory at Keio University.
              </p>
            </div>
          </div>
          {/* Technologies */}
          <div className="max-w-prose px-4 md:pl-10 mt-10 md:mt-0">
            <div className="text-center">
              <p className="text-3xl text-line-white font-bold pb-5 sm:text-6xl">Technologies</p>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-10 md:mt-0 text-center">
              <div className="flex flex-col items-center">
                <BiLogoPython size={48} />
                <span>Python</span>
              </div>
              <div className="flex flex-col items-center">
                <img src={C_Dark} alt="C Programming Icon"/>
                <span>C</span>
              </div>
              <div className="flex flex-col items-center">
                <img src={Cpp_Dark} alt="C++ Programming Icon"/>
                <span>C++</span>
              </div>
              <div className="flex flex-col items-center">
                <BiLogoJavascript size={48} />
                <span>Javascript</span>
              </div>
              <div className="flex flex-col items-center">
                <BiLogoHtml5 size={48} />
                <span>HTML</span>
              </div>
              <div className="flex flex-col items-center">
                <BiLogoCss3 size={48} />
                <span>CSS</span>
              </div>
              <div className="flex flex-col items-center">
                <BiLogoReact size={48} />
                <span>React</span>
              </div>
              <div className="flex flex-col items-center">
                <BiLogoTailwindCss size={48} />
                <span>Tailwindcss</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
