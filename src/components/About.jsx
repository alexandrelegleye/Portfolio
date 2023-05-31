import React, { Fragment } from "react";

import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import {fadeIn, textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc'
import { useRecoilValue } from "recoil";
import { choosenLangstate } from "../Recoil/Atomes";
import { translations } from "../assets/translations/lang";
import ServiceCard from "./ServiceCard";


// eslint-disable-next-line react/prop-types
const About = ({test}) => {

  console.log('test',test);
  const {lang}= useRecoilValue(choosenLangstate)

  return (
    <>
      <motion.div
        variants={textVariant()}
      >
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>{translations[lang]['about']['title']}</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        {translations[lang]['about']['description'].map((text) => {
          return(
            <Fragment key={text}>
              {text}
              <br />
            </Fragment>
            
          )}
        )}
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service,index) => (
          <ServiceCard
            key={service['title'][lang]}
            index={index} {...service}
            lang={lang}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")