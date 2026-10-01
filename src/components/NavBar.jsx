import { useState } from "react";
import { createPortal } from "react-dom";
import { TiHome } from "react-icons/ti";
import {
  FaUserCircle, FaGlasses, FaLaptopCode, FaFileAlt, FaFlask,
  FaBars, FaTimes, FaGithub, FaLinkedin,
} from "react-icons/fa";

const MobileMenuItems = [
  { label: "Home", icon: <TiHome />, to: "home" },
  { label: "About", icon: <FaUserCircle />, to: "about" },
  { label: "Experience", icon: <FaGlasses />, to: "experience" },
  { label: "Research", icon: <FaFlask />, to: "research" },
  { label: "Projects", icon: <FaLaptopCode />, to: "project" },
];

const ExternalLinks = [
  { label: "Résumé", icon: <FaFileAlt />, href: "https://docs.google.com/document/d/1LsHdHDT1QlYNuUpqcHDuX9iiHpufoeJY6G4o7vQz6IA/edit?usp=sharing" },
  { label: "Github", icon: <FaGithub />, href: "https://github.com/Ryuichi-Yamafuji-Lun" },
  { label: "Linkedin", icon: <FaLinkedin />, href: "https://www.linkedin.com/in/ryulun/" },
];

const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  const go = (id) => {
    close();
    // let the overlay unmount before scrolling
    requestAnimationFrame(() => scrollToSection(id));
  };

  return (
    <nav className="flex h-16 w-full items-center justify-between border-b border-white/5 bg-navy/90 px-6 text-slate-200 backdrop-blur lg:hidden">
      <button
        onClick={() => go("home")}
        className="cursor-pointer font-bold tracking-tight text-slate-100"
      >
        Ryuichi Y. Lun
      </button>

      <button onClick={() => setOpen(true)} aria-label="Open menu">
        <FaBars className="text-2xl" />
      </button>

      {open && createPortal(
        <div className="fixed inset-0 z-[60] flex flex-col items-center justify-center gap-8 bg-navy/95 backdrop-blur">
          <button
            onClick={close}
            aria-label="Close menu"
            className="absolute right-6 top-6 text-slate-200"
          >
            <FaTimes className="text-2xl" />
          </button>

          <ul className="flex flex-col items-center gap-6">
            {MobileMenuItems.map((item) => (
              <li key={item.to}>
                <button
                  onClick={() => go(item.to)}
                  className="flex cursor-pointer flex-col items-center gap-1 text-lg text-slate-200 transition-colors hover:text-primary-light"
                >
                  <span className="text-2xl">{item.icon}</span>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-4 flex items-center gap-8">
            {ExternalLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                onClick={close}
                className="text-2xl text-slate-300 transition-colors hover:text-primary-light"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>,
        document.body
      )}
    </nav>
  );
};

export default NavBar;
