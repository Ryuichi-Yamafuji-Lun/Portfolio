import { useEffect, useRef, useState } from "react";

// Orbit cursor: an ice-blue core that tracks the mouse exactly, and a purple ring that trails
// behind with a small moon orbiting it. The ring opens over anything clickable.
// Mouse only: touch screens and reduced-motion users keep the normal pointer.
const OrbitCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setEnabled(true);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const root = document.documentElement;
    root.classList.add("orbit-cursor");
    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let raf;

    const clickable = (t) =>
      t && t.closest && t.closest('a, button, [role="button"], input, textarea, label, .stat');
    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      if (dotRef.current) dotRef.current.style.transform = `translate3d(${mx}px,${my}px,0) translate(-50%,-50%)`;
      root.classList.add("c-in");
    };
    const onLeave = () => root.classList.remove("c-in");
    const onOver = (e) => ringRef.current?.classList.toggle("hot", !!clickable(e.target));
    const onDown = () => ringRef.current?.classList.add("down");
    const onUp = () => ringRef.current?.classList.remove("down");
    const loop = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      if (ringRef.current) ringRef.current.style.transform = `translate3d(${rx}px,${ry}px,0) translate(-50%,-50%)`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseover", onOver);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    raf = requestAnimationFrame(loop);
    return () => {
      root.classList.remove("orbit-cursor", "c-in");
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseover", onOver);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      cancelAnimationFrame(raf);
    };
  }, [enabled]);

  if (!enabled) return null;
  return (
    <>
      <div ref={dotRef} className="c-dot" aria-hidden="true" />
      <div ref={ringRef} className="c-ring" aria-hidden="true">
        <span className="shell" />
        <span className="orbit">
          <span className="moon" />
        </span>
      </div>
    </>
  );
};

export default OrbitCursor;
