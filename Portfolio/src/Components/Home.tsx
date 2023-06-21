import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiJavascript, DiReact } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si"

const Home = () => {
  return (
    <div className="flex flex-col gap-2 items-center min-w-[600px] w-full mt-[300px] dark:bg-[#000300] dark:text-white">
        <p className="text-6xl flex-nowrap md:text-7xl lg:text-8xl text-[#dda74f] font-bold">GREGORY STARNES</p>
        <p className="text-3xl md:text-4xl lg:text-5xl">FRONT-END WEB DEVELOPER</p>
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