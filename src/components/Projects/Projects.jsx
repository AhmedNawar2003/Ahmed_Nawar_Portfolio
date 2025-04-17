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
    AOS.init({ duration: 1000 });
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
        <h3 className="md:text-3xl font-bold text-white mb-10 text-center flex items-center justify-center gap-2">
          <IoMdCodeWorking className="md:text-4xl text-sky-600" />
          Projects
        </h3>
        <p className="text-center text-white mb-8">
          Here are some of my projects that I have worked on recently.<br/>You can check them out by clicking on the icons below.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 perspective cursor-pointer">
          {projects.map((project, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className="flip-card bg-transparent w-full h-80 cursor-pointer"
            >
              <div className="flip-card-inner relative w-full h-full transition-transform duration-700 transform-style-preserve-3d hover:rotate-y-180">
                {/* Front Side */}
                <div className="flip-card-front absolute w-full h-full backface-hidden bg-white rounded-xl shadow-xl overflow-hidden">
                  <div className="relative h-40 w-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="text-sm md:text-xl font-bold text-black mb-2 capitalize">
                      {project.title}
                    </h4>
                    <p className="text-sm md:text-xl text-black capitalize">
                      {project.description.slice(0, 60)}...
                    </p>
                  </div>
                </div>

                {/* Back Side */}
                <div className="flip-card-back absolute w-full h-full backface-hidden rotate-y-180 bg-sky-800 text-white rounded-xl shadow-xl p-5 flex flex-col justify-between cursor-pointer">
                  <h4 className="text-sm md:text-xl font-bold mb-2 capitalize">
                    {project.title}
                  </h4>
                  <p className="text-sm md:text-xl mb-4">{project.description}</p>
                  <div className="flex justify-between items-center mt-auto">
                    {project.live && (
                      <Link
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-black p-3 rounded-full"
                        aria-label="Live Demo"
                      >
                        <FaEye className="text-sm md:text-xl" />
                      </Link>
                    )}
                    <Link
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-black p-3 rounded-full"
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
