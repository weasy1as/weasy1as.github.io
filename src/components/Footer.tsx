import React from "react";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[rgb(108,117,125)] w-full flex flex-col justify-center items-center p-6">
      <h1 className="text-3xl md:text-4xl text-white xl:text-5xl text-center md:text-start font-bold mb-12">
        Feel free to contact me at
      </h1>
      <div className="gap-8">
        <div className="flex justify-center gap-8">
          <div>
            <h2 className="text-lg text-center text-white underline">Email</h2>
            <a className="text-white" href="mailto:Hassan04@live.dk">
              Hassan04@live.dk
            </a>
          </div>

          <a
            className=" text-white hover:text-accent transition-transform transform hover:scale-110"
            href="https://www.linkedin.com/in/hassan-abdulahi-80125529a"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={50} />
          </a>
        </div>
        <div>
          <ul className="flex gap-4 my-12 ">
            <li>
              <a
                href="#about"
                className=" bg-accent text-white rounded-md text-xl font-semibold hover:text-black hover:scale-110 transition-all duration-300"
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className=" bg-accent text-white rounded-md text-xl font-semibold hover:text-black hover:scale-110 transition-all duration-300"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className=" bg-accent text-white rounded-md text-xl font-semibold hover:text-black hover:scale-110 transition-all duration-300"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="/CV.pdf"
                download="Hassan_Abdulahi_CV"
                className=" bg-accent text-white rounded-md text-xl font-semibold hover:text-black hover:scale-110 transition-all duration-300"
              >
                Download My CV
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-sm md:text-base mt-6 text-center">
        © {new Date().getFullYear()} Hassan Abdulahi. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
