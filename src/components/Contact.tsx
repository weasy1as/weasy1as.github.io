import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col justify-center items-center py-20 px-6 bg-gradient-to-b from-background to-muted/20"
    >
      <div className="text-center mb-10">
        <h2 className="text-muted-foreground uppercase tracking-wider text-sm mb-2">
          Get in touch
        </h2>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary">
          Contact Me
        </h1>
        <p className="mt-3 text-black text-base max-w-md mx-auto">
          I’m always open to discussing new opportunities or collaborations.
          Feel free to reach out!
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 items-center">
        {/* Email */}
        <a
          href="mailto:hassan04@live.dk"
          className="flex items-center gap-3 group"
        >
          <div className="p-3 rounded-full bg-muted group-hover:bg-accent/10 transition-all">
            <MdEmail
              size={28}
              className="text-accent group-hover:scale-110 transition-transform text-blue-500"
            />
          </div>
          <span className="text-base font-medium text-primary group-hover:text-accent transition-colors">
            Hassan04@live.dk
          </span>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/hassan-abdulahi-80125529a"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 group"
        >
          <div className="p-3 rounded-full bg-muted group-hover:bg-accent/10 transition-all">
            <FaLinkedin
              size={28}
              className="text-blue-600 group-hover:scale-110 transition-transform"
            />
          </div>
          <span className="text-base font-medium text-primary group-hover:text-accent transition-colors">
            LinkedIn
          </span>
        </a>
      </div>
    </section>
  );
};

export default Contact;
