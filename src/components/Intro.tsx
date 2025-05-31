import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

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

      <div className="flex flex-col gap-3">
        <div>
          <h1 className="relative text-center text-2xl md:text-2xl font-bold overflow-hidden whitespace-nowrap pb-2">
            <span className="text-sm absolute text-center inset-0 bg-background animate-typewriter"></span>
            <span className="text-secondaryAccent font-semibold font-sans">
              Hello I am
            </span>
            <br />
            <span className=" text-2xl md:text-4xl font-bold text-black font-sans">
              Hassan Abdulahi
            </span>
          </h1>
          <h2 className="text-xl font-sans text-center text-secondaryAccent">
            Software engineer
          </h2>
        </div>

        <div className="flex justify-center gap-4 text-center">
          <Link
            href="/CV.pdf"
            download="Hassan_Abdulahi_CV"
            className="bg-accent border-2 w-auto border-black p-4 font-bold hover:bg-black hover:text-white text-md rounded-[32px] text-black transition-all duration-300"
          >
            Download My CV
          </Link>

          <Link
            href="/CV.pdf"
            download="Hassan_Abdulahi_CV"
            className="bg-gray-800 w-auto h-[50px] text-white  p-4 font-bold hover:bg-black hover:text-white text-md rounded-[32px] transition-all duration-300"
          >
            Download My CV
          </Link>
        </div>

        <div className="flex gap-6 justify-center mt-4">
          <a
            className="text-black hover:text-accent transition-transform transform hover:scale-110"
            href="https://www.linkedin.com/in/hassan-abdulahi-80125529a"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            className="text-black hover:text-accent transition-transform transform hover:scale-110"
            href="https://github.com/weasy1as"
            aria-label="GitHub"
          >
            <FaGithub size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
