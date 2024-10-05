import React from "react";
import { Link } from "react-router-dom";

function Header(color) {
  return (
    <header className="absolute top-0 left-0 w-full py-6 flex justify-center items-center px-10">
      <nav className="flex gap-[200px] font-bold" style={color}>
        <Link
          to="/"
          className="hover:text-[#AF3700] transition-colors duration-300"
        >
          Home
        </Link>
        <Link
          to="/about"
          className={`hover:text-[#AF3700] transition-colors duration-300 ${
            location.pathname === "/about"  ? "text-[#AF3700]" : ""
          }`}
        >
          About us
        </Link>
      </nav>
    </header>
  );
}

export default Header;
