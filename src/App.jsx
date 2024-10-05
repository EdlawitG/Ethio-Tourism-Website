import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Home"
import AboutUs from "./Aboutus"
import Explore from "./Explore"

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<AboutUs/>}/>
      <Route path="/explore" element={<Explore/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
