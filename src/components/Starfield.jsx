import { useEffect, useRef } from "react";

// Full-screen starfield behind the page: mostly white stars with a few purple and ice-blue ones,
// twinkling slowly. Star count scales with screen area; twinkling stops for reduced motion.
const Starfield = () => {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let stars = [];
    let frame = 0;
    let raf;

    const draw = (t) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const s of stars) {
        const tw = still ? 1 : 0.65 + 0.35 * Math.sin(s.p + t * s.s);
        ctx.fillStyle = `rgba(${s.col},${(s.a * tw).toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const size = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      const n = Math.round((window.innerWidth * window.innerHeight) / 3800);
      stars = Array.from({ length: n }, () => {
        const ice = Math.random() < 0.08;
        const purple = !ice && Math.random() < 0.14;
        return {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: (Math.random() * 1.1 + 0.25) * dpr,
          a: Math.random() * 0.6 + 0.25,
          p: Math.random() * Math.PI * 2,
          s: Math.random() * 0.012 + 0.003,
          col: ice ? "159,216,255" : purple ? "190,160,255" : "236,232,246",
        };
      });
      draw(frame);
    };

    const loop = () => {
      frame += 1;
      draw(frame);
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("resize", size);
    size();
    if (!still) raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("resize", size);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas id="stars" ref={ref} aria-hidden="true" />;
};

export default Starfield;
