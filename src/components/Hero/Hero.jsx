import Image from "next/image";
import Link from "next/link";
import { FiDownload } from "react-icons/fi";
import AnimatedName from "./../AnimatedName";

export default function Hero() {
  return (
    <section className="py-10 md:py-16 mt-10">
      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="w-full md:w-1/2 flex justify-center ">
          <Image
            src="/images/abonawar_img.png"
            priority
            alt="Ahmed Nawar"
            width={300}
            height={300}
            className="object-cover background-transparent rounded-full shadow-lg border-4 border-blue-500 transition-all duration-500 ease-in-out cursor-grab"
          />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h2 className="flex flex-col md:flex-row md:items-center md:gap-2 md:text-2xl  text-white capitalize">
            My Name is <AnimatedName />
          </h2>
          <p className="mt-4 md:text-lg text-white capitalize">
            Data Analyst | Frontend Developer Skilled in Python, Excel, SQL,
            Power BI, React, Next.js. Turning data into insights and building
            responsive, high-performance web apps.
          </p>
          <Link
            href={"/assets/Ahmed Nawar CV Last Update.pdf"}
            download
            className="mb-5 md:mb-0 inline-flex items-center gap-2 mt-6 bg-blue-500 hover:bg-blue-800 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-all duration-500"
          >
            <FiDownload className="md:text-xl" />{" "}
            <span className="md:text-xl">Download CV</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
