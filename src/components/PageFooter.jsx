// components/PageFooter.jsx
// Bottom footer with DOJ links and copyright

import "../styles/components.css";

export default function PageFooter() {
  return (
    <footer className="page-footer">
      <div className="page-footer__links">
        <a href="http://www.usdoj.gov" target="_blank" rel="noreferrer">
          U.S. Department of Justice
        </a>
        <a href="http://www.usdoj.gov/privacy-file.htm" target="_blank" rel="noreferrer">
          Privacy Policy
        </a>
        <a href="#">Accessibility</a>
      </div>
      <div>© United States Department of Justice. All rights reserved.</div>
    </footer>
  );
}
