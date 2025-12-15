"use client";

import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const contactMethods = [
  {
    title: "Email",
    icon: <MdEmail size={28} />,
    link: "mailto:hassan04@live.dk",
    text: "hassan04@live.dk",
    color: "text-blue-500",
  },
  {
    title: "LinkedIn",
    icon: <FaLinkedin size={28} />,
    link: "https://www.linkedin.com/in/hassan-abdulahi-80125529a",
    text: "LinkedIn",
    color: "text-blue-600",
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col justify-center items-center py-24 px-6 bg-gradient-to-b from-background to-muted/20"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-16 max-w-3xl"
      >
        <h2 className="text-sm uppercase tracking-widest text-white font-semibold mb-2">
          Get in Touch
        </h2>
        <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
          Contact Me
        </h1>
        <p className="text-muted-foreground text-base md:text-lg">
          I’m always open to discussing new opportunities or collaborations.
          Feel free to reach out!
        </p>
      </motion.div>

      {/* Contact Methods */}
      <div className="grid sm:grid-cols-2 gap-8 max-w-xl w-full">
        {contactMethods.map((method, idx) => (
          <motion.a
            key={idx}
            href={method.link}
            target={method.title === "LinkedIn" ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className="group bg-card/80 backdrop-blur-md border border-border/30 rounded-2xl p-6 flex items-center gap-4 cursor-pointer shadow-sm hover:shadow-lg transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <div
              className={cn(
                "p-3 rounded-full bg-muted group-hover:bg-accent/10 transition-all",
                method.color
              )}
            >
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="flex items-center justify-center"
              >
                {method.icon}
              </motion.div>
            </div>
            <span className="text-foreground font-medium group-hover:text-accent transition-colors">
              {method.text}
            </span>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
