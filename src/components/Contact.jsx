import React, {useState, useRef} from 'react'
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import {styles} from '../styles';
import {SectionWrapper} from '../hoc';
import { slideIn } from '../utils/motion';
import cvlink from '../assets/CV_Legleye_Alexandre.pdf'
import { useRecoilValue } from "recoil";
import { choosenLangstate } from "../Recoil/Atomes";
import { translations } from "../assets/translations/lang";



const Contact = () => {

  const {lang}= useRecoilValue(choosenLangstate)
  const ApiKey = import.meta.env.VITE_EMAIL_KEY

  const formRef = useRef();
  const [form,setForm] = useState({
    name:'',
    email:'',
    message:'',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const {name, value} = e.target

    setForm({ ...form, [name] : value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)
    emailjs.send(
      'service_ukl77wc',
      'template_uhl1zsg',
      {
        from_name : form.name,
        to_name: 'Alexandre',
        from_email: form.email,
        to_email: 'alexandre.legleye@gmail.com',
        message: form.message
      },
      ApiKey
    )
      .then(() => {
        setLoading(false);
        alert(translations[lang]["contact"]["success"]);

        setForm({
          name:'',
          email:'',
          message:'',
        })
      }, (error) => {
        setLoading(false)
        console.log(error);
        alert(translations[lang]["contact"]["error"])
      })
  }

  return (
    <div  className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn('left',"tween", 0.2,1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>
          {translations[lang]["contact"]["title"]} / <a className="text-white" href={cvlink} target='_blank' rel="noreferrer"> {translations[lang]["contact"]["cv"]} </a>
        </p>
        <h3 className={styles.sectionHeadText}>
        Contact
        </h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>
              {translations[lang]["contact"]["nameLabel"]}
            </span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder={translations[lang]["contact"]["namePlaceHolder"]}
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>
              {translations[lang]["contact"]["emailLabel"]}
            </span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder={translations[lang]["contact"]["emailPlaceHolder"]}
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>
              {translations[lang]["contact"]["messageLabel"]}
            </span>
            <textarea
              rows='7'
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder={translations[lang]["contact"]["messagePlaceHolder"]}
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 outlined-none w-fit text-white font-bold shadow-md shadow-primary rounded-2xl'
          >
            {loading ?  translations[lang]["contact"]["inProgress"] :  translations[lang]["contact"]["submit"]}
          </button>

        </form>

      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact')