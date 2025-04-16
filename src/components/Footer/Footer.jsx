"use client";

import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4 flex flex-col items-center justify-between">
        <p className="text-sm mb-4">© {new Date().getFullYear()} Ahmed Nawar. All rights reserved.</p>
        
        <div className="flex gap-6 text-xl">
          <Link
            href="mailto:nawarahmed652@gmail.com"
            className="text-blue-400 hover:text-blue-300 transition"
            aria-label="Email"
          >
            <FaEnvelope />
          </Link>
          <Link
            href="https://github.com/AhmedNawar2003"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition"
            aria-label="GitHub"
          >
            <FaGithub />
          </Link>
          <Link
            href="https://www.linkedin.com/in/ahmed-nawar-246513243"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </Link>
        </div>
      </div>
    </footer>
  );
}
