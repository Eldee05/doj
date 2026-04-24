// components/Navbar.jsx
// Navigation bar with Related Links and Victim Rights dropdowns

import { useState } from "react";
import "../styles/components.css";

const RELATED_LINKS = [
  { label: "Office for Victims of Crime",                      url: "http://www.ojp.usdoj.gov/ovc" },
  { label: "U.S. Department of Justice",                       url: "http://www.usdoj.gov" },
  { label: "Federal Bureau of Investigation",                  url: "http://www.fbi.gov" },
  { label: "U.S. Postal Inspection Service",                   url: "https://postalinspectors.uspis.gov" },
  { label: "U.S. Attorneys",                                   url: "http://www.usdoj.gov/usao/" },
  { label: "Federal Bureau of Prisons",                        url: "http://www.bop.gov/" },
  { label: "Criminal Division",                                url: "http://www.usdoj.gov/criminal/vns/" },
  { label: "U.S. Parole Commission",                           url: "http://www.justice.gov/uspc/" },
  { label: "Bureau of Alcohol, Tobacco, Firearms and Explosives", url: "http://www.atf.gov/" },
  { label: "ICE Detainee Locator",                             url: "https://locator.ice.gov/odls/homePage.do" },
  { label: "Privacy Policy",                                   url: "http://www.usdoj.gov/privacy-file.htm" },
];

const VICTIMS_RIGHTS_LINKS = [
  { label: "Victims' Rights and Restitution Act", url: "#" },
  { label: "Crime Victims' Rights Act",           url: "#" },
];

export default function Navbar() {
  const [relatedOpen, setRelatedOpen]             = useState(false);
  const [victimsRightsOpen, setVictimsRightsOpen] = useState(false);

  const closeAll = () => {
    setRelatedOpen(false);
    setVictimsRightsOpen(false);
  };

  return (
    <>
      <nav className="navbar" aria-label="Main navigation">
        {/* Related Links */}
        <div className="dropdown">
          <button
            className="navbar__btn"
            onClick={() => { setRelatedOpen(!relatedOpen); setVictimsRightsOpen(false); }}
            aria-haspopup="true"
            aria-expanded={relatedOpen}
          >
            Related Links ▾
          </button>
          {relatedOpen && (
            <div className="dropdown__menu" role="menu">
              {RELATED_LINKS.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="dropdown__item"
                  role="menuitem"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Victim Rights */}
        <div className="dropdown">
          <button
            className="navbar__btn"
            onClick={() => { setVictimsRightsOpen(!victimsRightsOpen); setRelatedOpen(false); }}
            aria-haspopup="true"
            aria-expanded={victimsRightsOpen}
          >
            Victim Rights ▾
          </button>
          {victimsRightsOpen && (
            <div className="dropdown__menu" role="menu">
              {VICTIMS_RIGHTS_LINKS.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  className="dropdown__item"
                  role="menuitem"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Click-outside overlay to close dropdowns */}
      {(relatedOpen || victimsRightsOpen) && (
        <div className="overlay" onClick={closeAll} aria-hidden="true" />
      )}
    </>
  );
}
