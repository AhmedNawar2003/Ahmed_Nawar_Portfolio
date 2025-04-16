'use client';
import Link from "next/link";
import { useState, useEffect } from "react";
import { navlinks } from "../../constants/navlinks.js";
import NavLinkMobile from "../NavLinkMobile.jsx";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // handle scroll direction
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      // scrolling down
      setShowNavbar(false);
    } else {
      // scrolling up
      setShowNavbar(true);
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`flex items-center justify-between fixed top-0 left-0 w-full z-50 transition-transform duration-500 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      } bg-slate-900 shadow-md`}
    >
      <nav className="px-6 py-4 w-full">
        <div className="container  flex items-center md:gap-8 mx-2">
          <h1 className="text-xl font-bold text-white">Ahmed Nawar</h1>
          <ul className="hidden md:flex gap-8 capitalize ml-auto">
            {navlinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={`#${link}`}
                  className="text-sm font-semibold tracking-wide text-white hover:text-blue-500 transition duration-500 ease-in-out capitalize"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <NavLinkMobile />
    </div>
  );
}
