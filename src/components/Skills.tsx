import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaCss3 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { DiPostgresql } from "react-icons/di";

const Skills = () => {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 size={80} className="text-orange-600" /> },
    { name: "CSS3", icon: <FaCss3 size={80} className="text-blue-600" /> },
    { name: "React", icon: <FaReact size={80} className="text-cyan-500" /> },
    {
      name: "Tailwind CSS",
      icon: <RiTailwindCssFill size={80} className="text-blue-400" />,
    },
    {
      name: "Next.js",
      icon: (
        <RiNextjsFill size={80} className="text-gray-800 dark:text-white" />
      ),
    },
    {
      name: "GitHub",
      icon: <FaGithub size={80} className="text-gray-800 dark:text-white" />,
    },
    {
      name: "MongoDB",
      icon: <DiMongodb size={80} className="text-green-500" />,
    },
    {
      name: "PostgreSQL",
      icon: <DiPostgresql size={80} className="text-blue-500" />,
    },
  ];
  return (
    <div className="w-full flex flex-col justify-center items-center gap-4 mb-12 ">
      <h1 className="font-bold text-5xl">Skills</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 pt-12 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col text-center items-center gap-2 hover:scale-110"
          >
            <div> {skill.icon}</div>
            <p className="text-lg font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
