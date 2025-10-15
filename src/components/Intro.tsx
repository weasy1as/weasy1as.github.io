"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <section
      id="intro"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-14 md:gap-24 px-6 md:px-16 bg-gradient-to-b from-background to-muted/20 mt-[150px]"
    >
      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative group w-[260px] h-[260px] md:w-[320px] md:h-[320px] rounded-full overflow-hidden shadow-xl border-4 border-accent"
      >
        <Image
          src="/cv-billede.jpg"
          alt="Portrait of Hassan Abdulahi"
          width={320}
          height={320}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
        />
      </motion.div>

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ once: true }}
        className="flex flex-col text-center md:text-left items-center md:items-start max-w-lg"
      >
        <div className="flex flex-col items-center md:items-start gap-3">
          <div>
            <p className="text-primary text-lg font-medium mb-2">{`Hello, I'm`}</p>
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white leading-tight tracking-tighter mb-3">
              Hassan Abdulahi
            </h1>
            <h2 className="text-xl text-gray-600 dark:text-gray-400 font-medium mb-6">
              Software Developer
            </h2>
          </div>
          <p className="text-black dark:text-gray-300 mb-8 max-w-md mx-auto md:mx-0 px-6 md:px-0">
            Passionate about crafting clean code and intuitive user experiences.
            Eager to contribute to innovative projects and grow as a developer.
          </p>
          <div className="flex justify-center gap-4 text-center ">
            <Link
              href="/CV.pdf"
              download="Hassan_Abdulahi_CV"
              className="bg-accent border-2 border-black min-w-[180px] h-[50px] px-6 font-bold hover:bg-black hover:text-white text-md rounded-[32px] text-black flex items-center justify-center transition-all duration-300"
            >
              Download CV
            </Link>

            <Link
              href="#contact"
              className="bg-black text-white min-w-[180px] h-[50px] px-6 font-bold hover:bg-white hover:text-black hover:border-2 hover:border-black text-md rounded-[32px] flex items-center justify-center transition-all duration-300"
            >
              Contact Info
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Intro;
