import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"
import { Carousel } from "react-carousel3"

const Tech = () => {
  return (
    <div
      className="flex flex-row flex-wrap justify-center gap-10"
    >
      <Carousel autoPlay={true} width={500} height={400} yOrigin={42} yRadius={48}>

        {technologies.map((technology) => (
          <div
            className="w-28 h-28 flex"
            key={technology.name}
          >
            <img src={technology.icon} />
          </div>
        ))}

      </Carousel>
    

     
    </div>
  )
}

export default SectionWrapper(Tech,'technology')