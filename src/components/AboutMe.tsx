"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaUniversity, FaLaptopCode } from "react-icons/fa";

import { BackgroundGradient } from "@/components/ui/background-gradient";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="w-full py-24 px-6 bg-gradient-to-b from-background to-muted/20 flex flex-col items-center justify-center mb-6"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-20 max-w-3xl"
      >
        <h2 className="text-sm uppercase tracking-widest text-purple-400 font-semibold mb-3">
          A little about me
        </h2>

        <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6">
          Building with intention and care
        </h1>

        <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
          I’m a software engineer who values clean architecture, thoughtful
          design, and collaboration — with a focus on creating products that
          genuinely help people.
        </p>
      </motion.div>

      {/* Education Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="max-w-2xl w-full mb-20"
      >
        <BackgroundGradient className="rounded-2xl p-[1px]">
          <div className="bg-background rounded-2xl p-6 md:p-8 flex items-start gap-5">
            <div className="p-3 bg-purple-500/10 text-purple-400 rounded-xl text-3xl">
              <FaUniversity />
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground">
                Bachelor of Engineering – Software Technology
              </h3>

              <p className="text-sm text-muted-foreground italic mb-2">
                University of Southern Denmark
              </p>

              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                Graduated with a strong foundation in full-stack development,
                object-oriented programming, and modern frameworks such as
                Next.js and Spring Boot.
              </p>
            </div>
          </div>
        </BackgroundGradient>
      </motion.div>
      {/* About Highlights */}
      <div className="max-w-xl w-full mb-16 space-y-6 text-muted-foreground text-base md:text-lg leading-relaxed text-center">
        <p>
          I’m a{" "}
          <span className="text-foreground font-medium">software engineer</span>{" "}
          who enjoys turning complex ideas into simple, elegant solutions. I
          love working on projects that encourage learning, experimentation, and
          thoughtful design.
        </p>

        <p>
          Collaboration sits at the heart of how I work. I thrive in{" "}
          <span className="text-foreground font-medium">team environments</span>{" "}
          where developers, designers, and product thinkers come together to
          build meaningful and well-crafted software.
        </p>

        <p>
          My goal is to continue growing as a developer who creates{" "}
          <span className="text-purple-400 font-medium">
            impactful, human-centered
          </span>{" "}
          applications that solve real problems and feel intuitive to use.
        </p>
      </div>

      {/* Floating Icon Divider */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="text-purple-400 text-3xl"
      >
        <FaLaptopCode />
      </motion.div>
    </section>
  );
};

export default AboutMe;
