"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { FaGithub, FaEye } from "react-icons/fa";
import { IoMdCodeWorking } from "react-icons/io";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    const fetchData = async () => {
      try {
        const response = await fetch("/data/products.json");
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <section id="projects" className="py-4 md:py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h3 className="md:text-3xl font-bold text-white mb-4 md:mb-10 text-center flex items-center justify-center gap-2">
          <IoMdCodeWorking className="md:text-4xl text-sky-600" />
          Projects
        </h3>
        <p className="text-center text-white mb-8">
          Here are some of my projects that I have worked on recently.
          <br />
          You can check them out by clicking on the icons below.
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 perspective cursor-pointer">
          {projects.map((project, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 80} // Stagger Animation
              className="flip-card w-full h-80 cursor-pointer group"
            >
              <div className="flip-card-inner relative w-full h-full transition-transform duration-[900ms] ease-in-out transform-style-preserve-3d group-hover:rotate-y-180">
                {/* Front Side */}
                <div className="flip-card-front absolute w-full h-full backface-hidden rounded-xl shadow-xl overflow-hidden border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-800 group-hover:scale-[1.02] transition-all duration-500 ease-in-out hover:shadow-[0_0_25px_rgba(56,189,248,0.4)]">
                  <div className="relative h-40 w-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="text-sm md:text-xl font-bold text-white mb-2 capitalize">
                      {project.title}
                    </h4>
                    <p className="text-sm text-slate-300">
                      {project.description.slice(0, 60)}...
                    </p>
                  </div>
                </div>

                {/* Back Side */}
                <div className="flip-card-back absolute w-full h-full backface-hidden rotate-y-180 rounded-xl shadow-xl p-5 flex flex-col justify-between bg-gradient-to-br from-sky-900 to-sky-700 border border-slate-700 hover:shadow-[0_0_25px_rgba(56,189,248,0.6)] transition-all duration-500 ease-in-out">
                  <h4 className="text-sm md:text-xl font-bold mb-2 capitalize">
                    {project.title}
                  </h4>
                  <p className="text-sm text-slate-200 mb-4">
                    {project.description}
                  </p>
                  <div className="flex justify-between items-center mt-auto">
                    {project.live && (
                      <Link
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-black p-3 rounded-full hover:scale-110 transition-transform duration-300"
                        aria-label="Live Demo"
                      >
                        <FaEye className="text-sm md:text-xl" />
                      </Link>
                    )}
                    <Link
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-black p-3 rounded-full hover:scale-110 transition-transform duration-300"
                      aria-label="Source Code"
                    >
                      <FaGithub className="text-sm md:text-xl" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
