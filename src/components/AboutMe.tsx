import React from "react";
import { FaUniversity } from "react-icons/fa";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center py-16 px-6 bg-gradient-to-b from-background to-muted/20"
    >
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-primary mb-10 tracking-tight">
        About Me
      </h1>

      {/* Info Card */}
      <div className="bg-card border border-border rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 max-w-2xl w-full p-6 md:p-8 mb-10">
        <div className="flex items-center gap-4 mb-3">
          <div className="text-accent text-3xl">
            <FaUniversity />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-foreground">
              Education: Software Technology
            </h2>
            <p className="text-sm text-muted-foreground italic">
              Bachelor of Engineering
            </p>
          </div>
        </div>
        <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
          Graduated with a strong foundation in software engineering principles,
          focusing on full-stack web development, object-oriented programming,
          and modern frameworks.
        </p>
      </div>

      {/* About Paragraph */}
      <div className="max-w-3xl text-center text-black text-base  md:text-lg leading-relaxed space-y-4">
        <p>
          I’m a newly graduated{" "}
          <span className="text-primary font-medium">Software Engineer</span>{" "}
          eager to step into the professional world and make a meaningful
          contribution to the tech industry.
        </p>
        <p>
          I have a strong passion for technology and development, and I’m always
          ready to learn, grow, and tackle new challenges. I thrive in{" "}
          <span className="text-primary font-medium">
            collaborative environments
          </span>{" "}
          where I can build innovative solutions that make a difference.
        </p>
        <p>
          My goal is to continue expanding my skills and become a well-rounded,
          impactful developer — one who builds software that is both technically
          solid and meaningful to its users.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
