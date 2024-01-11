import React, { useState } from "react";
import Link from "next/link";

// Dynamic Navbar
function Navbar() {
  return (
    <nav
      className="fixed right-2 transform -translate-x-1/2 
    top-10 w-fit bg-opacity-60 p-4 text-white righ-10"
    >
      <div className="container mx-auto flex justify-between items-center">
        <ul className="text-[1.2rem] flex space-x-4">
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
