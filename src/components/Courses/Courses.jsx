import { FaLaptopCode } from "react-icons/fa";

export default function Courses() {
  return (
    <section className="py-12 text-white">
      <div className="container mx-auto px-4">
        <h2 className="md:text-3xl font-bold flex items-center gap-2 mb-8">
          <FaLaptopCode className="text-green-400" />
          Courses
        </h2>
        <div className="relative border-l border-slate-700 pl-6">
          <div className="mb-10 relative">
            <div className="absolute left-[-18px] top-2 w-3 h-3 bg-green-500 rounded-full border-4 border-gray-950"></div>
            <h3 className="md:text-xl font-semibold">
              Front-End Development Course
            </h3>
            <p className="text-slate-400 mt-1">
              Instant Software Solutions • 2024
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}