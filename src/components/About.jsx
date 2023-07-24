/* eslint-disable react/no-unescaped-entities */

import Headline from "../shared/Headline";
import skills from "../../skills.js";

// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const About = () => {
  return (
    <div className="max-w-7xl mx-auto my-14 md:py-8 px-7" id="about">
      <div>
        <Headline
          title={"ABOUT ME"}
          subtitle={
            "Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology"
          }
        />
        {/* About content */}
        <div className="flex flex-col md:flex-row items-start justify-start">
          {/* left side */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="md:w-1/2 my-8"
          >
            <h4 className="text-2xl font-bold mb-8">Get to know me!</h4>
            <div className="md:w-10/12 text-lg text-[#666] mb-8">
              <p className="mb-5">
                I am a <strong>Full Stack Developer</strong> and I will be
                joining the CSA program at NEU in the fall of 2023, where I am
                eager to further enrich my knowledge and skills in the field of
                computer science. And I am looking forward to find a summer
                intern in 2024!
              </p>

              <p className="mb-5">
                I had the privilege of working as a{" "}
                <strong>Data Scientist</strong> at SF Technology in Shenzhen,
                China. During my time there, I actively contributed to various
                data-driven projects by applying algorithms and developing
                models. That is my{" "}
                <a
                  href="https://www.linkedin.com/in/mcwang1027"
                  className="text-secondary font-bold underline"
                >
                  Linkedin
                </a>{" "}
                where I post useful content related to previous works. Also, you
                can download my{" "}
                <a
                  href="../../public/Mengchen_Resume.pdf"
                  className="text-secondary font-bold underline"
                >
                  Resume
                </a>{" "}
              </p>

              <p className="mb-5">
                I'm open to <strong>Job</strong> opportunities where I can
                contribute, learn and grow. If you have a good opportunity that
                matches my skills and experience then don't hesitate to{" "}
                <strong>contact</strong> me.
              </p>
            </div>

            {/* <button className='btn py-4 px-14'>Contact</button> */}
          </motion.div>

          {/* right side */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="md:w-1/2 my-8"
          >
            <h4 className="text-2xl font-bold mb-8">My Skills</h4>
            <div className="flex flex-wrap gap-3 md:w-10/12">
              {skills.map((skill) => (
                <p
                  key={skill.id}
                  className="bg-slate-300 text-light py-2 px-4 rounded"
                >
                  {skill.title}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
