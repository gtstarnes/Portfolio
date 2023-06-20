import { AiFillLinkedin, AiFillGithub, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';

const NavBar = () => {
    const {menu, setMenu} = useState(false);
    const handleMenuClick = () => {
        if (menu === false) {
            setMenu(true);
        }
        setMenu(false)
    }
    
  return (
    <>
    
    
    <nav className="flex justify-between">
        <p className="text-[#dda74f] font-bold ml-4 mt-2 text-xl">GREGORY STARNES</p>
        <ul className="flex gap-4 mt-2 pr-4">
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <AiOutlineMenu size={20} className="mt-[3px]" />
        </ul>
        
    </nav>
    
    <nav className="bg-white border-r-2 fixed h-screen lg:w-[25%] md:w-[40%] top-0 w-[60%]">
        <p className="text-[#dda74f] font-bold ml-4 mt-2 text-xl">GREGORY STARNES</p>
        <ul className="flex flex-col gap-2 ml-4 mt-10">
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
        </ul>
        <p className="font-bold mb-2 ml-4 mt-10">CONTACT</p>
        <div className="flex flex-col ml-4">
            <p>Email: gtstarnes@gmail.com</p>
            <div className="flex gap-2 mt-2">
                <AiFillGithub size={30} className=""></AiFillGithub>
                <AiFillLinkedin size={30} className=""></AiFillLinkedin>     
            </div>
        </div>
    </nav>
    </>
  )
}

export default NavBar