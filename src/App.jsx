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
      <Header />
      <div className="app-wrapper">
        {/* ── Two-column body ──*/}
        <div className="main-content-area">
          <aside
            className="left-sidebar"
            style={{
              flex: "0 0 330px",
              minWidth: "330px",
              marginRight: "10px",
              marginBottom: "20px",
              placeItems: "center",
            }}
          >
            <div className="login-aside">
              <LoginPanel />
              <EmailPanel />
            </div>
          </aside>

          <MainContent />
        </div>
      </div>
    </>
  );
}
