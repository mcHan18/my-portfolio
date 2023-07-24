/* eslint-disable react/no-unescaped-entities */
import LinkedIn from "../assets/socials/linkedin.svg";
import GitHub from "../assets/socials/github.svg";
import Book from "../assets/curriculum-vitae.png";
import { TypeAnimation } from "react-type-animation";
import { useState, useEffect } from "react";

// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
import React from "react";

const Home = () => {
  const textSequence = [
    "I will be attending to CSA program at NEU in 2023 fall.",
    "I worked as a Data Scientist for 3 years at SF Technology in China.",
    "I was graduated from Columbia University in 2021, majoring in Statistics.",
    "I was graduated from Hunan University in 2019, China, majoring in Statistics.",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    if (currentIndex < textSequence.length) {
      const text = textSequence[currentIndex];
      let charIndex = 0;

      const timer = setInterval(() => {
        setCurrentText((prevText) => prevText + text[charIndex]);
        charIndex++;

        if (charIndex === text.length) {
          clearInterval(timer);
          setTimeout(() => {
            setCurrentText("");
            setCurrentIndex((prevIndex) => prevIndex + 1);
          }, 1500); // Delay before showing the next text
        }
      }, 35); // Speed at which characters appear

      return () => clearInterval(timer);
    }
  }, [currentIndex]);

  return (
    <div className="hero my-8 md:py-8 px-7 relative" id="home">
      {/* Hero info */}
      <div className="h-screen flex items-center justify-center">
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-center md:w-1/2"
        >
          <h1 className="text-primary text-5xl font-extrabold tracking-wider mb-8">
            Hey, I'm
          </h1>
          <h1 className="text-primary text-5xl font-extrabold tracking-wider mb-8">
            Mengchen Wang
          </h1>
          {textSequence.slice(0, currentIndex + 1).map((text, index) => (
            <React.Fragment key={index}>
              <TypeAnimation
                sequence={text}
                speed={50}
                style={{ fontSize: "1.5em", display: "block" }}
                repeat={0}
                className="font-semibold text-transparent leading-10 bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500"
              />
              <br />
            </React.Fragment>
          ))}
        </motion.div>
      </div>

      {/* Hero socials */}
      <div className="bg-white w-20 rounded py-1 px-2 absolute left-0 top-48 hidden md:block">
        <div className="my-1">
          <a
            href="https://www.linkedin.com/in/mcwang1027"
            className="p-3 hover:bg-slate-400 block rounded transition-all duration-500"
            target="_blank"
          >
            <img src={LinkedIn} alt="" className="w-10 h-10" />
          </a>
        </div>
        <div className="my-1">
          <a
            href="https://github.com/mcHan18"
            className="p-3 hover:bg-slate-400 block rounded transition-all duration-500"
            target="_blank"
          >
            <img src={GitHub} alt="" className="w-10 h-10" />
          </a>
        </div>
        <div className="my-1">
          <a
            href="https://drive.google.com/file/d/1W0pEaL65s6OzR2lDdY_Wlixf0xI2b2jl/view?usp=drive_link"
            className="p-3 hover:bg-slate-400 block rounded transition-all duration-500"
            target="_blank"
          >
            <img src={Book} alt="" className="w-10 h-10" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
