import React from "react";
import footerLogo from "@/assets/footer-logo.png";
import { Link } from "react-router-dom";
const Footer: React.FC = () => {
  return (
    <section className="bg-black">
      <footer className="pt-28 md:pt-[222px] font-instrument">
        <div className="container">
          <div className="grid md:grid-cols-3 lg:grid-cols-[5fr,2fr,2fr,2fr,1fr] gap-8 md:gap-4">
            <div>
              <a href="#">
                <img src={footerLogo} alt="Footer Logo" />
              </a>
            </div>
            <ul className="flex flex-col gap-4 md:gap-8">
              <li className="text-sm leading-[130%] text-[#637189] font-instrument">
                Features
              </li>
              {["Dashboard", "Project", "Clients", "Team", "Employee"].map(
                (item) => (
                  <li key={item}>
                    <a
                      className="text-white hover:text-primary transition-all duration-300 leading-[140%]"
                      href="#"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
            <ul className="flex flex-col gap-4 md:gap-8">
              <li className="text-sm leading-[130%] text-[#637189] font-instrument">
                Product
              </li>
              {["Pricing", "Documentation"].map((item) => (
                <li key={item}>
                  <a
                    className="text-white hover:text-primary transition-all duration-300 leading-[140%]"
                    href="#"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="flex flex-col gap-4 md:gap-8">
              <li className="text-sm leading-[130%] text-[#637189] font-instrument">
                Company
              </li>
              {["About Us", "Careers", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    className="text-white hover:text-primary transition-all duration-300 leading-[140%]"
                    href="#"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="flex flex-col gap-4 md:gap-8">
              <li className="text-sm leading-[130%] text-[#637189] font-instrument">
                Support
              </li>
              {["Help Center", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    className="text-white hover:text-primary transition-all duration-300 leading-[140%]"
                    href="#"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap items-center justify-between py-10 md:py-16 text-xs text-white/50">
            <div className="flex items-center gap-1">
              <Link to="#">Privacy Policy</Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4"
                height="4"
                viewBox="0 0 4 4"
                fill="none"
              >
                <circle cx="2" cy="2" r="2" fill="#9FA4AD" />
              </svg>
              <Link to="#">Terms & Condition</Link>
            </div>
            <span>Copyright. All rights reserved</span>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
