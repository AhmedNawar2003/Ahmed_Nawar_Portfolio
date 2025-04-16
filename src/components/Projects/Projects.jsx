"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

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
    <section id="projects" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold text-white mb-10 text-center">Projects</h3>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className="bg-amber-50 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-500"
            >
              <div className="relative h-52 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h4 className="text-xl font-bold text-black mb-2 capitalize">{project.title}</h4>
                <p className="text-black  capitalize text-sm mb-4">{project.description}</p>
                <div className="flex justify-between items-center text-sm">
                  {project.live && (
                    <Link
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white bg-sky-600 hover:bg-red-700 px-3 py-1 rounded-md transition"
                    >
                      Live Demo
                    </Link>
                  )}
                  <Link
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-sky-600 hover:bg-red-700 px-3 py-1 rounded-md transition"
                  >
                    Source Code
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
