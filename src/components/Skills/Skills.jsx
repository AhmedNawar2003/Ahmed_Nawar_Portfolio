"use client";
import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaJs,
  FaReact,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import {
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiNextdotjs,
  SiFramer,
  SiPostgresql,
  SiVercel,
  SiNetlify,
  SiPrisma,
  SiAxios,
} from "react-icons/si";
import { MdEmail, MdDesignServices } from "react-icons/md";
import { GiBearFace } from "react-icons/gi"; // رمز تعبيري للدب كـ Zustand

export default function Skills() {
  const skills = [
    { icon: <FaHtml5 className="text-orange-600" />, label: "HTML5" },
    { icon: <FaCss3Alt className="text-blue-600" />, label: "CSS3" },
    { icon: <FaSass className="text-pink-500" />, label: "Sass" },
    { icon: <FaJs className="text-yellow-400" />, label: "JavaScript" },
    { icon: <SiTypescript className="text-blue-500" />, label: "TypeScript" },
    {
      icon: <FaReact className="text-cyan-400 animate-spin-slow" />,
      label: "React.js",
    },
    { icon: <SiNextdotjs className="text-white" />, label: "Next.js" },
    { icon: <FaBootstrap className="text-purple-500" />, label: "Bootstrap" },
    { icon: <SiTailwindcss className="text-sky-500" />, label: "Tailwind CSS" },
    { icon: <SiRedux className="text-purple-700" />, label: "Redux" },
    { icon: <FaGitAlt className="text-orange-500" />, label: "Git" },
    { icon: <FaGithub className="text-white" />, label: "GitHub" },
    { icon: <SiAxios className="text-indigo-400" />, label: "Axios" },
    { icon: <SiPrisma className="text-gray-300" />, label: "Prisma" },
    { icon: <SiPostgresql className="text-blue-600" />, label: "PostgreSQL" },
    { icon: <SiVercel className="text-white" />, label: "Vercel" },
    { icon: <SiNetlify className="text-teal-400" />, label: "Netlify" },
    { icon: <SiFramer className="text-pink-400" />, label: "Framer Motion" },
    { icon: <GiBearFace className="text-yellow-500" />, label: "Zustand" },
    { icon: <MdEmail className="text-red-400" />, label: "EmailJS" },
    {
      icon: <MdDesignServices className="text-green-400" />,
      label: "shadcn/ui",
    },
  ];

  return (
    <section id="skills" className="py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h3 className="md:text-2xl font-bold text-white mb-8 capitalize flex items-center justify-center gap-2">
          <GiSkills className="text-sky-500 text-3xl" />
          Skills
        </h3>

        <div className="overflow-hidden relative">
          <div className="flex animate-marquee whitespace-nowrap w-max overflow-hidden">
            {[...skills, ...skills].map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center mx-6 text-white md:text-4xl hover:scale-3d transition-transform duration-300 cursor-pointer"
              >
                {skill.icon}
                <span className="text-sm mt-2">{skill.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 20s linear infinite;
        }

        .animate-spin-slow {
          animation: spin 6s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
}