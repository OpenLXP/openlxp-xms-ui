import classes from "./Footer.module.css";
import React from "react";

const Footer = (props) => {
  const links = [
    { name: "Home", url: "https://dodcio.defense.gov/" },
    { name: "About DOD CIO", url: "https://dodcio.defense.gov/About-DoD-CIO/" },
    { name: "Defense.gov", url: "https://www.defense.gov/" },
    { name: "FOIA", url: "https://open.defense.gov/Transparency/FOIA.aspx" },
    {
      name: "Section 508",
      url: "https://dodcio.defense.gov/DoDSection508/Std_Stmt.aspx",
    },
    { name: "Strategic Plans", url: "https://dodcio.defense.gov/Library/" },
    {
      name: "Information Quality",
      url: "https://www.defense.gov//Resources/DOD-Information-Quality-Guidelines/",
    },
    { name: "No FEAR Act", url: "https://prhome.defense.gov/NoFear/" },
    { name: "Open Government", url: "https://open.defense.gov/" },
    { name: "Plain Writing", url: "https://www.esd.whs.mil/DD/plainlanguage/" },
    {
      name: "Privacy Policy",
      url: "https://dodcio.defense.gov/Home/Privacy-Policy.aspx",
    },
    { name: "Privacy Program", url: "http://dpcld.defense.gov/Privacy/" },
    { name: "DoD Careers", url: "https://dod.usajobs.gov/" },
    { name: "Web Policy", url: "https://dodcio.defense.gov/DoD-Web-Policy/" },
    {
      name: "Public Use Notice",
      url: "https://dodcio.defense.gov/Home/PublicUseNotice.aspx",
    },
    { name: "USA.gov", url: "https://www.usa.gov/" },
    {
      name: "External Links Disclaimer",
      url: "https://dodcio.defense.gov/Home2/ELD.aspx",
    },
    { name: "Contact US", url: "https://dodcio.defense.gov/Contact/" },
  ];

  const makeExternalLinks = links.map((link, index) => {
    return (
      <a
        key={index}
        className=" text-center text-white text-sm hover:bg-blue rounded-sm"
        href={link.url}
        target="_blank"
        rel="noreferrer">
        {link.name}
      </a>
    );
  });

  return (
    <footer className="footer bg-blue relative pt-1">
      <div className="relative h-auto mx-auto">
        <div className="flex flex-row justify-center">
          <div className="p-5">
            {/* grid library */}
            <div className="grid grid-cols-6  hover:bg-lightblue gap-1 focus:outline-none">
              {makeExternalLinks}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
