import React from "react";
import CTA from "@/components/app/shared/cta";
import Footer from "@/components/app/layout/footer";
import Header from "@/components/app/layout/header";
import SmoothScroll from "../animation/smooth-scrool";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <SmoothScroll>
        {children}
        <CTA />

        <Footer />
      </SmoothScroll>
    </>
  );
}

export default Layout;
