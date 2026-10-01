import { useEffect, useRef } from "react";
import { CloseIcon } from "./Icons";

// Details panel. Opens above the grid so the tiles never move: a centered card on desktop,
// a full-screen page on phones. Close with the pinned Close button, "Back to page", Esc,
// a click outside, or the phone's Back gesture.
const DetailSheet = ({ title, opener, onClose, children }) => {
  const cardRef = useRef(null);
  const closeRef = useRef(null);
  const pushed = useRef(false);

  useEffect(() => {
    const card = cardRef.current;
    card.scrollTop = 0;
    closeRef.current?.focus({ preventScroll: true });
    document.body.style.overflow = "hidden";

    // A history entry lets the phone's Back gesture close the panel instead of leaving the page.
    try {
      window.history.pushState({ sheet: true }, "");
      pushed.current = true;
    } catch (err) {
      pushed.current = false;
    }
    const onPop = () => {
      pushed.current = false;
      onClose();
    };
    const onKey = (e) => e.key === "Escape" && close();
    window.addEventListener("popstate", onPop);
    document.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("popstate", onPop);
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      opener?.focus({ preventScroll: true });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const close = () => {
    const hadEntry = pushed.current;
    pushed.current = false;
    onClose();
    if (hadEntry) {
      try {
        window.history.back();
      } catch (err) {
        /* history unavailable: the panel is already closed */
      }
    }
  };

  return (
    <div className="sheet" onClick={(e) => e.target === e.currentTarget && close()}>
      <div className="sheet-card" ref={cardRef} role="dialog" aria-modal="true" aria-labelledby="sheetBarTitle">
        <div className="sheet-bar">
          <span id="sheetBarTitle">{title}</span>
          <button className="sheet-close" type="button" ref={closeRef} onClick={close}>
            <CloseIcon />
            Close
          </button>
        </div>
        <div id="sheetBody">
          {children}
          <div className="sheet-done">
            <button type="button" onClick={close}>Back to page</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailSheet;
