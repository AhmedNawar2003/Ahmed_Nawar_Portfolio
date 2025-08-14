import { FaLaptopCode } from "react-icons/fa";

export default function Courses() {
  const courses = [
    {
      title: "Front-End Development Course",
      details: [
        "Instant Software Solutions • 2024",
        "Meta Front-End Professional Certificate Track",
        "React Basics, JavaScript, HTML & CSS in Depth, Version Control",
      ],
    },
    {
      title: "Data Analysis Course",
      details: [
        "Data Analysis Diploma – AMIT • 2025",
        "Introduction to Data Analysis",
        "Excel Basics & Excel for Data Analysis & Data Visualization with Excel",
        "Databases & SQL for Data Analysis",
        "Fundamentals of Python for Data Analysis & Data Analysis with Python & Data Visualization with Python",
        "Power BI for Data Analysis [ETL, Data Modeling, Data Analysis & Visualization]",
        "Tableau for Data Analysis",
      ],
    },
  ];

  return (
    <section className="py-4 md:py-12 text-white" id="courses & certifications">
      <div className="container mx-auto px-4">
        <h2 className="md:text-3xl font-bold flex items-center gap-2 mb-8">
          <FaLaptopCode className="text-green-400" />
          Courses & Certifications
        </h2>

        <div className="relative border-l border-slate-700 pl-6">
          {courses.map((course, index) => (
            <div key={index} className="mb-10 relative">
              {/* Timeline Dot */}
              <div className="absolute left-[-18px] top-2 w-3 h-3 bg-green-500 rounded-full border-4 border-gray-950"></div>

              {/* Course Title */}
              <h3 className="md:text-xl font-semibold">{course.title}</h3>

              {/* Course Details */}
              <ul className="m-2 list-disc list-inside">
                {course.details.map((detail, i) => (
                  <li
                    key={i}
                    className={`mt-1 ${
                      i === 0 ? "text-white" : "text-slate-400"
                    }`}
                  >
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
