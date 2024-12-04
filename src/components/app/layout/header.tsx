import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignRight, ArrowRight } from "lucide-react";
import logow from "@/assets/logo-w.png";
import logob from "@/assets/logo-black.svg";
import { Button } from "../shared/frontend-button";
import { Link, useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const location = useLocation();

  const isWhiteNavbar: boolean = location.pathname.includes("blog");

  return (
    <nav
      className={`${
        isWhiteNavbar ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
      <div className="container py-8">
        <div className="flex items-center justify-between">
          <Link to="/">
            {isWhiteNavbar ? (
              <img src={logob} alt="Logo Black" />
            ) : (
              <img src={logow} alt="Logo White" />
            )}
          </Link>

          <ul className="hidden lg:flex items-center gap-10">
            <li>
              <Link to="/">Features</Link>
            </li>
            <li>
              <Link to="/">Pricing</Link>
            </li>
            <li>
              <Link to="/">Documentation</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>

          <Sheet>
            <SheetTrigger className="lg:hidden">
              <AlignRight color={isWhiteNavbar ? "#000000" : "#ffffff"} />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="!text-left">Menu</SheetTitle>
              </SheetHeader>

              <ul className="flex flex-col items-start gap-5 mt-5">
                <li>
                  <Link to="/">Features</Link>
                </li>
                <li>
                  <Link to="/">Pricing</Link>
                </li>
                <li>
                  <Link to="/">Documentation</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <Button size="sm" variant="default">
                  Contact <ArrowRight className="h-8 w-8 shrink-0" />
                </Button>
              </ul>
            </SheetContent>
          </Sheet>

          {/* Contact Button */}
          <a
            className={`hidden lg:inline-flex items-center hover:text-primary ${
              isWhiteNavbar
                ? "bg-[#010609]"
                : "bg-transparent border-[rgba(255,255,255,0.20)]"
            } text-white py-5 px-6 text-base leading-[22px] font-medium rounded-[32px] h-12 border hover:bg-[#030303] transition-all duration-300`}
            href="#"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
