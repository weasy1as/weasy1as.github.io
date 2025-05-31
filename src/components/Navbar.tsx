"use client";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const path = usePathname();
  const hide = path === "/certificates";

  if (hide) {
    return (
      <div className="bg-[#6c757d] w-full h-[80px] flex justify-center sm:justify-end md:justify-end items-center gap-8  sm:pr-16">
        <ul className="">
          <li>
            <Link
              href="/"
              className=" bg-accent text-white rounded-md text-xl font-semibold hover:text-black hover:scale-110 transition-all duration-300"
            >
              Home
            </Link>
          </li>
        </ul>
      </div>
    );
  }

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className=" mb-[150px] sm:mb-0 w-full h-[80px] flex justify-around items-center ">
      <div>
        <h1 className="text-3xl  font-sans">Hassan Abdulai</h1>
      </div>
      <button
        onClick={handleOpen}
        className="sm:hidden text-black cursor-pointer bg-transparent"
      >
        {isOpen ? <AiOutlineClose size={30} /> : <RxHamburgerMenu size={30} />}
      </button>

      <ul className="hidden sm:flex gap-4">
        <li>
          <Link
            href="#about"
            className="text-black bg-accent  rounded-md text-2xl font-sans hover:underline hover:text-gray-500 hover:scale-110 transition-all duration-300"
          >
            About Me
          </Link>
        </li>
        <li>
          <Link
            href="#skills"
            className=" bg-accent text-black rounded-md text-2xl font-sans hover:underline hover:text-gray-500 hover:scale-110 transition-all duration-300"
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            href="#Experience"
            className=" bg-accent text-black rounded-md text-2xl font-sans hover:underline hover:text-gray-500 hover:scale-110 transition-all duration-300"
          >
            Experience
          </Link>
        </li>
      </ul>
      {isOpen && (
        <ul className="absolute top-[80px]  w-auto h-auto bg-gray-200 flex flex-wrap gap-6 p-6 sm:hidden">
          <li>
            <Link
              href="#about"
              className="text-xl text-black font-semibold hover:text-accent transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              href="#skills"
              className="text-xl text-black font-semibold hover:text-accent transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              href="#experience"
              className="text-xl text-black font-semibold hover:text-accent transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              href="/CV.pdf"
              download="Hassan_Abdulahi_CV"
              className="text-xl text-black font-semibold hover:text-accent transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              Download My CV
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
