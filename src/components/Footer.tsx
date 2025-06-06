"use client";
import { usePathname } from "next/navigation";
import React from "react";

const Footer = () => {
  const path = usePathname();
  const hide = path === "/certificates";

  if (hide) {
    return null;
  }
  return (
    <div className="w-full flex flex-col justify-center items-center p-6">
      <div className="gap-8">
        <div>
          <ul className="flex gap-4 my-12 ">
            <li>
              <a
                href="#about"
                className=" bg-accent text-black rounded-md text-xl font-sans hover:text-gray-400  hover:scale-110 transition-all duration-300"
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className=" bg-accent text-black rounded-md text-xl font-sans hover:text-gray-400  hover:scale-110 transition-all duration-300"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className=" bg-accent text-black rounded-md text-xl font-sans hover:text-gray-400  hover:scale-110 transition-all duration-300"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="/CV.pdf"
                download="Hassan_Abdulahi_CV"
                className=" bg-accent text-black rounded-md text-xl font-sans hover:text-gray-400 hover:scale-110 transition-all duration-300"
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
