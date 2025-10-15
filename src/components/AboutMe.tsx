"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaUniversity, FaLaptopCode } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="w-full py-20 px-6 bg-gradient-to-b from-background to-muted/20 flex flex-col items-center justify-center"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16 max-w-3xl"
      >
        <h2 className="text-sm uppercase tracking-widest text-accent font-semibold mb-2">
          Who Am I
        </h2>
        <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
          About Me
        </h1>
        <p className="text-muted-foreground text-base md:text-lg">
          A passionate and detail-oriented software engineer with a love for
          building intuitive digital experiences and solving real-world problems
          through clean code.
        </p>
      </motion.div>

      {/* Education / Highlights */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="max-w-2xl w-full mb-12"
      >
        <Card className="border-border/50 shadow-sm hover:shadow-md transition-all duration-300 rounded-2xl">
          <CardContent className="p-6 md:p-8 flex items-start gap-5">
            <div className="p-3 bg-accent/10 text-accent rounded-xl text-3xl">
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
                OOP, and modern frameworks such as Next.js and Spring Boot.
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* About Paragraph */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-3xl text-center space-y-5 text-muted-foreground text-base md:text-lg leading-relaxed"
      >
        <p>
          I’m a{" "}
          <span className="text-foreground font-medium">software engineer</span>{" "}
          who loves turning complex ideas into simple, elegant solutions. I
          enjoy working on projects that challenge me to learn new technologies
          and improve my design thinking.
        </p>
        <p>
          Collaboration is at the core of how I work. I thrive in{" "}
          <span className="text-foreground font-medium">team environments</span>{" "}
          where developers, designers, and product thinkers work together to
          build meaningful software.
        </p>
        <p>
          My goal is to continue growing as a developer who creates{" "}
          <span className="text-accent font-medium">
            impactful, human-centered
          </span>{" "}
          applications that solve real problems and inspire users.
        </p>
      </motion.div>

      {/* Optional Icon Divider */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-12 text-accent text-3xl"
      >
        <FaLaptopCode />
      </motion.div>
    </section>
  );
};

export default AboutMe;
