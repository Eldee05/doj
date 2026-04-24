// components/EmailPanel.jsx
// Allows users to sign up for email notifications without logging in

import { useState } from "react";
import "../styles/components.css";

export default function EmailPanel() {
  const [showForm, setShowForm]   = useState(false);
  const [email, setEmail]         = useState("");

  const handleSubmit = () => {
    if (!email.trim()) return alert("Please enter a valid email address.");
    alert(`Email registered: ${email}`);
    setEmail("");
    setShowForm(false);
  };

  return (
    <div className="email-panel">
      <div className="email-panel__body">
        <div className="email-panel__title">
          You May Choose To Receive Email Notifications From VNS Without Logging In
        </div>

        <a
          href="#"
          className="email-panel__link"
          onClick={(e) => { e.preventDefault(); setShowForm(true); }}
        >
          Click Here To Receive Email Notifications
        </a>

        {showForm ? (
          <div className="email-panel__form">
            <p>Enter your email address to receive notifications:</p>
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="email-panel__submit" onClick={handleSubmit}>Submit</button>
            <button className="email-panel__cancel" onClick={() => setShowForm(false)}>Cancel</button>
          </div>
        ) : (
          <div className="email-panel__note">
            You will be asked to verify your email address.
          </div>
        )}
      </div>
    </div>
  );
}
