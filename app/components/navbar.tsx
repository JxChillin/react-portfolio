import React, { useState } from "react";
import Link from "next/link";

// Dynamic Navbar
function Navbar() {
  return (
    <nav
      className="fixed left-1/2 transform -translate-x-1/2 
    top-10 w-fit bg-opacity-60 bg-black rounded-lg p-4 text-white"
    >
      <div className="container mx-auto flex justify-between items-center">
        <ul className="flex space-x-4">
          <Link className="" href="/">
            <li>
              <button className="hover:text-[a9d6e5] ">Home</button>
            </li>
          </Link>
          <Link className="hover:text-[a9d6e5]" href="/Experience">
            <li>
              <button>Experience</button>
            </li>
          </Link>
          <Link className="hover:text-[a9d6e5]" href="/Contact">
            <li>
              <button>Contact</button>
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
