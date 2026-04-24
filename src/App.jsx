// App.jsx
// Root component — composes all sections of the VNS homepage

import Header      from "./components/Header";
import Navbar      from "./components/Navbar";
import LoginPanel  from "./components/LoginPanel";
import EmailPanel  from "./components/EmailPanel";
import MainContent from "./components/MainContent";
import PageFooter  from "./components/PageFooter";

import "./styles/global.css";

export default function App() {
  return (
    <div className="app-wrapper">
      {/* ── Top section ─────────────────────── */}
      <Header />
      <Navbar />

      {/* ── Two-column body ─────────────────── */}
      <div className="main-content-area">

        {/* Left sidebar: login + email signup */}
        <aside
          className="left-sidebar"
          style={{ flex: "0 0 220px", minWidth: "200px", marginRight: "20px", marginBottom: "16px" }}
        >
          <LoginPanel />
          <EmailPanel />
        </aside>

        {/* Right column: informational content */}
        <MainContent />
      </div>

      {/* ── Footer ──────────────────────────── */}
      <PageFooter />
    </div>
  );
}
