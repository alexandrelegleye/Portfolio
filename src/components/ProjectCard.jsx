/* eslint-disable react/prop-types */
import React from "react";
import Tilt from 'react-parallax-tilt';
import { motion } from "framer-motion";

import { github, html } from "../assets";
import { fadeIn } from "../utils/motion";


const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  deploy_link,
  lang,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >


        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover gap-1'>
            
            {/* Web Link */}
            { deploy_link &&
            <div
              onClick={() => window.open(deploy_link, "_blank")}
              className='black-gradient w-7 h-7 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={html}
                alt='source code'
                className='w-3/4 h-3/4 object-contain'
              />
            </div>
            }

            {/* Github Link */}
            {source_code_link &&
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-7 h-7 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-3/4 h-3/4 object-contain'
              />
            </div>
            }

          </div>
        </div>
       

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description[lang]}</p>
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

export default ProjectCard