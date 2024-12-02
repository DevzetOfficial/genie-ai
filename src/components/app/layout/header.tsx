import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignLeft } from "lucide-react";
import logo from "@/assets/logo-w.png";
function Header() {
  return (
    <nav className="bg-black">
      <div className="container py-8">
        <div className="flex items-center justify-between">
          <a className="text-white" href="#">
            <img src={logo} alt="" />
          </a>
          <ul className="hidden lg:flex items-center gap-10">
            <li>
              <a className="text-white" href="#">
                Features
              </a>
            </li>
            <li>
              {" "}
              <a className="text-white" href="#">
                Pricing
              </a>
            </li>
            <li>
              <a className="text-white" href="#">
                Documentation
              </a>
            </li>
            <li>
              {" "}
              <a className="text-white" href="#">
                Blog
              </a>
            </li>
          </ul>

          <Sheet>
            <SheetTrigger className="lg:hidden">
              <Button size={"icon"} variant={"ghost"}>
                <AlignLeft />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>

              <ul className="flex flex-col items-center gap-10">
                <li>
                  <a className="text-white" href="#">
                    Features
                  </a>
                </li>
                <li>
                  {" "}
                  <a className="text-white" href="#">
                    Pricing
                  </a>
                </li>
                <li>
                  <a className="text-white" href="#">
                    Documentation
                  </a>
                </li>
                <li>
                  {" "}
                  <a className="text-white" href="#">
                    Blog
                  </a>
                </li>
              </ul>
            </SheetContent>
          </Sheet>

          <a
            className="hidden lg:inline-flex items-center hover:text-primary text-white py-5 px-6 text-base leading-[22px] font-medium  rounded-[32px] h-12 border hover:bg-[#030303] border-[rgba(255,255,255,0.20)] transition-all duration-300"
            href="#"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Header;
