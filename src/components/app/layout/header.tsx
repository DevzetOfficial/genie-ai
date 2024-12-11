import React, { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignRight, ArrowRight } from "lucide-react";
import logow from "@/assets/logo-w.svg";
import logob from "@/assets/logo-black.svg";
import { Button } from "../shared/frontend-button";
import { Link, useLocation } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

const Header: React.FC = () => {
  const [scroll, setScroll] = useState<boolean>(false);
  const location = useLocation();
  const keywords = ["blog", "contact"]; // Add all your keywords here
  const isWhiteNavbar: boolean = keywords.some((keyword) =>
    location.pathname.includes(keyword)
  );
  const isMobile = useIsMobile();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 0);
    });
  });

  let content;

  if (isMobile) {
    content = (
      <Sheet>
        <SheetTrigger>
          <AlignRight
            color={isWhiteNavbar && !scroll ? "#000000" : "#ffffff"}
          />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className="!text-left">Menu</SheetTitle>
          </SheetHeader>

          <ul className="flex flex-col items-start gap-5 mt-5">
            <li>
              <Link to="/ai-sdr">Sonya - AI SDR</Link>
            </li>
            <li>
              <Link to="/ai-phone-representative">
                Frank - AI Phone Representative
              </Link>
            </li>

            <Button size="sm" variant="default">
              <Link to={"/contact"}>
                {" "}
                Book a Demo <ArrowRight className="h-8 w-8 shrink-0" />
              </Link>
            </Button>
          </ul>
        </SheetContent>
      </Sheet>
    );
  } else {
    content = (
      <>
        <ul
          className={`flex items-center gap-10 ${
            isWhiteNavbar && !scroll
              ? "text-black"
              : isWhiteNavbar && scroll
              ? "text-white"
              : "text-white"
          }`}
        >
          <li className="hover:text-primary duration-200 transition-all">
            <Link to="/ai-sdr">Sonya - AI SDR</Link>
          </li>
          <li className="hover:text-primary duration-200 transition-all">
            <Link to="/ai-phone-representative">
              Frank - AI Phone Representative
            </Link>
          </li>
        </ul>

        <Link to={"/"}>
          <Button size="md" variant="default">
            <Link to={"/contact"}> Book a Demo</Link>
          </Button>
        </Link>
      </>
    );
  }

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-10 py-8 duration-300 ${
        scroll ? "isSticky" : ""
      } [&.isSticky]:bg-black [&.isSticky]:py-4`}
    >
      <div className="container">
        <div className="flex items-center justify-between">
          <Link to="/">
            {isWhiteNavbar && !scroll ? (
              <img src={logob} alt="Logo Black" />
            ) : isWhiteNavbar && scroll ? (
              <img src={logow} alt="Logo White" />
            ) : (
              <img src={logow} alt="Logo White" />
            )}
          </Link>

          {content}
        </div>
      </div>
    </nav>
  );
};

export default Header;
