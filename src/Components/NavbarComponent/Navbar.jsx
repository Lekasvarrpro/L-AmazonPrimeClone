import React, { useEffect, useState } from "react";
import Logo from "../NavbarComponent/Logo.jsx";
import Links from "../NavbarComponent/Links.jsx";
import Sidebar from "../NavbarComponent/Sidebar.jsx";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`
        flex items-center justify-between h-16 w-350 fixed top-0 right-20 
        rounded-bl-lg rounded-br-lg z-50 transition-all duration-300

        ${
          scrolled
            ? "backdrop-blur-md bg-[rgba(20,24,30,0.90)] shadow-lg"
            : "bg-transparent"
        }
      `}
    >
      <div className="flex items-center gap-10 pl-18">
        <Logo />
        <Links />
      </div>
      <Sidebar />
    </div>
  );
};

export default Navbar;
