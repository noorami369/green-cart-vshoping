import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import React from "react";

const layoutInstantCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />

      {children}

      <Footer />
    </>
  );
};

export default layoutInstantCard;
