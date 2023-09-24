import Headroom from "react-headroom";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import OtherProjects from "./pages/OtherProjects";
import Research from "./pages/Research";
import Contact from "./pages/Contact";
import SideBar from "./components/SideBar";


function App() {
  return (
    <div>
      <Headroom>
        <NavBar />
      </Headroom>
      <Home />
      <About />
      <Project />
      <OtherProjects />
      <Research />
      <Contact />
    </div>
  );
};

export default App;
