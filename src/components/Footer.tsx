"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const path = usePathname();
  const hide = path === "/certificates";

  if (hide) return null;

  return (
    <footer className="w-full bg-background border-t border-border/40 py-10 px-6 flex flex-col items-center justify-center">
      {/* Navigation Links */}
      <ul className="flex flex-wrap justify-center gap-6 mb-6">
        {[
          { href: "#about", label: "About" },
          { href: "#skills", label: "Skills" },
          { href: "#projects", label: "Projects" },
          {
            href: "/CV.pdf",
            label: "Download My CV",
            download: "Hassan_Abdulahi_CV",
          },
        ].map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              download={link.download}
              className="text-sm md:text-base font-medium text-muted-foreground hover:text-accent transition-colors duration-200"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Social Links */}
      <div className="flex gap-5 mb-6">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-accent transition-transform transform hover:scale-110"
          aria-label="GitHub"
        >
          <FaGithub size={22} />
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-accent transition-transform transform hover:scale-110"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={22} />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-xs md:text-sm text-muted-foreground text-center">
        © {new Date().getFullYear()} Hassan Abdulahi — All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
