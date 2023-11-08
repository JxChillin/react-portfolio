import React from "react";
import Link from "next/link";
import Contact from "../Contact/page";
import Home from "../page";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

function NavbarFixed() {
  return (
    <nav className="bg-black text-white p-8">
      <div className="container mx-auto flex justify-between items-center">
        {/* <Link href="/">
          <a className="text-2xl font-bold">Your Logo</a>
        </Link> */}
        <ul className="flex space-x-4">
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/Contact">
            <li>Contact</li>
          </Link>
          <Link href="/About">
            <li>About</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default NavbarFixed;
