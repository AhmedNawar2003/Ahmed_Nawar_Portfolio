import { FaUserTie } from "react-icons/fa";
export default function About() {
  return (
    <section className="py-12 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold flex items-center gap-2 mb-6">
          <FaUserTie className="text-purple-400" />
          About Me
        </h2>

        <p className="text-lg text-slate-400 leading-8 max-w-3xl">
          I'm Ahmed Nawar, a passionate <span className="text-white font-semibold">Frontend Developer</span> with strong experience in building responsive and interactive websites using modern web technologies like <span className="text-white font-semibold">React, Next.js, and Tailwind CSS</span>.  
          <br /><br />
          I’m always striving to improve user experiences and deliver clean, maintainable code. Currently, I'm a senior student at <span className="text-white font-semibold">Faculty of Computers and Information – Monufia University</span>, expected to graduate in <span className="text-white">2025</span> with a GPA of <span className="text-white">3.45</span>.
        </p>
      </div>
    </section>
  );
}
