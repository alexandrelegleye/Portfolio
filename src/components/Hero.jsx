import { motion } from "framer-motion"
import { styles } from "../styles"
import ComputerImage from "../assets/ibm_computer_1981.jpg"
import { useRecoilValue } from "recoil"
import { choosenLangstate } from "../Recoil/Atomes"
import { translations } from "../assets/translations/lang"

const Hero = () => {

  const {lang}= useRecoilValue(choosenLangstate)
  const textContent = translations[lang]['hero']

  return (
    <section className="relative w-full h-full mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7x1 mx-auto flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className="w-5 h-5 rounded-full bg-[#915eff]"/>
          <div className="w-1 sm:h-80 h-40 violet-gradient"/>
        </div>

        <div>
          <h1
            className={`${styles.heroHeadText} text-white`}
          >{textContent['title']}<br/>          
            <span className="text-[#915eff]">Alexandre</span>
          </h1>
          <p
            className={`${styles.heroSubText} mt-2 text-white-100`}
          >
            {textContent['job']} 
            <br
              className="sm:block hidden"/>
            {textContent['jobSubtitle']} 
          </p>
        </div>
      </div>
      <img src={ComputerImage} alt='old computer image' />
     
      <div className="absolute bottom-10 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 30, 0],
              }}
              transition={{
                duration:1.5,
                repeat:Infinity,
                repeatType:'loop'
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero