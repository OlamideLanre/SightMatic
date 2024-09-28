import React from "react";
import { Link } from "react-router-dom";
import "./NavStyle.css";

function NavBar() {
  return (
    <>
      <nav className="bg-[#020024] px-20 py-7 stroke">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white font-bold text-lg">SIGHTMATIC</div>
          <ul className="flex space-x-8 text-white">
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
          </ul>
        </div>
      </nav>
    </>
  );
}
export default NavBar;
