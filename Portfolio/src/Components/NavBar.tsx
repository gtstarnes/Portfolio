

const NavBar = () => {
  return (
    <>
    
    
    <nav className="flex justify-between">
        <p className="text-[#dda74f] font-bold ml-4 mt-2">GREGORY STARNES</p>
        <ul className="flex gap-4 mt-2 pr-4">
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
        </ul>
    </nav>
    
    <nav className="fixed border-r-2 h-screen top-0 w-[50%]">
        <p className="text-[#dda74f] font-bold ml-4 mt-2">GREGORY STARNES</p>
        <ul className="flex flex-col gap-2 ml-4 mt-10">
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
        </ul>
        <p className="font-bold mb-2 ml-4 mt-10">CONTACT</p>
        <ul className="ml-4">
            <li>Email: gtstarnes@gmail.com</li>
            <li>LinkedIn</li>
            <li>GitHub</li>
        </ul>
    </nav>
    </>
  )
}

export default NavBar