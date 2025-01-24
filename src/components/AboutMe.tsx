import React from "react";
import { FaUniversity } from "react-icons/fa";

const AboutMe = () => {
  return (
    <div className="flex flex-col gap-8 justify-center items-center mb-12 ">
      <h1
        id="about"
        className="text-4xl md:text-5xl text-center md:text-start font-bold mb-12"
      >
        About Me
      </h1>

      <div className="flex flex-col  gap-6 p-6 m-6 border-l-4 border-accent bg-white shadow-md rounded-lg hover:shadow-lg hover:scale-[1.05] transition-transform duration-300 ease-in-out">
        <FaUniversity className="w-full flex justify-center" size={40} />
        <h2 className="text-xl font-bold text-primary italic">
          Education: Software Technology
        </h2>
        <div className="flex gap-3 italic">
          <p className="text-lg font-semibold">Title:</p>
          <p className="text-lg text-secondaryAccent">
            Bachelor of Engineering
          </p>
        </div>
      </div>

      <p className="text-secondaryaccent text-md md:text-lg md:max-w-3xl mx-auto px-6 ">
        I am a newly graduated software engineer, eager to step into the
        professional world and make a meaningful contribution to the tech
        industry. I have a passion for technology and development, and I’m
        always ready to learn and grow. While I’m at the beginning of my
        journey, I’m committed to expanding my skills and becoming the best
        software engineer I can be. I thrive in collaborative environments and
        create innovative solutions, and build applications that make a
        difference. I’m excited about the road ahead and am fully prepared to
        dedicate myself to becoming a well-rounded and impactful developer.
      </p>
    </div>
  );
};

export default AboutMe;
