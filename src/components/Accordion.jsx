import { useState } from "react";
import "../styles/components.css";

export default function Accordion({ title, defaultOpen = false, children }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="accordion">
      <button
        className={`accordion__header${open ? " accordion__header--open" : ""}`}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span>{title}</span>
      </button>

      {open && <div className="accordion__body">{children}</div>}
    </div>
  );
}
