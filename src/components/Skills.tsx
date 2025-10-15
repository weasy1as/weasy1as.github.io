"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3, FaReact, FaGithub, FaJava } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { DiMongodb, DiPostgresql } from "react-icons/di";
import { SiSpringboot, SiPrisma, SiOpenai } from "react-icons/si";
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS3", icon: <FaCss3 className="text-blue-500" /> },
        { name: "React", icon: <FaReact className="text-cyan-400" /> },
        {
          name: "Next.js",
          icon: <RiNextjsFill className="text-black dark:text-white" />,
        },
        {
          name: "Tailwind CSS",
          icon: <RiTailwindCssFill className="text-sky-400" />,
        },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Java", icon: <FaJava className="text-[#007396]" /> },
        {
          name: "Spring Boot",
          icon: <SiSpringboot className="text-[#6DB33F]" />,
        },
        { name: "Prisma", icon: <SiPrisma className="text-violet-500" /> },
        {
          name: "PostgreSQL",
          icon: <DiPostgresql className="text-blue-500" />,
        },
        { name: "MongoDB", icon: <DiMongodb className="text-green-500" /> },
      ],
    },
    {
      title: "Tools & AI",
      skills: [
        {
          name: "GitHub",
          icon: <FaGithub className="text-gray-800 dark:text-gray-200" />,
        },
        { name: "OpenAI API", icon: <SiOpenai className="text-purple-500" /> },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="w-full py-20 px-6 bg-gradient-to-b from-background to-muted/20 flex flex-col items-center justify-center"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-sm uppercase tracking-widest text-accent font-semibold mb-2">
          Tech Stack
        </h2>
        <h1 className="text-4xl md:text-5xl font-extrabold text-foreground">
          Skills & Technologies
        </h1>
        <p className="text-muted-foreground text-base md:text-lg mt-3">
          Tools and technologies I’ve worked with while building full-stack
          applications.
        </p>
      </motion.div>

      {/* Skill Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl w-full">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="group border-border/50 bg-card/80 backdrop-blur-md rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 md:p-8 flex flex-col items-center text-center gap-6">
                <h3 className="text-2xl font-bold text-accent">
                  {category.title}
                </h3>
                <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                  {category.skills.map((skill, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center gap-2 transition-transform duration-300 hover:scale-110"
                    >
                      <div className="text-4xl">{skill.icon}</div>
                      <p className="text-sm font-medium text-muted-foreground">
                        {skill.name}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
