import { useState } from "react";
import "../styles/components.css";

export default function Accordion({ title, defaultOpen = false, children }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className={`accordion${open ? " accordion--open" : ""}`}>
      <button
        className="accordion__header"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span>{title}</span>
      </button>

      {/* ✅ Always in DOM — CSS handles show/hide via grid trick */}
      <div className="accordion__body">
        <div className="accordion__body-inner">{children}</div>
      </div>
    </div>
  );
}
