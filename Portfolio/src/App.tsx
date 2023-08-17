import { useState } from 'react';
import NavBar from './Components/NavBar';
import Home from './Pages/Home';


function App() {
  const [count, setCount] = useState(0)

  return (

    <div className="flex flex-col gap-2 items-center text-center self-center max-w-[1500px] mt-[200px] dark:bg-[#000300] 
  dark:text-white border-8 border-[#dda74f] py-40 px-4 md:mx-auto mx-10">
      <NavBar />
      <Home />
    </div>

  )
}

export default App
