import React from "react";
import Link from "next/link";

function NavbarFixed() {
  return (
    <nav className="bg-black text-white p-8 ">
      <div className="container mx-auto flex justify-between items-center">
        {/* <Link href="/">
          <a className="text-2xl font-bold">Your Logo</a>
        </Link> */}
        <ul className="flex space-x-8 ">
          <Link className="" href="/">
            <li>
              <button className="hover:text-[d4a373]">Home</button>
            </li>
          </Link>
          <Link className="hover:text-[d4a373]" href="/Contact">
            <li>
              <button>Contact</button>
            </li>
          </Link>
          <Link className="hover:text-[d4a373]" href="/About">
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
