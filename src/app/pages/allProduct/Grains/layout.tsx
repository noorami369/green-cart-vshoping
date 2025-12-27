import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import React from "react";

const layoutGrainsCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />

      {children}

      <Footer />
    </>
  );
};

export default layoutGrainsCard;
