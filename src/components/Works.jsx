/* eslint-disable react/prop-types */
import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { translations } from "../assets/translations/lang";
import { choosenLangstate } from "../Recoil/Atomes";
import { useRecoilValue } from "recoil";
import ProjectCard from "./ProjectCard";

const Works = () => {

  const {lang}= useRecoilValue(choosenLangstate)

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>{translations[lang]['work']['title']}</p>
        <h2 className={`${styles.sectionHeadText}`}>{translations[lang]['work']['subtitle']}</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          {translations[lang]['work']['description']}
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index} {...project}
            lang={lang}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");