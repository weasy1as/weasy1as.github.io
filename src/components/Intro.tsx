import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Intro = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-background text-text px-4">
      <div className="text-center flex flex-col gap-6">
        <h1 className="relative text-2xl md:text-5xl xl:text-6xl font-bold overflow-hidden whitespace-nowrap pb-2">
          <span className="absolute text-center inset-0 bg-background animate-typewriter"></span>
          Hey, I am Hassan Abdulahi 👋
        </h1>
        <h2 className="text-2xl md:text-4xl font-semibold text-secondaryAccent">
          Welcome to my portfolio
        </h2>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-xs sm:max-w-md lg:max-w-lg mx-auto px-4 sm:px-6">
          I am a newly graduated, motivated, and curious software engineer. I
          thrive in teamwork and am always ready to keep learning.
        </p>

        <div className="flex gap-6 justify-center mt-4">
          <a
            className="text-black hover:text-accent transition-transform transform hover:scale-110"
            href="https://www.linkedin.com/in/hassan-abdulahi-80125529a"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={50} />
          </a>
          <a
            className="text-black hover:text-accent transition-transform transform hover:scale-110"
            href="https://github.com/weasy1as"
            aria-label="GitHub"
          >
            <FaGithub size={50} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
