import { AiFillLinkedin, AiFillGithub, AiOutlineMenu, AiOutlineClose, AiFillMail } from 'react-icons/ai';
import { useState } from 'react';

const NavBar = () => {
    const [menu, setMenu] = useState<boolean>(false);
    const handleMenuClick = () => {
        setMenu(!menu);
    }

  return (
    <>
    
    
    <nav className="flex justify-between w-full sm:border-2 pb-4">
        <p className="text-[#dda74f] font-bold ml-4 mt-2 text-xl">GREGORY STARNES</p>
        <ul className="sm:flex gap-4 hidden mt-2 pr-4 text-lg">
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
        </ul>
        <div className="block sm:hidden">
        {!menu ? <AiOutlineMenu className="mr-4 mt-[13px]" onClick={handleMenuClick} size={20} /> : <AiOutlineClose className="mr-4 mt-[13px]" onClick={handleMenuClick} size={20} />}
        </div>
    </nav>
    
    <nav className={menu ? "bg-white border-r-2 fixed h-screen top-0 w-[60%]" : "fixed left-[-100%]" }>
        <p className="text-[#dda74f] font-bold ml-4 mt-2 text-xl">GREGORY STARNES</p>
        <ul className="flex flex-col gap-4 ml-4 mt-10 text-lg w-[60%]">
            <li className="border-b-2 pb-4">Home</li>
            <li className="border-b-2 pb-4">About</li>
            <li>Projects</li>
        </ul>
        <p className="text-lg font-bold mb-2 ml-4 mt-20">CONTACT</p>
            <div className="flex gap-2 ml-3 mt-2">
                <AiFillGithub size={30} />
                <a href="https://www.linkedin.com/in/gregory-starnes/" target="_blank"><AiFillLinkedin size={30} /></a>
                <a href="mailto:gtstarnes@gmail.com"><AiFillMail size={30} /></a>
            </div>

    </nav>
    </>
  )
}

export default NavBar