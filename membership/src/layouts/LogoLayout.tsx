import React from "react";
import { Navbar } from "../components";

const LogoLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default LogoLayout;
