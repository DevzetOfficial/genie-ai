import CTA from "../shared/cta";
import Footer from "./footer";
import Header from "./header";

function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <CTA />
      <Footer />
    </>
  );
}

export default Layout;
