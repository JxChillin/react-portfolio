import React from "react";
import { Link } from "react-router-dom";

// Dynamic Navbar
function Navbar() {
  return (
    <nav
      className="fixed left-1/2 transform -translate-x-1/2 
    top-10 w-fit bg-opacity-60 bg-black rounded-lg p-4 text-white"
    >
      <div className="container mx-auto flex justify-between items-center">
        <ul className="flex space-x-4">
          <li className="hover:underline cursor-pointer">Home</li>
          <li className="hover:underline cursor-pointer">About</li>
          <li className="hover:underline cursor-pointer">Services</li>
          <li className="hover:underline cursor-pointer">Contact</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
