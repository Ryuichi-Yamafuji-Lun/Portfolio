

const Research = () => {
  return (
    <div name="research" className="w-full font-lato">
      <div className="container mx-auto p-5">
        <div className="max-w-[1000px] px-4 md:pl-20 pr-4 md:pr-5 mt-20 md:mt-0">
          <p className="text-3xl text-line-white font-bold pb-5 text-center sm:text-6xl lg:text-left">Research</p>
          <p className="text-2xl">
          I am currently an undergraduate researcher at Keio University's Data Platform 
          and Algorithm Science department, where my primary focus is on 
          researching <a href="https://www.geeksforgeeks.org/two-phase-locking-protocol/" target="_blank" rel="noreferrer" className="text-line-white underline hover:font-bold">2-phase locking </a> 
          as a concurrency control mechanism, with a specific emphasis on
          starvation freedom and fairTID.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Research;