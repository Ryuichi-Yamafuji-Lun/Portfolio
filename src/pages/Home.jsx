

const Home = () => {
  return (
    <div name='home' className='w-full h-screen font-lato bg-test-pattern'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className="text-[#808080]">Hi, my name is</p>
        <h1 className='text-4xl text-line-white sm:text-7xl font-bold'>
          Ryuichi Yamafuji Lun
        </h1>
        <h2 className='text-3xl text-line-white sm:text-7xl font-bold'>
          I'm a Software Engineer.
        </h2>
        <p className='py-4 max-w-[700px] text-black'>
          I'm a software engineer with a passion for learning new technologies. 
          Currently an undergraduate researcher at the Data Platform Laboratory at Keio University.
        </p>
        <div>
          <button className='text-line-white group border-2 border-line-white px-6 py-3 my-2 flex items-center hover:bg-black'>
            View Work
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;