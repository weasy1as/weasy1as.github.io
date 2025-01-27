import React from "react";

const Certificate = () => {
  return (
    <div className="w-full flex flex-col items-center py-16 bg-background text-text px-6">
      <a
        href="/certificates"
        className="flex flex-col gap-4 p-6 border-l-4 border-accent bg-white shadow-lg rounded-lg hover:shadow-xl hover:scale-[1.03] transition-transform transform duration-200 cursor-pointer"
      >
        <h1
          id="skills"
          className="font-bold text-3xl sm:text-4xl md:text-5xl hover:text-blue-500"
        >
          Certificates
        </h1>
      </a>
    </div>
  );
};

export default Certificate;
