import React from "react";
import { Link, useLocation } from "react-router-dom";

function Header(color) {
  const location = useLocation();

  return (
    <header className="absolute top-0 left-0 w-full py-4 md:py-6 flex justify-center items-center px-6 md:px-10">
      <nav
        className={`flex flex-col md:flex-row gap-6 md:gap-[200px] font-bold items-center md:items-start`}
        style={color}
      >
        <Link
          to="/"
          className="hover:text-[#AF3700] transition-colors duration-300"
        >
          Home
        </Link>
        <Link
          to="/about"
          className={`hover:text-[#AF3700] transition-colors duration-300 ${
            location.pathname === "/about" ? "text-[#AF3700]" : ""
          }`}
        >
          About us
        </Link>
      </nav>
    </header>
  );
}

export default Header;
