import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name='home' className='w-full h-screen font-lato bg-test-pattern pl-10'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className="text-black"> Hi, my name is</p>
        <p className='text-4xl text-line-white font-bold sm:text-7xl'>
          Ryuichi Yamafuji Lun
        </p>
        <p className='text-3xl text-line-white sm:text-7xl font-bold'>
          I'm a Software Engineer.
        </p>
        <div>
          <Link to="project">
            <button className='text-line-white group border-2 border-line-white px-6 py-3 my-2 flex items-center hover:bg-black'>
              View Work
            </button>
          </Link> 
        </div>
      </div>
    </div>
  );
};

export default Home;