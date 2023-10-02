import { Link } from "react-scroll";

const MenuItems = [
  { label: "About Me", to: "about" },
  { label: "Research", to: "research" },
  { label: "Projects", to: "project" },
];

const Home = () => {
  return (
    <div name="home" className="w-full h-screen font-lato">
      <div className="max-w-[1000px] mx-auto p-8 flex flex-col h-full justify-center">
        <p className="text-4xl text-line-white font-bold sm:text-5xl sm:text-left">
          Ryuichi Yamafuji Lun,
        </p>
        <p className="text-3xl text-line-white sm:text-4xl font-bold sm:text-left">
          Software Engineer.
        </p>
        <ul className="flex flex-col p-10">
          {MenuItems.map((item, index) => (
            <li key={index} className="menu-item group">
              <Link to={item.to}>
                <div className="flex items-center hover:font-bold">
                  <span className="nav-indicator mr-4 h-px w-8 bg-black transition-all group-hover:w-16 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                  <p className="transition-transform transform hover:scale-110 hover:translate-x-1">
                    {item.label}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
