import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./component/Home"
import AboutUs from "./component/Aboutus"
import Explore from "./component/Explore"

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
