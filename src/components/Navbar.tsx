"use client";

import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const path = usePathname();
  const hide = path === "/certificates";

  if (hide) {
    return (
      <nav className="w-full h-[80px] bg-background flex justify-end items-center px-6">
        <Link
          href="/"
          className="text-sm md:text-base font-medium text-accent hover:underline transition-colors"
        >
          Home
        </Link>
      </nav>
    );
  }

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "/CV.pdf", label: "Download CV", download: "Hassan_Abdulahi_CV" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-background/80 backdrop-blur-md border-b border-border/40 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-[80px] px-6">
        {/* Logo / Name */}
        <Link
          href="/"
          className="text-xl md:text-2xl font-bold text-primary tracking-tight"
        >
          Hassan Abdulahi
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden sm:flex gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                download={link.download}
                className="text-sm md:text-base text-muted-foreground hover:text-accent transition-colors duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden text-foreground hover:text-accent transition-colors"
        >
          {isOpen ? (
            <AiOutlineClose size={26} />
          ) : (
            <RxHamburgerMenu size={26} />
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <ul className="sm:hidden flex flex-col items-center bg-background border-t border-border/40 py-6 gap-6 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                download={link.download}
                onClick={() => setIsOpen(false)}
                className="text-base text-muted-foreground hover:text-accent transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
