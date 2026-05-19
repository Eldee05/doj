// components/Header.jsx
// Top bar and main header with DOJ Seal and title

{
  /*import DOJSeal from "./DOJSeal";
import "../styles/components.css";

export default function Header() {
  return (
    <>
      {/* Top blue banner *
      <div className="top-bar">
        <span>United States Department of Justice</span>
        <span>Victim Notification System</span>
      </div>

      {/* Logo + Title /}
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
}*/
}

// components/Header.jsx
// Single dark header bar: DOJ seal + title on left, Related Links dropdown on far right

import { useState } from "react";
import DOJSeal from "./DOJSeal";
import "../styles/components.css";

const RELATED_LINKS = [
  { label: "Office for Victims of Crime", url: "http://www.ojp.usdoj.gov/ovc" },
  { label: "U.S. Department of Justice", url: "http://www.usdoj.gov" },
  { label: "Federal Bureau of Investigation", url: "http://www.fbi.gov" },
  {
    label: "U.S. Postal Inspection Service",
    url: "https://postalinspectors.uspis.gov",
  },
  { label: "U.S. Attorneys", url: "http://www.usdoj.gov/usao/" },
  { label: "Federal Bureau of Prisons", url: "http://www.bop.gov/" },
  { label: "Criminal Division", url: "http://www.usdoj.gov/criminal/vns/" },
  { label: "U.S. Parole Commission", url: "http://www.justice.gov/uspc/" },
  {
    label: "Bureau of Alcohol, Tobacco, Firearms and Explosives",
    url: "http://www.atf.gov/",
  },
  {
    label: "ICE Detainee Locator",
    url: "https://locator.ice.gov/odls/homePage.do",
  },
  { label: "Privacy Policy", url: "http://www.usdoj.gov/privacy-file.htm" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="main-header">
      <div className="header-container">
        {/* Left: Seal + Title */}
        <div className="main-header__left">
          <a href="/" aria-label="Go to VNS Home" className="header-logo-link">
            <DOJSeal />
          </a>
        </div>

        {/* Right: Related Links dropdown */}
        <div className="header-dropdown">
          <button
            className="header-dropdown__btn"
            onClick={() => setOpen(!open)}
            aria-haspopup="true"
            aria-expanded={open}
          >
            Related Links ▾
          </button>
          {open && (
            <>
              <div className="header-dropdown__menu" role="menu">
                {RELATED_LINKS.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="header-dropdown__item"
                    role="menuitem"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              {/* Click-outside overlay */}
              <div
                className="overlay"
                onClick={() => setOpen(false)}
                aria-hidden="true"
              />
            </>
          )}
        </div>
      </div>
    </header>
  );
}
