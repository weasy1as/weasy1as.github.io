import React from "react";

const Navbar = () => {
  return (
    <div className="bg-[#6c757d] w-full h-[80px] flex justify-end items-center gap-8 pr-16">
      <a
        href="/CV.pdf"
        download="Hassan_Abdulahi_CV"
        className=" bg-accent text-white rounded-md text-xl font-semibold hover:text-black hover:scale-110 transition-all duration-300"
      >
        Download My CV
      </a>
    </div>
  );
};

export default Navbar;
