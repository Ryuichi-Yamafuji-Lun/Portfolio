import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaFileAlt, FaEnvelope } from "react-icons/fa";

// Flip to false to hide the "Open to full-time" badge when you're not job-hunting.
const OPEN_TO_WORK = true;

const MenuItems = [
  { label: "About", to: "about" },
  { label: "Experience", to: "experience" },
  { label: "Research", to: "research" },
  { label: "Projects", to: "project" },
];

const Socials = [
  {
    icon: FaGithub,
    label: "GitHub",
    href: "https://github.com/Ryuichi-Yamafuji-Lun",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ryulun/",
  },
  {
    icon: FaFileAlt,
    label: "Résumé",
    href: "https://docs.google.com/document/d/1LsHdHDT1QlYNuUpqcHDuX9iiHpufoeJY6G4o7vQz6IA/edit?usp=sharing",
  },
];

const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const Home = ({ onContactClick }) => {
  const [active, setActive] = useState("about");

  // Highlight the section currently in view (replaces react-scroll's spy).
  useEffect(() => {
    const sections = MenuItems.map((m) => document.getElementById(m.to)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      id="home"
      className="flex flex-col justify-between py-16 lg:sticky lg:top-0 lg:h-screen lg:w-[40%] lg:max-w-sm lg:py-28"
    >
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-100 sm:text-5xl">
          Ryuichi Y. Lun
        </h1>
        <h2 className="mt-3 text-lg font-medium text-primary-light sm:text-xl">
          Software Engineer
        </h2>
        <p className="mt-4 max-w-xs leading-relaxed text-slate-400">
          Building reliable, intelligent systems at the intersection of AI/ML
          and high-performance infrastructure.
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-2 text-xs font-medium text-slate-400">
          {OPEN_TO_WORK && (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-2.5 py-1 text-primary-light">
              <span className="h-1.5 w-1.5 rounded-full bg-green-400"></span>
              Open to full-time
            </span>
          )}
          <span className="rounded-full border border-navy-lighter/50 px-2.5 py-1">
            Graduating Dec 2026
          </span>
          <span className="rounded-full border border-navy-lighter/50 px-2.5 py-1">
            U.S. Permanent Resident
          </span>
        </div>

        {/* Desktop section nav */}
        <nav className="mt-16 hidden lg:block" aria-label="Section navigation">
          <ul className="space-y-4">
            {MenuItems.map((item) => (
              <li key={item.to}>
                <button
                  onClick={() => scrollToSection(item.to)}
                  className="group flex cursor-pointer items-center py-1"
                >
                  <span
                    className={`mr-4 h-px bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-100 ${
                      active === item.to ? "w-16 bg-slate-100" : "w-8"
                    }`}
                  />
                  <span
                    className={`text-xs font-semibold uppercase tracking-widest transition-colors group-hover:text-slate-100 ${
                      active === item.to ? "text-slate-100" : "text-slate-500"
                    }`}
                  >
                    {item.label}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Social links */}
      <ul className="mt-10 flex items-center gap-5 lg:mt-0">
        {Socials.map(({ icon: Icon, label, href }) => (
          <li key={label}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-slate-400 transition-colors hover:text-primary-light"
            >
              <Icon className="text-2xl" />
            </a>
          </li>
        ))}
        <li>
          <button
            onClick={onContactClick}
            aria-label="Contact me"
            className="text-slate-400 transition-colors hover:text-primary-light"
          >
            <FaEnvelope className="text-2xl" />
          </button>
        </li>
      </ul>
    </header>
  );
};

export default Home;
