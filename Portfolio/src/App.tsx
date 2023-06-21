import { useState } from 'react';
import NavBar from './Components/NavBar';
import Home from './Components/Home';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar />
    <Home />
    </>
  )
}

export default App
