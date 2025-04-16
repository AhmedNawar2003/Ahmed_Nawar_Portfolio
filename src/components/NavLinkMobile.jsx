"use client";

import { navlinks } from "../constants/navlinks.js";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
export default function NavLinkMobile() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className="flex md:hidden cursor-pointer md:cursor-none"
        onClick={toggleMenu}
      >
        {!isOpen ? <Menu /> : <X />}
      </div>
      <figure
        className={`absolute  text-white rounded-md  right-2 origin-top top-20 ${
          isOpen
            ? "scale-y-100 opacity-100 visible"
            : "scale-y-50 opacity-0 hidden"
        } w-auto bg-slate-800 p-2 transition-all z-50`}
      >
        <nav className="w-full h-full flex flex-col space-y-2 capitalize font-normal tracking-wide">
          {navlinks.map((link, index) => (
            <Link
              key={index}
              href={`#${link}`}
              className="py-1 px-2 text-white text-sm md:text-xl transition-all rounded-md hover:bg-slate-700 hover:text-sky-400"
              onClick={toggleMenu}
            >
              {link}
            </Link>
          ))}
        </nav>
      </figure>
    </>
  );
}
