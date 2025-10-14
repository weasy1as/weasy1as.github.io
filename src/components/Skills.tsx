import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaCss3 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { DiPostgresql } from "react-icons/di";
import { FaJava } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import Marquee from "react-fast-marquee";

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
      icon: <RiNextjsFill size={80} className="text-gray-800" />,
    },
    {
      name: "GitHub",
      icon: <FaGithub size={80} className="text-gray-800 " />,
    },
    {
      name: "MongoDB",
      icon: <DiMongodb size={80} className="text-green-500" />,
    },
    {
      name: "PostgreSQL",
      icon: <DiPostgresql size={80} className="text-blue-500" />,
    },
    {
      name: "Java",
      icon: <FaJava size={80} className="text-[#007396]" />,
    },
    {
      name: "Spring Boot",
      icon: <SiSpringboot size={80} className="text-[#6DB33F]" />,
    },
  ];
  return (
    <div className="w-full flex flex-col justify-center items-center gap-4 mb-12 ">
      <h1 id="skills" className="font-bold text-5xl">
        Skills
      </h1>
      <Marquee
        gradient={false}
        speed={45}
        className=" py-6 space-x-10 overflow-hidden"
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center mx-8 transition-transform duration-300 hover:scale-110"
          >
            {skill.icon}
            <p className="text-base md:text-lg font-medium mt-3 text-muted-foreground">
              {skill.name}
            </p>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Skills;
