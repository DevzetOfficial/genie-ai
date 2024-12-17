import React, { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignRight } from "lucide-react";
import logow from "@/assets/logo-w.svg";
import logob from "@/assets/logo-black.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "../shared/frontend-button";
import ContactForm from "../shared/contact-form";
import { useModal } from "@/context/modal-context";

const Header: React.FC = () => {
  const { isOpen, setIsOpen, openModal } = useModal();
  const navigate = useNavigate();
  const [scroll, setScroll] = useState<boolean>(false);
  const location = useLocation();
  const keywords = ["blog", "contact", "terms", "privacy"];
  const isWhiteNavbar: boolean = keywords.some((keyword) =>
    location.pathname.includes(keyword)
  );

  const handleModalOpen = () => {
    if (location.pathname === "/contact") {
      navigate("/contact");
    } else {
      openModal();
    }
  };

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

            <li>
              <Button size="sm" onClick={() => openModal()} variant="default">
                Book a Demo
              </Button>
            </li>
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

        <Button size="md" onClick={handleModalOpen} variant="default">
          Book a Demo
        </Button>
      </>
    );
  }

  return (
    <>
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

            <Dialog open={isOpen} onOpenChange={setIsOpen}>
              <DialogContent className="!p-0 max-w-2xl">
                <ContactForm />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
