import React from "react";

const AboutMe = () => {
  return (
    <div className="flex flex-col gap-8 justify-center items-center mb-12 px-6">
      <h1 className="text-4xl md:text-5xl text-center md:text-start font-bold mb-12">
        About Me
      </h1>
      <p className="text-secondaryaccent text-sm md:text-lg md:max-w-3xl mx-auto ">
        A few years ago, I had no idea that programming would become such a big
        part of my life. I stumbled across it by chance, and once I started, I
        couldn’t stop. What began as a curious exploration soon turned into a
        deep passion for technology and software development. Though I’m still
        early in my journey, every project I work on excites me. The process of
        turning an idea into something real that people can use is incredibly
        rewarding. It’s amazing to see something I’ve built come to life and
        knowing it could have an impact on others. I’m constantly learning and
        growing, and while there’s still so much more to discover, the thrill of
        developing new things keeps me motivated. My goal is to continue
        building, improving my skills, and creating solutions that make a
        difference.
      </p>
    </div>
  );
};

export default AboutMe;
