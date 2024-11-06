import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'; // Importing a separate CSS file

const Navbar = () => {
  return (
    <nav data-aos="fade-down" className="navbar">
      <div className="container">
        <div className="nav-content">
          <ul className="nav-list">
            <li>
              <Link to="/about" className="nav-link">About</Link>
            </li>
            <li>
              <Link to="/notes" className="nav-link">Notes</Link>
            </li>
            <li>
             <a href="http://localhost:5173/" className="nav-link" target="_blank" rel="noopener noreferrer">
              Solar
            </a>
            </li>

            <li>
              <Link to="/infographs" className="nav-link">Infographs</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
