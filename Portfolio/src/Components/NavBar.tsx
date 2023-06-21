import { AiFillLinkedin, AiFillGithub, AiOutlineMenu, AiOutlineClose, AiFillMail } from 'react-icons/ai';
import { LuSunMoon } from 'react-icons/lu';
import { useState } from 'react';

const NavBar = () => {
    const [menu, setMenu] = useState<boolean>(false);
    const [darkMode, setDarkMode] = useState<boolean>(false);
    const handleClick = () => {
        setMenu(current => !current);
    }

    {/* Accesses html element to add "dark" as a class if darkMode is true; removes it if false */}
    const handleDarkMode = () => {
        setDarkMode(!darkMode)
        if (darkMode) {
            document.documentElement.classList.remove("dark");
        } else {
            document.documentElement.className = "dark";
        }
       
    }
  return (
    <>
    <nav className="flex justify-between w-full border-b-2 dark:border-[#dda74f] drop-shadow-md pb-4">
        <p className="text-[#dda74f] font-bold ml-4 mt-2 text-xl">GREGORY STARNES PORTFOLIO</p>
        <ul className="sm:flex sm:fixed sm:right-10 gap-4 hidden mt-2 pr-4 text-lg">
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
        </ul>
        <div>
            <LuSunMoon size={20} className="fixed top-3 right-[50px] sm:right-[20px]" onClick={handleDarkMode} />
        </div>
        <div className="block sm:hidden">
        {!menu ? <AiOutlineMenu className="mr-4 mt-[13px]" onClick={handleClick} size={20} /> : <AiOutlineClose className="mr-4 mt-[13px]" onClick={handleClick} size={20} />}
        </div>
    </nav>
    
    <nav className={menu ? "bg-white dark:bg-[#000300] border-r-2 fixed h-full top-0 w-[60%] ease-in-out duration-200" : "fixed left-[-100%]" }>
        <p className="text-[#dda74f] font-bold ml-4 mt-2 text-xl"></p>
        <ul className="flex flex-col gap-4 ml-4 mt-10 text-lg w-[80%]">
            <li className="border-b-2 dark:border-[#dda74f] pb-4">Home</li>
            <li className="border-b-2 dark:border-[#dda74f] pb-4">About</li>
            <li>Projects</li>
        </ul>
        <p className="text-lg font-bold mb-2 ml-4 mt-20">CONTACT</p>
            <div className="flex gap-2 ml-3 mt-2">
                <a href="https://github.com/gtstarnes" target="_blank">
                    <AiFillGithub size={30} className="hover:text-[#dda74f]" />    
                </a>
                <a href="https://www.linkedin.com/in/gregory-starnes/" target="_blank">
                    <AiFillLinkedin size={30} className="hover:text-[#dda74f]" />
                </a>
                <a href="mailto:gtstarnes@gmail.com">
                    <AiFillMail size={30} className="hover:text-[#dda74f]" />
                </a>
            </div>

    </nav>
    </>
  )
}

export default NavBar