import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import SectionWrapper from "../hoc/SectionWrapper";
const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        </div>
      </motion.div>
      {title}
    </Tilt>
  );
};

const About = () => {
  return (
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
      <motion.p
        variants={fadeIn("", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Welcome to my portfolio! I'm a proactive B.Tech IT student from Walchand
        College of Engineering, Sangli. Proficient in HTML, CSS, and JS, I've
        crafted this website to showcase my skills. With a keen interest in
        front-end development, my projects highlight a fusion of creativity and
        technical prowess. From interactive designs to seamless user
        experiences, each piece reflects my dedication to mastering web
        development. Explore my journey as I combine innovation and code to
        shape the digital world.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </motion.div>
  );
};

export default SectionWrapper(About,"about");
