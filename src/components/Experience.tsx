import React from "react";

const Experience = () => {
  const experiences = [
    {
      company: "Rotoy",
      position: "Intern",
      duration: "6 Months",
      techStack: "Next.js, Prisma, SQL",
      Description:
        "During my internship, I contributed to the startup by developing their landing page, helping potential customers to explore their company. I also assisted in building their web-based gaming platform. Throughout the internship, I worked in an agile environment where Scrum practices were followed.",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center py-16 bg-background text-text  mb-4">
      <h1 className="text-4xl md:text-5xl text-center md:text-start font-bold mb-12">
        Work Experience
      </h1>
      <div className="w-full max-w-3xl flex flex-col gap-8 px-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 p-4 border-l-4 border-accent bg-white shadow-md rounded-md hover:scale-110 transition-transform transform "
          >
            <h2 className="text-2xl font-semibold text-accent">
              {exp.company}
            </h2>
            <p className="text-lg font-medium">
              {" "}
              <span className="font-bold">Position:</span> {exp.position}
            </p>
            <p className="text-lg">
              {" "}
              <span className="font-bold">Duration: </span>
              {exp.duration}
            </p>
            <p className="text-lg text-secondaryAccent">
              <span className="font-bold">Tech Stack:</span> {exp.techStack}
            </p>
            <div>
              <p className="font-bold">Description</p>
              <p className="text-secondaryAccent">{exp.Description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
