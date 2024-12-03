
import footerLogo from "@/assets/footer-logo.png";
function Footer() {
  return (
    <section className="bg-black">
      {/* footer top  */}

      {/* footer main  */}
      <footer className="pt-[222px] font-instrument">
        <div className="container">
          <div className="grid grid-cols-[5fr,2fr,2fr,2fr,1fr] gap-4">
            <div className="">
              <a href="">
                <img src={footerLogo} alt="" />
              </a>
            </div>
            <ul className="flex flex-col gap-8">
              <li className="text-sm leading-[130%] text-[#637189] font-instrument">
                Features
              </li>
              <li>
                <a
                  className=" text-white hover:text-primary transition-all duration-300 leading-[140%]"
                  href="#"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  className=" text-white hover:text-primary transition-all duration-300 leading-[140%]"
                  href="#"
                >
                  Project
                </a>
              </li>
              <li>
                <a
                  className=" text-white hover:text-primary transition-all duration-300 leading-[140%]"
                  href="#"
                >
                  Clients
                </a>
              </li>
              <li>
                <a
                  className=" text-white hover:text-primary transition-all duration-300 leading-[140%]"
                  href="#"
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  className=" text-white hover:text-primary transition-all duration-300 leading-[140%]"
                  href="#"
                >
                  Employee
                </a>
              </li>
            </ul>
            <ul className="flex flex-col gap-8">
              <li className="text-sm leading-[130%] text-[#637189] font-instrument">
                Product
              </li>
              <li>
                <a
                  className=" text-white hover:text-primary transition-all duration-300 leading-[140%]"
                  href="#"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  className=" text-white hover:text-primary transition-all duration-300 leading-[140%]"
                  href="#"
                >
                  Documentation
                </a>
              </li>
            </ul>
            <ul className="flex flex-col gap-8">
              <li className="text-sm leading-[130%] text-[#637189] font-instrument">
                Company
              </li>
              <li>
                <a
                  className=" text-white hover:text-primary transition-all duration-300 leading-[140%]"
                  href="#"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  className=" text-white hover:text-primary transition-all duration-300 leading-[140%]"
                  href="#"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  className=" text-white hover:text-primary transition-all duration-300 leading-[140%]"
                  href="#"
                >
                  Contact
                </a>
              </li>
            </ul>
            <ul className="flex flex-col gap-8">
              <li className="text-sm leading-[130%] text-[#637189] font-instrument">
                Support
              </li>
              <li>
                <a
                  className=" text-white hover:text-primary transition-all duration-300 leading-[140%]"
                  href="#"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  className=" text-white hover:text-primary transition-all duration-300 leading-[140%]"
                  href="#"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </section>
  );
}

export default Footer;
