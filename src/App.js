
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Research from "./pages/Research";
import Contact from "./pages/Contact";
import SideBar from "./components/SideBar";


function App() {
  return (
    <div>
      <NavBar />
      <SideBar />
      <Home />
      <About />
      <Project />
      <Research />
      <Contact />
    </div>
  );
};

export default App;
