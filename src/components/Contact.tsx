import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="flex flex-col justify-center items-center border-2 border-black p-6 w-auto">
      <div className="flex flex-col justify-center items-center">
        <h2 className="font-sans text-gray-500">Get in touch</h2>
        <h1 className="text-3xl md:text-4xl text-black xl:text-5xl text-center md:text-start font-bold mb-12">
          Contact me
        </h1>
      </div>

      <div className="flex gap-3">
        <div className="flex gap-3 items-center">
          <MdEmail
            className="hover:text-accent transition-transform  transform hover:scale-110"
            size={30}
          />{" "}
          <p className="font-sans">Hassan04@live.dk</p>
        </div>
        <div className="flex gap-3 items-center">
          {" "}
          <a
            className="text-black hover:text-black  hover:text-accent transition-transform transform hover:scale-110"
            href="https://www.linkedin.com/in/hassan-abdulahi-80125529a"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={30} />
          </a>{" "}
          <p className="font-sans">LinkedIn</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
