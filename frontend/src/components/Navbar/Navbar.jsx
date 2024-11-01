import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      data-aos="fade-down"
      className="fixed top-0 right-0 w-full z-50 bg-black/10 backdrop-blur-sm py-4 sm:py-0"
    >
      <div className="container">
        <div className="flex justify-center items-center">
          <ul className="flex items-center gap-6 text-white text-xl font-bold">
            <li>
              <Link to="/about" className="hover:text-gray-300">About</Link>
            </li>
            <li>
              <Link to="/notes" className="hover:text-gray-300">Notes</Link>
            </li>
            <li>
              <Link to="/solar" className="hover:text-gray-300">Solar</Link>
            </li>
            <li>
              <Link to="/infographs" className="hover:text-gray-300">Infographs</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
