import React from "react";
import { useRouter } from "next/router";
import Navbar from "./navbar";
import Footer from "./footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();
  const { pathname } = router;

  // Determine the margin class based on the current route
  const marginClass = pathname === "/" ? "mx-0" : "mx-5";

  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-screen overflow-y-hidden ">
        <main className={`flex-1 ${marginClass}`}>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
