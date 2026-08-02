import Headroom from "react-headroom";
import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import CustomCursor from "./components/CustomCursor";
import SpaceBackground from "./components/SpaceBackground";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Experience from "./pages/Experience";
import Publications from "./pages/Publications";
import Contact from "./pages/Contact";

function App() {
  // Two-column layout kicks in at lg (1024px); below that we show the mobile nav.
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  return (
    <div className="min-h-screen">
      <SpaceBackground />
      <CustomCursor />
      {isMobile && (
        <Headroom>
          <NavBar onContactClick={openContact} />
        </Headroom>
      )}

      <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:flex lg:justify-between lg:gap-12 lg:px-12">
        <Home onContactClick={openContact} />
        <main className="lg:w-[56%] lg:py-28">
          <About />
          <Experience />
          <Publications />
          <Project />
        </main>
      </div>

      {isContactOpen && <Contact closeContactForm={closeContact} />}
    </div>
  );
}

export default App;
