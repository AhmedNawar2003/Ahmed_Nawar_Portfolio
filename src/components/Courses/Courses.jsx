import { FaLaptopCode } from "react-icons/fa";

export default function Courses() {
  return (
    <section className="py-4 md:py-12 text-white" id="courses">
      <div className="container mx-auto px-4">
        <h2 className="md:text-3xl font-bold flex items-center gap-2 mb-8">
          <FaLaptopCode className="text-green-400" />
          Courses & Certifications
        </h2>
        <div className="relative border-l border-slate-700 pl-6">
          <div className="mb-10 relative">
            <div className="absolute left-[-18px] top-2 w-3 h-3 bg-green-500 rounded-full border-4 border-gray-950"></div>
            <h3 className="md:text-xl font-semibold">
              Front-End Development Course
            </h3>
            <ul className="m-2">
              <li className="text-white mt-1">
                Instant Software Solutions • 2024
              </li>
              <li className="text-slate-400 mt-1">
                Meta Front-End Professional Certificate Track
                <br />
                (React Basics, JavaScript, HTML & CSS in Depth, Version Control)
              </li>
            </ul>
            <div className="absolute left-[-18px] top-35 w-3 h-3 bg-green-500 rounded-full border-4 border-gray-950"></div>
            <h3 className="md:text-xl font-semibold">Data Analysis Course</h3>
            <ul className="m-2">
              <li className="text-white mt-1">
                Data Analysis Diploma <span className="mx-1">From</span> AMIT •
                2025
              </li>
              <li className="text-slate-400 mt-1">
                Introduction to Data Analysis
              </li>
              <li className="text-slate-400 mt-1">
                {" "}
                Excel Basics & Excel for Data Analysis & Data Visualization with
                Excel
              </li>
              <li className="text-slate-400 mt-1">
                {" "}
                Databases & SQL for Data Analysis
              </li>
              <li className="text-slate-400 mt-1">
                {" "}
                Fundamentals of Python for Data Analysis & Data Analysis with
                Python & Data Visualization with Python
              </li>
              <li className="text-slate-400 mt-1">
                {" "}
                Power BI for Data Analysis [ ETL in Power BI, Data Modeling in
                Power BI, Data Analysis and Visualization with Power BI ]
              </li>
              <li className="text-slate-400 mt-1">
                {" "}
                Tableau for Data Analysis
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
