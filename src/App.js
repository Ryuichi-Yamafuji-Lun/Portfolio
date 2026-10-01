import { useCallback, useRef, useState } from "react";
import Starfield from "./components/Starfield";
import OrbitCursor from "./components/OrbitCursor";
import Ask from "./components/Ask";
import DetailSheet from "./components/DetailSheet";
import { ProjectTile, FeaturedRoleTile, ExperienceTile, EducationTile } from "./components/Tiles";
import { GitHubIcon, LinkedInIcon, ResumeIcon, ScholarIcon } from "./components/Icons";
import { profile, stats, education, coursework, beyond, awards, stack, RESUME, LINKEDIN, GITHUB, SCHOLAR } from "./data/profile";
import { projects, roles } from "./data/work";

// Single-page bento layout: glass hero + stats, the Ask bar, then project, experience and education tiles.
// Details open in a panel above the grid (DetailSheet), so tiles never reflow.
function App() {
  const [flash, setFlash] = useState(null);
  const [sheet, setSheet] = useState(null); // { id, opener }
  const flashTimer = useRef(null);

  const show = useCallback((id, { scroll = true } = {}) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (scroll) {
      const smooth = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      el.scrollIntoView({ behavior: smooth ? "smooth" : "auto", block: "start" });
    }
    // Clear first so a repeat click on the same tile restarts the glow.
    clearTimeout(flashTimer.current);
    setFlash(null);
    flashTimer.current = setTimeout(() => {
      setFlash(id);
      flashTimer.current = setTimeout(() => setFlash(null), 1800);
    }, 30);
  }, []);

  const openDetails = (id, opener) => setSheet({ id, opener });
  const byId = Object.fromEntries(projects.map((p) => [p.id, p]));
  const [mirror, ...rest] = projects;

  const sheetContent = () => {
    if (!sheet) return null;
    if (sheet.id === "experience") return { title: "Experience", body: <ExperienceTile roles={roles} full /> };
    const p = byId[sheet.id];
    return { title: p.title, body: <ProjectTile p={p} full /> };
  };
  const content = sheetContent();

  return (
    <>
      <Starfield />
      <OrbitCursor />

      <div className="wrap">
        <main className="grid">
          <div className="hero-wrap">
            <section className="hero" id="hero" aria-label="Introduction">
              <div>
                <p className="role">{profile.role}</p>
                <h1>{profile.name}</h1>
                <p className="pitch">{profile.pitch}</p>
              </div>
              <div className="facts" aria-label="Availability">
                {profile.facts.map((f) => (
                  <span key={f.label} className={`fact ${f.available ? "available" : ""}`}>
                    {f.available && <span className="dot" aria-hidden="true" />}
                    {f.label}
                  </span>
                ))}
              </div>
              <div className="links">
                <a className="btn primary" href={RESUME} target="_blank" rel="noopener noreferrer">
                  <ResumeIcon /> Résumé
                </a>
                <a className="btn" href={LINKEDIN} target="_blank" rel="noopener noreferrer">
                  <LinkedInIcon /> LinkedIn
                </a>
                <a className="btn" href={GITHUB} target="_blank" rel="noopener noreferrer">
                  <GitHubIcon /> GitHub
                </a>
                <a className="btn" href={SCHOLAR} target="_blank" rel="noopener noreferrer">
                  <ScholarIcon /> Scholar
                </a>
              </div>
            </section>
          </div>

          <div className="stats" aria-label="Highlights">
            {stats.map((s) => (
              <button className="stat" type="button" key={s.value} onClick={() => show(s.target)}>
                <small>{s.source}</small>
                <b>{s.value}</b>
                <span>{s.label}</span>
              </button>
            ))}
          </div>

          <Ask onShow={show} />

          <ProjectTile p={mirror} flash={flash} onDetails={openDetails} />
          <FeaturedRoleTile role={roles[0]} flash={flash} />
          {rest.map((p) => (
            <ProjectTile key={p.id} p={p} flash={flash} onDetails={openDetails} />
          ))}
          <ExperienceTile roles={roles} stack={stack} flash={flash} onDetails={openDetails} />
          <EducationTile education={education} coursework={coursework} beyond={beyond} awards={awards} flash={flash} />
        </main>
        <footer>
          <span>{profile.footer}</span>
          <span>© {new Date().getFullYear()} Ryuichi Lun</span>
        </footer>
      </div>

      {content && (
        <DetailSheet title={content.title} opener={sheet.opener} onClose={() => setSheet(null)}>
          {content.body}
        </DetailSheet>
      )}
    </>
  );
}

export default App;
