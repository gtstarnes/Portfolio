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
    <nav className="fixed top-[177px] justify-between w-full pb-4">

        <ul className="sm:flex sm:fixed sm:right-10 gap-4 hidden mt-2 pr-4 text-3xl">
            <li className="bg-[#000300] px-3 hover:text-[#dda74f]">Home</li>
            <li className="bg-[#000300] px-3 hover:text-[#dda74f]">About</li>
            <li className="bg-[#000300] px-3 hover:text-[#dda74f]">Projects</li>
        </ul>
        <div>
            <LuSunMoon size={40} className="fixed top-3 right-4 sm:right-[20px]" onClick={handleDarkMode} />
        </div>
        <div className="block sm:hidden">
        {!menu ? <AiOutlineMenu className="fixed top-[178px] right-4 mr-4 dark:bg-[#000300] bg-white mt-[13px]" onClick={handleClick} size={60} /> : <AiOutlineClose className="fixed top-[178px] right-4 mr-4 dark:bg-[#000300] bg-white mt-[13px]" onClick={handleClick} size={60} />}
        </div>
    </nav>
    
    <nav className={menu ? "bg-white dark:bg-[#000300] border-r-4 border-[#dda74f] dark:border-white  fixed flex flex-col justify-between h-full sm:hidden top-0 w-[60%] ease-in-out duration-100" : "fixed left-[-100%]" }>
        <ul className="flex flex-col gap-4 ml-4 mt-10 text-4xl w-[80%]">
            <li className="border-b-4 border-[#dda74f] pb-8">Home</li>
            <li className="border-b-4 border-[#dda74f] pb-8">About</li>
            <li>Projects</li>
        </ul>
        <footer className="mb-4">
        <p className="text-4xl mb-2 ml-4 mt-20">CONTACT</p>
            <div className="flex gap-4 ml-3 mt-4">
                <a href="https://github.com/gtstarnes" target="_blank">
                    <AiFillGithub size={50} className="hover:text-[#dda74f]" />    
                </a>
                <a href="https://www.linkedin.com/in/gregory-starnes/" target="_blank">
                    <AiFillLinkedin size={50} className="hover:text-[#dda74f]" />
                </a>
                <a href="mailto:gtstarnes@gmail.com">
                    <AiFillMail size={50} className="hover:text-[#dda74f]" />
                </a>
            </div>
        </footer>

    </nav>
    </>
  )
}

export default NavBar