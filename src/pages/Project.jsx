import { BiLogoReact, BiLogoTailwindCss, BiLogoFlask, BiLogoFirebase, BiLogoTypescript, } from "react-icons/bi";
import mySQL_Dark from "../assets/icons/programming/mySQL-Dark.png";

const Project = () => {
  return (
    <div name="project" className="w-full font-lato">
      <div className="container mx-auto p-10 md:p-20">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {/* Project 1 */}
          <div className="max-w-[1000px] px-4 md:pl-20 pr-4 md:pr-5 mt-20 md:mt-0">
            <p className="text-2xl text-line-white font-bold md:text-3xl">PokéStore Management System</p>
            <div>
              Image
            </div>
            <div className="flex items-center space-x-2">
              <p className="text-line-white">Created with: </p>
              <img src={mySQL_Dark} alt="mySQL icon" />
              <BiLogoFlask size={35}/>
              <BiLogoReact size={35}/>
              <BiLogoTailwindCss size={35}/>
            </div>
            <p className="pb-2">
              A full-stack PokéMart themed management system with hidden easter eggs. 
              This management system uses mySQL a database containing information about 
              the products available in the store and the orders made. Flask is used as 
              an API in order to make changes to the database like: adding order, editing 
              product detail, delete product, etc. React was used as the Frontend user 
              interface
            </p>
          </div>
          {/* Project 2 */}
          <div className="max-w-[1000px] px-4 md:pl-20 pr-4 md:pr-5 mt-20 md:mt-0">
            <p className="text-2xl text-line-white font-bold md:text-3xl">Maigo</p>
            <div>
              Image
            </div>
            <div className="flex items-center space-x-2">
              <p className="text-line-white">Created with: </p>
              <BiLogoFirebase size={35}/>
              <BiLogoTypescript size={35}/>
            </div>
            <p className="pb-2">
              Maigo is a GeoGuessr clone for MMO made with a team of six. I specifically assisted
              in the authentication and other miscellaneous task. 
            </p>
          </div>
          {/* Project 3 */}
        </div>
      </div>
    </div>
  );
};

export default Project;