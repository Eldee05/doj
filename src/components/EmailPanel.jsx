// components/EmailPanel.jsx
// Email notification signup — plain section below login card, no border box

import "../styles/components.css";

export default function EmailPanel() {
  return (
    <div className="email-panel">
      <div className="email-panel__title">
        You May Choose To Receive Email Notifications From VNS Without Logging
        In
      </div>

      <a href="/user/emailRegistration" className="email-panel__link">
        Click Here To Receive Email Notifications
      </a>

      <p className="email-panel__note">
        You will be asked to verify your email address.
      </p>
    </div>
  );
}
