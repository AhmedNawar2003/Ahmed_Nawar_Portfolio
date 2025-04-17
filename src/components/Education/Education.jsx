import { FaUniversity } from "react-icons/fa";

export default function Education() {
  return (
    <div>
      <section className="py-4 md:py-10  text-white">
        <div className="container mx-auto px-4">
          <h2 className="md:text-3xl font-bold flex items-center gap-2 mb-8">
            <FaUniversity className="text-blue-400" />
            Education
          </h2>
          <div className="relative border-l border-slate-700 pl-6">
            <div className="mb-10 relative">
              <div className="absolute left-[-18px] top-2 w-3 h-3 bg-blue-500 rounded-full border-4 border-gray-950"></div>
              <h3 className="md:text-xl font-semibold">
                Faculty of Computers and Information
              </h3>
              <p className="text-slate-400 mt-1">
                Monufia University • 2021 – 2025
              </p>
              <p className="text-slate-400 mt-1">
                GPA: <span className="font-medium text-white">3.45</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
