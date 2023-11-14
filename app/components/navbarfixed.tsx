import React from "react";
import Link from "next/link";

function NavbarFixed() {
  return (
    <nav className="bg-black text-white p-8 ">
      <div className="container mx-auto flex justify-between items-center">
        {/* <Link href="/">
          <a className="text-2xl font-bold">Your Logo</a>
        </Link> */}
        <ul className="flex space-x-4">
          <Link className="" href="/">
            <li>
              <button>Home</button>
            </li>
          </Link>
          <Link className="" href="/Contact">
            <li>
              <button>Contact</button>
            </li>
          </Link>
          <Link className="" href="/About">
            <li>
              <button>About</button>
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default NavbarFixed;
