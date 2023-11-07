import React from "react";
import Link from "next/link";
import Contact from "../pages/contact";
import Home from "../src/app/page";
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
            <li className="hover:underline">Home</li>
          </Link>
          <Link href="/contact">
            <li className="hover:underline">Contact</li>
          </Link>
          <Link href="/about">
            <li className="hover:underline">about</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default NavbarFixed;
