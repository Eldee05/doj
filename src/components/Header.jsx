// components/Header.jsx
// Top bar and main header with DOJ Seal and title

import DOJSeal from "./DOJSeal";
import "../styles/components.css";

export default function Header() {
  return (
    <>
      {/* Top blue banner */}
      <div className="top-bar">
        <span>United States Department of Justice</span>
        <span>Victim Notification System</span>
      </div>

      {/* Logo + Title */}
      <div className="main-header">
        <a href="/" aria-label="Go to VNS Home">
          <DOJSeal />
        </a>
        <div>
          <div className="main-header__title">Victim Notification System</div>
          <div className="main-header__subtitle">United States Department of Justice</div>
        </div>
      </div>
    </>
  );
}
