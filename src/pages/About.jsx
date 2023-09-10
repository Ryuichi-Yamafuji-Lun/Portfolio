const About = () => {
  return (
    <div name="about" className="w-full font-lato">
      <div className="container mx-auto p-10 md:p-20">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {/* About Me */}
          <div className="md:col-span-2">
            <div className="max-w-[1000px] px-4 md:pl-20 pr-4 md:pr-5 mt-20 md:mt-0">
              <p className="text-3xl text-line-white font-bold pb-5 sm:text-6xl"> About Me</p>
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
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>Python</div>
              <div>C</div>
              <div>C++</div>
              <div>JS</div>
              <div>HTML</div>
              <div>CSS</div>
              <div>React</div>
              <div>Tailwindcss</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
