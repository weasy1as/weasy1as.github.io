"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3, FaReact, FaGithub, FaJava } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { DiMongodb, DiPostgresql } from "react-icons/di";
import { SiSpringboot, SiPrisma, SiOpenai } from "react-icons/si";

import { HoverEffect } from "@/components/ui/card-hover-effect";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      items: [
        {
          title: "HTML5",
          description: "Semantic, accessible, and SEO-friendly markup.",
          icon: <FaHtml5 className="text-orange-500" />,
        },
        {
          title: "CSS3",
          description: "Responsive layouts and modern UI styling.",
          icon: <FaCss3 className="text-blue-500" />,
        },
        {
          title: "React",
          description: "Component-driven UI development.",
          icon: <FaReact className="text-cyan-400" />,
        },
        {
          title: "Next.js",
          description: "Full-stack React framework for production apps.",
          icon: <RiNextjsFill className="text-black dark:text-white" />,
        },
        {
          title: "Tailwind CSS",
          description: "Utility-first styling with design consistency.",
          icon: <RiTailwindCssFill className="text-sky-400" />,
        },
      ],
    },
    {
      title: "Backend",
      items: [
        {
          title: "Java",
          description: "Strong OOP fundamentals and backend logic.",
          icon: <FaJava className="text-[#007396]" />,
        },
        {
          title: "Spring Boot",
          description: "REST APIs and scalable backend services.",
          icon: <SiSpringboot className="text-[#6DB33F]" />,
        },
        {
          title: "Prisma",
          description: "Type-safe database access layer.",
          icon: <SiPrisma className="text-violet-500" />,
        },
        {
          title: "PostgreSQL",
          description: "Relational database design & queries.",
          icon: <DiPostgresql className="text-blue-500" />,
        },
        {
          title: "MongoDB",
          description: "NoSQL document-based data storage.",
          icon: <DiMongodb className="text-green-500" />,
        },
      ],
    },
    {
      title: "Tools & AI",
      items: [
        {
          title: "GitHub",
          description: "Version control, collaboration, CI workflows.",
          icon: <FaGithub className="text-gray-800 dark:text-gray-200" />,
        },
        {
          title: "OpenAI API",
          description: "AI-powered features and integrations.",
          icon: <SiOpenai className="text-purple-500" />,
        },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="w-full py-24 px-6 bg-gradient-to-b from-background to-muted/20"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h2 className="text-sm uppercase tracking-widest text-purple-400 font-semibold mb-3">
          Tech Stack
        </h2>
        <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
          Skills & Technologies
        </h1>
        <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto">
          Tools and technologies I’ve worked with while building full-stack
          applications.
        </p>
      </motion.div>

      {/* Skill Sections */}
      <div className="max-w-6xl mx-auto space-y-24">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
              {category.title}
            </h3>

            <HoverEffect
              items={category.items.map((item) => ({
                title: (
                  <div className="flex flex-col items-center gap-3">
                    {/* Icon */}
                    <div className="text-4xl transition-transform duration-300 group-hover:scale-110">
                      {item.icon}
                    </div>

                    {/* Name */}
                    <span className="text-sm font-medium text-muted-foreground">
                      {item.title}
                    </span>
                  </div>
                ),
                description: item.description,
              }))}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
