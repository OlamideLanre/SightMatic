import React from "react";
import { Link } from "react-router-dom";
import "./NavStyle.css";
import { useState } from "react";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <nav className="bg-[#020024] px-20 py-7 stroke">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <div className="text-white font-bold text-lg">SIGHTMATIC</div>
            {/* Menu icon for toggling mobile menu */}
            <div className="menu-icon ml-4" onClick={toggleMenu}>
              &#9776; {/* Hamburger icon */}
            </div>
          </div>
          <ul
            className={`flex text-white navbar ${isMenuOpen ? "active" : ""}`}
          >
            <li>
              <a to="/" className="text-white">
                Home
              </a>
            </li>
            <li>
              <a to="/about" className="text-white">
                About
              </a>
            </li>
            <li>
              <a to="/" className="text-white">
                WaitList
              </a>
            </li>
            <li>
              <a to="/" className="text-white">
                FAQs
              </a>
            </li>
            <li>
              <a to="/" className="text-white">
                Contact Us
              </a>
            </li>

            <li>
              <a to="/login" className="text-white bg-purple-600 rounded">
                Login/SignUp
              </a>
            </li>

            {/* <li>menu</li> */}
          </ul>
        </div>
      </nav>
    </>
  );
}
export default NavBar;
