// components/LoginPanel.jsx
// Victim login/registration form — title above border box, fields inside

import { useState } from "react";
import "../styles/components.css";

export default function LoginPanel() {
  const [vin, setVin] = useState("");
  const [pin, setPin] = useState("");
  const [vinError, setVinError] = useState(false);
  const [pinError, setPinError] = useState(false);

  const handleLogin = () => {
    let hasError = false;
    if (!vin.trim()) {
      setVinError(true);
      hasError = true;
    } else setVinError(false);
    if (!pin.trim()) {
      setPinError(true);
      hasError = true;
    } else setPinError(false);
    if (!hasError) alert("Login submitted.");
  };

  return (
    <div className="login-panel">
      <div className="login-panel__title">Victim Login/Registration</div>

      {/* Bordered card */}
      <div className="login-panel__card">
        {/* VIN field */}
        <div className="login-panel__field">
          <label htmlFor="vin" className="login-panel__label">
            VIN or Verified Email:
          </label>
          <input
            id="vin"
            type="text"
            value={vin}
            onChange={(e) => {
              setVin(e.target.value);
              setVinError(false);
            }}
            className={`login-panel__input${vinError ? " login-panel__input--error" : ""}`}
            autoComplete="username"
          />
          {vinError && (
            <div className="login-panel__error" role="alert">
              VIN Or Verified Email is A Required Field
            </div>
          )}
        </div>

        {/* PIN field */}
        <div className="login-panel__field">
          <label htmlFor="pin" className="login-panel__label">
            PIN or Password:
          </label>
          <input
            id="pin"
            type="password"
            value={pin}
            onChange={(e) => {
              setPin(e.target.value);
              setPinError(false);
            }}
            className={`login-panel__input${pinError ? " login-panel__input--error" : ""}`}
            autoComplete="current-password"
          />
          {pinError && (
            <div className="login-panel__error" role="alert">
              VNS Password is A Required Field
            </div>
          )}
        </div>

        <button className="login-panel__btn" onClick={handleLogin}>
          Login
        </button>

        <button
          className="login-panel__btn login-panel__btn--forgot"
          onClick={() => {}}
        >
          Forgot Password
        </button>

        {/* En Español centered inside card */}
        <div className="login-panel__lang">
          <a href="?locale=es_ES" className="login-panel__link">
            En Español
          </a>
        </div>
      </div>
    </div>
  );
}
