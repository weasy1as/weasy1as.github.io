"use client";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="bg-[#6c757d] w-full h-[80px] flex justify-end sm:justify-center md:justify-end items-center gap-8 pr-10 sm:pr-16">
      <button
        onClick={handleOpen}
        className="sm:hidden text-white cursor-pointer bg-transparent"
      >
        {isOpen ? <AiOutlineClose size={30} /> : <RxHamburgerMenu size={30} />}
      </button>

      <ul className="hidden sm:flex gap-4">
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
      {isOpen && (
        <ul className="absolute top-[80px] left-0 w-full h-[20vh] bg-[#6c757d] flex flex-col flex-wrap gap-6 p-6 sm:hidden">
          <li>
            <a
              href="#about"
              className="text-xl text-white font-semibold hover:text-accent transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              About Me
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="text-xl text-white font-semibold hover:text-accent transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-xl text-white font-semibold hover:text-accent transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="/CV.pdf"
              download="Hassan_Abdulahi_CV"
              className="text-xl text-white font-semibold hover:text-accent transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              Download My CV
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
