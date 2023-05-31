import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import { motion } from "framer-motion"

import 'react-vertical-timeline-component/style.min.css'
import { styles } from "../styles"
import {experiences} from '../constants'
import {SectionWrapper} from '../hoc'
import { textVariant } from "../utils/motion"
import { useRecoilValue } from "recoil";
import { choosenLangstate } from "../Recoil/Atomes";
import { translations } from "../assets/translations/lang";

const ExperienceCard =({experience, lang}) => (

  <VerticalTimelineElement
    contentStyle={{background: '#1d1836', color:'#fff'}}
    contentArrowStyle={{borderRight:'7px solid #232631'}}
    date={experience.date[lang]}
    iconStyle={{background:experience.iconBg}}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain"
    
        />
      </div>
    }
  >
    <div>
      <h3
        className="text-white text-[24px] font-bold"
      >{experience.title[lang]}</h3>
      <p
        className="text-secondary text-{16px] font-semibold"
        style={{margin:0}}
      >{experience.company_name}</p>
    </div>
    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience['points'][lang].map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className="text-white-100 text-[14px] pl-1 tracking-wider"
        >
          {point}
        </li> 
      ))}
    </ul>
  </VerticalTimelineElement> 
)

const Experience = () => {

  const {lang}= useRecoilValue(choosenLangstate)

  return (
    <>
      <motion.div
        variants={textVariant()}
      >
        <p className={styles.sectionSubText}>{translations[lang]['experience']['title']}</p>
        <h2 className={styles.sectionHeadText}>{translations[lang]['experience']['subtitle']}</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience,index) => (
            <ExperienceCard
              key={index}
              experience={experience}
              lang={lang}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, 'work')