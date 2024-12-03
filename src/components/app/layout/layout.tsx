import Header from "./Header";
import Footer from "./Footer";
import CTA from "../shared/cta";

function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <CTA/>
      <Footer />
    </>
  );
}

export default Layout;
