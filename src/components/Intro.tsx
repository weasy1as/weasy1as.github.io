import Image from "next/image";
import Link from "next/link";
import React from "react";

const Intro = () => {
  /* <Link
            href="/CV.pdf"
            download="Hassan_Abdulahi_CV"
            className=" bg-accent text-black rounded-md text-xl font-semibold hover:underline hover:text-gray-500 hover:scale-110 transition-all duration-300"
          >
            Download My CV
          </Link>
          */
  return (
    <div className="flex flex-col md:flex-row justify-center items-center h-screen gap-20">
      <div className="w-[320px] h-[320px] rounded-full overflow-hidden">
        <Image
          alt="cv image"
          src="/cv-billede.jpg"
          width={320}
          height={320}
          className="object-cover w-full h-full"
        />
      </div>

      <div className="flex flex-col items-center md:items-start gap-3">
        <div>
          <p className="text-primary text-lg font-medium mb-2">{`Hello, I'm`}</p>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white leading-tight tracking-tighter mb-3">
            Hassan Abdulahi
          </h1>
          <h2 className="text-xl text-gray-600 dark:text-gray-400 font-medium mb-6">
            Software Developer
          </h2>
        </div>
        <p className="text-black dark:text-gray-300 mb-8 max-w-md mx-auto md:mx-0 px-6 md:px-0">
          Passionate about crafting clean code and intuitive user experiences.
          Eager to contribute to innovative projects and grow as a developer.
        </p>
        <div className="flex justify-center gap-4 text-center ">
          <Link
            href="/CV.pdf"
            download="Hassan_Abdulahi_CV"
            className="bg-accent border-2 border-black min-w-[180px] h-[50px] px-6 font-bold hover:bg-black hover:text-white text-md rounded-[32px] text-black flex items-center justify-center transition-all duration-300"
          >
            Download CV
          </Link>

          <Link
            href="#contact"
            className="bg-black text-white min-w-[180px] h-[50px] px-6 font-bold hover:bg-white hover:text-black hover:border-2 hover:border-black text-md rounded-[32px] flex items-center justify-center transition-all duration-300"
          >
            Contact Info
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Intro;
