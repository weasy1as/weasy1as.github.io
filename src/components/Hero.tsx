import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import Image from "next/image";
import { FaArrowDown } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div
        id="home"
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex flex-col-reverse gap-4 md:flex-row items-center justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-sm lg:max-w-[50vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Welcome to my personal portfolio
          </p>

          <TextGenerateEffect
            words=" Hi! I'm Hassan, a Fullstack Developer based in Denmark."
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Building modern, web applications
          </p>

          <a href="#about">
            <MagicButton
              title="Get to know me"
              icon={<FaArrowDown />}
              position="right"
            />
          </a>
        </div>
        <div className="relative group w-[260px] h-[260px] md:w-[320px] md:h-[320px] rounded-full overflow-hidden shadow-xl border-4 border-accent">
          <Image
            src="/cv-billede.jpg"
            alt="Portrait of Hassan Abdulahi"
            width={320}
            height={320}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
