import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  media,
  source_code_link,
}) => {
  // Helper function to check if the media is a video
  const isVideo = (media) => {
    return media && (media.endsWith(".mp4") || media.endsWith(".webm"));
  };

  // Function to handle navigation
  const handleNavigation = (source_code_link) => {
    if (source_code_link === "contact") {
      // Scroll to the contact section
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Open external link
      window.open(source_code_link, "_blank");
    }
  };

  return (
    <motion.div 
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1, 
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[450px] w-full flex flex-col min-h-[650px]'
      >
        <div className='relative w-full h-[230px]'>
          {isVideo(media) ? (
            <video
              src={media}
              autoPlay
              muted
              loop
              playsInline
              className='w-full h-full object-cover rounded-2xl'
            />
          ) : (
            <img
              src={media}
              alt='project_media'
              className='w-full h-full object-cover rounded-2xl'
            />
          )}

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => handleNavigation(source_code_link)}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5 flex-1'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          These projects highlight my dedication to delivering effective 
          solutions, merging functionality with innovation. Each showcases 
          my technical skills across various technologies and my commitment 
          to solving complex challenges. Linked repositories and demos reflect 
          my approach to building impactful, real-world applications with precision and adaptability.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-20'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
