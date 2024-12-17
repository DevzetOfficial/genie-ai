import React from "react";
import footerLogo from "@/assets/foooter-logo.svg";
import { Link } from "react-router-dom";
import NewsLetter from "../shared/news-letter";

const FooterNavTitle = ({ text }: { text: string }) => (
  <div className="mb-6 md:mb-8">
    <h5 className="text-sm  text-[#637189] font-instrument">{text}</h5>
  </div>
);

const FooterNavList = ({
  lists,
}: {
  lists: { label: string; href: string; isExternal?: boolean }[];
}) => (
  <ul className="flex flex-col gap-5 md:gap-6 lg:gap-8">
    {lists?.map(({ label, href, isExternal }, index) => (
      <li key={index}>
        <Link
          to={href}
          target={`${isExternal ? "_blank" : "_self"}`}
          className="text-white hover:text-primary transition-all duration-300 leading-[140%]"
        >
          {label}
        </Link>
      </li>
    ))}
  </ul>
);

const Footer: React.FC = () => {
  return (
    <section className="bg-black">
      <footer className="pt-20 md:pt-[222px] font-instrument">
        <div className="container">
          <div className="grid items-start grid-cols-2 gap-8 sm:grid-cols-12 md:gap-4">
            <div className="col-span-2 sm:col-span-4 sm:row-span-2 lg:row-span-1 lg:col-span-5">
              <Link to="/">
                <img src={footerLogo} alt="Footer Logo" />
              </Link>
              <p className="mb-8 text-lg text-white mt-14">
                Join our newsletter to stay up to date on features and releases.
              </p>
              <NewsLetter inputClass="max-w-[351px] border-white/30 text-white" />
              <p className="mt-4 text-white/50">
                By subscribing you agree to with our Privacy Policy and provide
                consent to receive updates from our company.
              </p>
            </div>

            <div className="sm:col-span-3 lg:col-span-2">
              {/* <FooterNavTitle text="Features" />

              <FooterNavList
                lists={[
                  {
                    label: "Dashboard",
                    href: "/",
                  },
                  {
                    label: "Project",
                    href: "/",
                  },
                  {
                    label: "Clients",
                    href: "/",
                  },
                  {
                    label: "Team",
                    href: "/",
                  },
                  {
                    label: "Employee",
                    href: "/",
                  },
                ]}
              /> */}
            </div>

            <div className="sm:col-span-3 lg:col-span-2">
              {/* <FooterNavTitle text="Product" />

              <FooterNavList
                lists={[
                  {
                    label: "Pricing",
                    href: "/",
                  },
                  {
                    label: "Documentation",
                    href: "/",
                  },
                  {
                    label: "Blog",
                    href: "/blog",
                  },
                ]}
              /> */}
            </div>

            <div className="sm:col-span-3 lg:col-span-2">
              {/* <FooterNavTitle text="Company" />

              <FooterNavList
                lists={[
                  {
                    label: "About Us",
                    href: "/",
                  },
                  {
                    label: "Careers",
                    href: "/",
                  },
                  {
                    label: "Contact",
                    href: "/contact",
                  },
                ]}
              /> */}
            </div>

            <div className="md:col-span-3 lg:col-span-1">
              <FooterNavTitle text="Support" />

              <FooterNavList
                lists={[
                  {
                    label: "Terms",
                    href: "/terms",
                  },
                  {
                    label: "Privacy",
                    href: "/privacy",
                  },
                  {
                    label: "Contact",
                    href: "/contact",
                  },
                ]}
              />
            </div>
          </div>

          <div className="flex items-center justify-center text-center py-10 text-xs md:py-16 text-white/50">
            {/* <div className="flex items-center gap-2">
              <Link to="/">Privacy Policy</Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4"
                height="4"
                viewBox="0 0 4 4"
                fill="none"
              >
                <circle cx="2" cy="2" r="2" fill="#9FA4AD" />
              </svg>
              <Link to="/">Terms & Condition</Link>
            </div> */}
            <span>© 2024 Genie AI. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
