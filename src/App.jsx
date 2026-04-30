// App.jsx
// Root component — composes all sections of the VNS homepage

import Header from "./components/Header";
import LoginPanel from "./components/LoginPanel";
import EmailPanel from "./components/EmailPanel";
import MainContent from "./components/MainContent";

import "./styles/global.css";

export default function App() {
  return (
    <>
      {/* ── Top section ─────────────────────── */}
      <Header />
      <div className="app-wrapper">
        {/* ── Two-column body ─────────────────── */}
        <div className="main-content-area">
          {/* Left sidebar: login + email signup */}
          <aside
            className="left-sidebar"
            style={{
              flex: "0 470px",

              minWidth: "400px",
              marginRight: "10px",
              marginBottom: "5px",
            }}
          >
            <LoginPanel />
            <EmailPanel />
          </aside>

          {/* Right column: informational content */}
          <MainContent />
        </div>
      </div>
    </>
  );
}
