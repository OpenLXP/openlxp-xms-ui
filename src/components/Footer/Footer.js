import React from "react";
import FooterLink from "./FooterLink/FooterLink";

const Footer = (props) => {
  // const links = [
  //   { name: "Home", url: "https://dodcio.defense.gov/" },
  //   { name: "About DOD CIO", url: "https://dodcio.defense.gov/About-DoD-CIO/" },
  //   { name: "Defense.gov", url: "https://www.defense.gov/" },
  //   { name: "FOIA", url: "https://open.defense.gov/Transparency/FOIA.aspx" },
  //   {
  //     name: "Section 508",
  //     url: "https://dodcio.defense.gov/DoDSection508/Std_Stmt.aspx",
  //   },
  //   { name: "Strategic Plans", url: "https://dodcio.defense.gov/Library/" },
  //   {
  //     name: "Information Quality",
  //     url: "https://www.defense.gov//Resources/DOD-Information-Quality-Guidelines/",
  //   },
  //   { name: "No FEAR Act", url: "https://prhome.defense.gov/NoFear/" },
  //   { name: "Open Government", url: "https://open.defense.gov/" },
  //   { name: "Plain Writing", url: "https://www.esd.whs.mil/DD/plainlanguage/" },
  //   {
  //     name: "Privacy Policy",
  //     url: "https://dodcio.defense.gov/Home/Privacy-Policy.aspx",
  //   },
  //   { name: "Privacy Program", url: "http://dpcld.defense.gov/Privacy/" },
  //   { name: "DoD Careers", url: "https://dod.usajobs.gov/" },
  //   { name: "Web Policy", url: "https://dodcio.defense.gov/DoD-Web-Policy/" },
  //   {
  //     name: "Public Use Notice",
  //     url: "https://dodcio.defense.gov/Home/PublicUseNotice.aspx",
  //   },
  //   { name: "USA.gov", url: "https://www.usa.gov/" },
  //   {
  //     name: "External Links Disclaimer",
  //     url: "https://dodcio.defense.gov/Home2/ELD.aspx",
  //   },
  //   { name: "Contact US", url: "https://dodcio.defense.gov/Contact/" },
  // ];

  // const makeExternalLinks = links.map((link, index) => {
  //   return <FooterLink link={link.url} name={link.name} key={index} />;
  // });

  // return (
  //   <footer className="footer bg-blue relative pt-1">
  //     <div className="flex flex-row justify-center relative h-auto mx-auto">
  //       <div className="grid grid-cols-6  p-5 hover:bg-lightblue gap-1 focus:outline-none">
  //         {makeExternalLinks}
  //       </div>
  //     </div>
  //   </footer>
  // );

  const leftLinks = [
    { name: 'DOD Home Page', url: 'https://www.defense.gov/' },
    { name: 'About ADL', url: 'https://adlnet.gov/about/' },
    { name: 'Web Policy', url: 'https://dodcio.defense.gov/DoD-Web-Policy/' },
  ];
  const rightLinks = [
    {
      name: 'Privacy',
      url: 'https://dodcio.defense.gov/Home/Privacy-Policy.aspx',
    },
    { name: 'Contact US', url: 'https://dodcio.defense.gov/Contact/' },
  ];

  const makeExternalLinks = (links) =>
    links.map((link, index) => {
      return (
        <a
          key={index}
          className='text-center text-gray-500 text-base p-1 hover:text-gray-900 h-auto hover:text-shadow-md transform transition-all duration-75 ease-in-out'
          href={link.url}
        >
          {link.name}
        </a>
      );
    });

  return (
    <div className='mt-10 bottom-0 bg-opacity-90 w-full mx-auto z-50'>
      <nav className={'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t'}>
        <div className={'w-full py-4 inline-flex items-center justify-between'}>
          <div className={'flex items-center gap-4'}>
            {makeExternalLinks(leftLinks)}
          </div>
          <div className={'flex items-right gap-4'}>
            {makeExternalLinks(rightLinks)}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Footer;
