import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import React from "react";

const layoutBakeryCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default layoutBakeryCard;
