"use client";

import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4 flex flex-col items-center justify-between">
        <p className="text-sm mb-4">
          © {new Date().getFullYear()} Ahmed Nawar. All rights reserved.
        </p>

        <div className="flex gap-6 text-xl">
          <Link
            href="mailto:nawarahmed652@gmail.com"
            className="text-red-300 hover:text-red-800 transition-all duration-500"
            aria-label="Email"
          >
            <FaEnvelope />
          </Link>

          <Link
            href="https://github.com/AhmedNawar2003"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 transition-all duration-500"
            aria-label="GitHub"
          >
            <FaGithub />
          </Link>

          <Link
            href="https://www.linkedin.com/in/ahmed-nawar-246513243"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0077B5] hover:text-blue-800 transition-all duration-500"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </Link>

          <Link
            href="https://wa.me/+201551030114?text=Hello%20I%20want%20to%20ask%20about%20your%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#25D366] hover:text-green-800 transition-all duration-500"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </Link>
        </div>
      </div>
    </footer>
  );
}
