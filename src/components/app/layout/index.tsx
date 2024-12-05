import React from "react";
import CTA from "@/components/app/shared/cta";
import Footer from "@/components/app/layout/footer";
import Header from "@/components/app/layout/header";

function Layout({ children }: { children: React.ReactNode }) {
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
