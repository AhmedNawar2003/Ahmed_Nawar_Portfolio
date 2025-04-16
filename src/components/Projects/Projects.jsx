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
    <section id="projects" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold text-white mb-10  flex items-center justify-center gap-2">
          <IoMdCodeWorking className="text-4xl text-sky-600" />
          Projects
        </h3>
        <p className="text-center text-white mb-8">
          Here are some of my projects that I have worked on. You can check them
          out and see what I can do. I am always looking for new challenges and
          opportunities to learn and grow as a developer. If you have any
          questions or feedback, feel free to reach out to me. I would love to
          hear from you and connect with you. Thank you for visiting my
          portfolio and checking out my work. I hope you enjoy it as much as I
          enjoyed creating it.
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className="group relative bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-500 transform "
            >
              <div className="relative h-52 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500 cursor-pointer"
                />
              </div>
              <div className="p-5">
                <h4 className="text-xl font-bold text-black mb-2 capitalize">
                  {project.title}
                </h4>
                <p className="text-black capitalize text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center text-sm">
                  {project.live && (
                    <Link
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500   p-3 rounded-full transition"
                      aria-label="Live Demo"
                    >
                      <FaEye className="text-xl" />
                    </Link>
                  )}
                  <Link
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black   p-3 rounded-full transition"
                    aria-label="Source Code"
                  >
                    <FaGithub className="text-xl" />
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
