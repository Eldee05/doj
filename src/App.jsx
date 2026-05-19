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
          <aside
            className="left-sidebar"
            style={{
              flex: "0 500px",

              minWidth: "550px",
              marginRight: "10px",
              marginBottom: "20px",
            }}
          >
            <div className="login-aside">
              <LoginPanel />
              <EmailPanel />
            </div>
          </aside>

          {/* Right column: informational content */}
          <MainContent />
        </div>
      </div>
    </>
  );
}
