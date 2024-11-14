import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon, iconsizeh = '50', iconsizew = '40', desc }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", 0.6 * index, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[350px] flex flex-col justify-evenly items-center'
      >
        <img
          src={icon}
          alt={`${title}-icon`}
          className={`w-${iconsizew} h-${iconsizeh} object-contain`} // Dynamic size,  iconsize is not specified, it will default
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>

        <p className='text-white text-[14px] text-center mt-2 leading-[22px] opacity-80'>
          {desc}
        </p>
      </div>
    </motion.div>
  </Tilt>
);


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.2, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] sm:text-justify'
      >
        I’m a dedicated full-stack developer with expertise in front-end 
        and back-end technologies, working across JavaScript frameworks, 
        distributed systems, and machine learning-based computer vision. 
        My skillset includes a strong foundation in requirements engineering, 
        stakeholder engagement, and project management for seamless end-to-end development. 
        With entrepreneurial experience and a problem-solving mindset, I have actively participated 
        in entrepreneurship competitions and launched community-focused startup projects. 
        Additional to my Bsc in software Engineering, I'm pursuing a Marketing Management degree 
        to add a business perspective to my technical insights.

      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
