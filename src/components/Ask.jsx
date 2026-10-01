import { useMemo, useState } from "react";
import Fuse from "fuse.js";
import { faq } from "../data/faq";
import { askChips, getEmail, LINKEDIN } from "../data/profile";
import { SearchIcon } from "./Icons";

const TITLES = {
  mirror: "MIRROR",
  rakuten: "Rakuten",
  mediskin: "MediSkinAI",
  fafnir: "FafnirDT",
  tetris: "Tetris benchmark",
  experience: "Experience timeline",
  education: "Education & awards",
};

// Filler words that would otherwise drag questions toward the wrong answer.
const STOP = new Set(
  "what whats is his he the a an does do did i me can of to ryu ryuichi him about tell how work know for old age favorite favourite".split(" ")
);
// Personal topics are never guessed at; they go straight to "ask Ryu".
const PRIVATE =
  /\b(married|wife|husband|girlfriend|boyfriend|dating|single|age|old|birthday|religion|religious|salary|pay|compensation|politic\w*|home address|ssn|kids|children)\b/i;

const words = (s) =>
  s.toLowerCase().replace(/[^a-z0-9+' ]/g, " ").split(/\s+/).filter((w) => w && !STOP.has(w));

const OPEN_ANSWER = {
  q: "Is he open to work?",
  item: faq[0],
  related: [],
};

const Ask = ({ onShow }) => {
  const [value, setValue] = useState("");
  const [answer, setAnswer] = useState(OPEN_ANSWER);
  const [copied, setCopied] = useState(false);

  const fuse = useMemo(() => {
    const rows = [];
    faq.forEach((item, i) => item.q.forEach((p) => rows.push({ p, i })));
    return new Fuse(rows, { keys: ["p"], includeScore: true, threshold: 0.42, ignoreLocation: true, minMatchCharLength: 2 });
  }, []);

  // Score the whole question, then each meaningful word, so short and long questions both match.
  const search = (q) => {
    const scores = {};
    [q, ...words(q)].forEach((probe, n) => {
      if (n > 0 && probe.length < 3) return;
      fuse.search(probe).slice(0, 6).forEach((r) => {
        if (n > 0 && r.score > 0.3) return;
        scores[r.item.i] = (scores[r.item.i] || 0) + (1 - r.score) * (n === 0 ? 2 : 1);
      });
    });
    return Object.entries(scores)
      .map(([i, s]) => ({ i: +i, s }))
      .sort((x, y) => y.s - x.s);
  };

  const ask = (raw) => {
    const q = raw.trim();
    if (!q) return;
    setCopied(false);
    const res = PRIVATE.test(q) ? [] : search(q);
    if (!res.length || res[0].s < 1.25) {
      setAnswer({
        q,
        item: { a: "Ryu hasn't written about that yet. Send him the question and he'll get back to you.", email: true, askOnLinkedIn: true },
        related: [0, 9, 3],
      });
      return;
    }
    const best = faq[res[0].i];
    const related = res.slice(1, 3).filter((r) => r.s > res[0].s * 0.5).map((r) => r.i);
    setAnswer({ q, item: best, related });
    (best.tiles || []).forEach((id) => onShow(id, { scroll: false }));
  };

  const copyText = (text, onDone) => {
    try {
      navigator.clipboard.writeText(text).then(onDone, () => {});
    } catch (err) {
      /* clipboard blocked: the address stays visible to copy by hand */
    }
  };

  const chipLabel = (i) => {
    const q = faq[i].q[0];
    return q.charAt(0).toUpperCase() + q.slice(1) + (q.endsWith("?") ? "" : "?");
  };

  const runChip = (text) => {
    setValue(text);
    ask(text);
  };

  const { q, item, related } = answer;
  return (
    <section className="ask" aria-label="Ask about Ryu">
      <form
        autoComplete="off"
        onSubmit={(e) => {
          e.preventDefault();
          ask(value);
        }}
      >
        <span className="ask-icon" aria-hidden="true">
          <SearchIcon />
        </span>
        <label htmlFor="askInput" className="sr-only">Ask about Ryu</label>
        <input id="askInput" type="text" placeholder="Ask anything about Ryu" value={value} onChange={(e) => setValue(e.target.value)} />
        <button className="go" type="submit">Ask</button>
      </form>

      <div className="chips">
        {askChips.map((c) => (
          <button className="chip" type="button" key={c} onClick={() => runChip(c)}>{c}</button>
        ))}
      </div>

      <div className="answer" aria-live="polite">
        <span className="q">{q}</span>
        <p>{item.a}</p>
        {item.email && (
          <div className="mail">
            <span>{getEmail()}</span>
            <button className="ref" type="button" onClick={() => copyText(getEmail(), () => setCopied(true))}>
              {copied ? "Copied ✓" : "Copy email"}
            </button>
          </div>
        )}
        <div className="refs">
          {item.askOnLinkedIn && (
            <a
              className="ref strong"
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => copyText(`Hi Ryu, I saw your portfolio and wanted to ask: ${q}`, () => {})}
            >
              Copy question &amp; open LinkedIn
            </a>
          )}
          {(item.tiles || []).map((id) => (
            <button className="ref" type="button" key={id} onClick={() => onShow(id, { scroll: true })}>
              Show {TITLES[id] || id}
            </button>
          ))}
          {(item.links || []).map(([label, href]) => (
            <a className="ref" key={label} href={href} target="_blank" rel="noopener noreferrer">{label}</a>
          ))}
        </div>
        {related.length > 0 && (
          <div className="also">
            <span>Related:</span>
            {related.map((i) => (
              <button className="chip" type="button" key={i} onClick={() => runChip(chipLabel(i))}>{chipLabel(i)}</button>
            ))}
          </div>
        )}
      </div>
      <p className="note">Answers come from Ryu's own write-ups. No AI model is involved, so nothing is made up.</p>
    </section>
  );
};

export default Ask;
