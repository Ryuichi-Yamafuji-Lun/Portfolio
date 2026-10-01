// Grid tiles. Each tile renders compact in the grid, or with every detail inside the details panel (full).
const tileProps = (id, span, full, flash, extra = "") =>
  full
    ? { className: `tile ${extra}`.trim() }
    : { id, className: `tile ${extra} ${flash === id ? "flash" : ""}`.trim(), style: { "--span": span } };

const Tags = ({ items }) => (
  <div className="tags">
    {items.map((t) => (
      <span className="tag" key={t}>{t}</span>
    ))}
  </div>
);

const DetailsButton = ({ onClick, label = "Details" }) => (
  <button className="more" type="button" aria-haspopup="dialog" onClick={onClick}>
    {label}
  </button>
);

export const ProjectTile = ({ p, full, flash, onDetails }) => (
  <article {...tileProps(p.id, p.span, full, flash)}>
    <img className="shot" src={p.image} alt={p.alt} loading="lazy" />
    {p.badge && <span className="badge">{p.badge}</span>}
    <div className="head">
      <div>
        <h3>{p.title}</h3>
        <p className="sub">{p.sub}</p>
      </div>
      {!full && <DetailsButton onClick={(e) => onDetails(p.id, e.currentTarget)} />}
    </div>
    {p.lead && <p className="lead">{p.lead}</p>}
    {full && (
      <div className="detail">
        <ul>
          {p.details.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>
      </div>
    )}
    <div className="tile-links">
      {p.links.map(([label, href]) => (
        <a key={href} href={href} target="_blank" rel="noopener noreferrer">
          {label} ↗
        </a>
      ))}
    </div>
    <Tags items={p.tags} />
  </article>
);

// The most recent role, shown in full on the grid because it's the strongest experience.
export const FeaturedRoleTile = ({ role, flash }) => (
  <article id="rakuten" className={`tile ${flash === "rakuten" ? "flash" : ""}`} style={{ "--span": 5 }}>
    <p className="eyebrow">Experience · {role.when}</p>
    <div>
      <h3>AI Engineer Intern, Rakuten</h3>
      <p className="sub">Red Queen Team, AI for Business CoE · Tokyo</p>
    </div>
    <ul className="bullets">
      {role.bullets.map((b) => (
        <li key={b}>{b}</li>
      ))}
    </ul>
    <Tags items={role.tags} />
  </article>
);

export const ExperienceTile = ({ roles, stack, full, flash, onDetails }) => (
  <article {...tileProps("experience", 7, full, flash, "wide")}>
    <div className="head">
      <div>
        <p className="eyebrow">{roles.length} roles · 2022 – 2026</p>
        <h3>Experience</h3>
      </div>
      {!full && <DetailsButton label="All details" onClick={(e) => onDetails("experience", e.currentTarget)} />}
    </div>
    <ol className="timeline">
      {roles.map((r, i) => (
        <li key={r.title} className={i === 0 ? "now" : undefined}>
          <div className="t-top">
            <b>{r.title}</b>
            <span className="when">{r.when}</span>
          </div>
          <span className="org">{r.org}</span>
          <p className="hl">{r.highlight}</p>
          {full && (
            <ul className="detail">
              {r.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ol>
    {!full && stack && (
      <>
        <p className="eyebrow stack-label">Stack</p>
        <Tags items={stack} />
      </>
    )}
  </article>
);

export const EducationTile = ({ education, coursework, beyond, awards, flash }) => (
  <article id="education" className={`tile wide ${flash === "education" ? "flash" : ""}`} style={{ "--span": 5 }}>
    <p className="eyebrow">Education</p>
    <div className="edu">
      {education.map((e) => (
        <div key={e.degree}>
          <b>{e.degree}</b>
          <span>{e.where}</span>
        </div>
      ))}
    </div>
    <p className="eyebrow section">Graduate coursework</p>
    <Tags items={coursework} />
    <p className="eyebrow section">Beyond the classroom</p>
    <ul className="plain">
      {beyond.map((b) => (
        <li key={b}>{b}</li>
      ))}
    </ul>
    <p className="eyebrow section">Awards</p>
    <div className="edu">
      {awards.map((a) => (
        <div key={a.name}>
          <b className="award">{a.name}</b>
          <span>{a.detail}</span>
        </div>
      ))}
    </div>
  </article>
);
