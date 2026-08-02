import { useMemo } from "react";

// Subtle night-sky backdrop: a sparse static starfield + soft nebula glows.
// Flip to false to remove the space theme entirely.
export const SPACE_BACKGROUND = true;

// Build a box-shadow string of randomly-placed stars (one DOM node, many stars).
const makeStars = (count, spread, maxOpacity) => {
  const shadows = [];
  for (let i = 0; i < count; i++) {
    const x = Math.round(Math.random() * spread);
    const y = Math.round(Math.random() * spread);
    const o = (0.2 + Math.random() * (maxOpacity - 0.2)).toFixed(2);
    shadows.push(`${x}px ${y}px rgba(226,232,245,${o})`);
  }
  return shadows.join(", ");
};

const SpaceBackground = () => {
  // Generated once per load; spread wide enough to cover large screens.
  const smallStars = useMemo(() => makeStars(160, 2600, 0.55), []);
  const bigStars = useMemo(() => makeStars(50, 2600, 0.8), []);

  if (!SPACE_BACKGROUND) return null;

  return (
    <div className="space-bg" aria-hidden="true">
      <div className="space-stars space-stars--sm" style={{ boxShadow: smallStars }} />
      <div className="space-stars space-stars--lg" style={{ boxShadow: bigStars }} />
    </div>
  );
};

export default SpaceBackground;
