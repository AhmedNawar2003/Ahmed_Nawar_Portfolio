import Image from "next/image";
import Link from "next/link";
import { FiDownload } from "react-icons/fi"; 

export default function Hero() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="w-full md:w-1/2 flex justify-center ">
          <Image
            src="/images/abonawar_img.png"
            priority={true}
            alt="Ahmed Nawar"
            width={300}
            height={300}
            className="object-cover background-transparent rounded-full shadow-lg border-4 border-blue-500 transition-all duration-500 ease-in-out cursor-grab"
          />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h2 className="md:text-2xl font-bold text-white capitalize">
            My Name is Ahmed Nawar
          </h2>
          <p className="mt-4 md:text-lg text-white capitalize">
            Front-End Developer Specialized in building responsive web
            Applications
          </p>

          <Link
            href={"/assets/AHMED NAWAR (Last CV).pdf"}
            download
            className="mb-5 md:mb-0 inline-flex items-center gap-2 mt-6 bg-blue-500 hover:bg-blue-800 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-all duration-500"
          >
            <FiDownload className="md:text-xl" /> <span className="md:text-xl">Download CV</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
