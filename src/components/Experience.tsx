"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

const Experience = () => {
  const experiences = [
    {
      company: "Rotoy",
      position: "Intern – Software Developer",
      duration: "6 Months",
      techStack: ["Next.js", "Prisma", "SQL"],
      description:
        "Contributed to a web-based gaming platform and helped design and build their landing page. Collaborated in an agile team using Scrum methodologies, participating in sprints and code reviews.",
    },
    {
      company: "Nybilspris",
      position: "Intern – Web Developer",
      duration: "1 Month",
      techStack: ["Next.js", "NextAuth", "Prisma"],
      description:
        "Built a data management dashboard with CRUD functionality and integrated Google authentication via NextAuth. Worked closely with senior developers to improve user flow and performance.",
    },
  ];

  return (
    <section
      id="experience"
      className="w-full py-20 bg-gradient-to-b from-background to-muted/30"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Work Experience
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A look into the roles that shaped my growth as a developer and
            strengthened my technical foundation.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-border/40 ml-4 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative pl-8"
            >
              {/* Timeline marker */}
              <span className="absolute -left-[10px] top-2 w-5 h-5 rounded-full bg-gray-400 border-4 border-background shadow-md" />

              {/* Card */}
              <div className="bg-card border border-border/30 rounded-2xl shadow-sm hover:shadow-md transition-all p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <FaBriefcase className="text-accent text-xl" />
                    <h2 className="text-xl font-semibold text-foreground">
                      {exp.company}
                    </h2>
                  </div>
                  <span className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full font-medium">
                    {exp.duration}
                  </span>
                </div>

                <p className="text-sm font-medium text-muted-foreground mb-4">
                  {exp.position}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {exp.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
