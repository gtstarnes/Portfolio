import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiJavascript, DiReact } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si"

const Home = () => {
  return (
    <div className="
      flex flex-col gap-2 items-center text-center self-center
      max-w-[1500px] mt-[200px]
      dark:bg-[#000300] dark:text-white 
      border-8 border-[#dda74f]
       py-40 px-4 md:mx-auto mx-10"
    >
        <p className="text-6xl md:text-7xl lg:text-8xl text-[#dda74f] font-bold">GREGORY STARNES</p>
        <p className="text-3xl md:text-4xl lg:text-5xl">FRONT-END <span className="inline-block">WEB DEVELOPER</span></p>
        <ul className="flex lg:mt-6 md:mt-6 md:gap-6 lg:gap-8">
            <li><AiFillHtml5 size={60} className="md:scale-125 lg:scale-150 dark:text-[#dda74f]"/></li>
            <li><DiCss3 size={60} className="md:scale-125 lg:scale-150 dark:text-[#dda74f]" /></li>
            <li><DiJavascript size={60} className="md:scale-125 lg:scale-150 dark:text-[#dda74f]" /></li>
            <li><DiReact size={60} className="md:scale-125 lg:scale-150 dark:text-[#dda74f]" /></li>
            <li><SiTailwindcss size={60} className="md:scale-125 lg:scale-150 dark:text-[#dda74f]" /></li>
        </ul>
    </div>
  )
}

export default Home