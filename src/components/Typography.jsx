// components/Typography.jsx
// Reusable heading components used across the main content

import "../styles/components.css";

export function SectionHeading({ children }) {
  return <div className="section-heading">{children}</div>;
}

export function SubHeading({ children }) {
  return <div className="sub-heading">{children}</div>;
}
