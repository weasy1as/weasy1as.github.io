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

      <div className=" bg-white border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow text-left">
        <div className="flex items-center gap-4 mb-4">
          <div className="text-accent text-3xl">
            <FaUniversity />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-primary">
              Education: Software Technology
            </h2>
            <p className="text-sm text-secondaryAccent italic">
              Title: Bachelor of Engineering
            </p>
          </div>
        </div>
      </div>

      <p className="text-secondaryaccent text-center text-md md:text-2xl md:max-w-3xl mx-auto px-6 ">
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
