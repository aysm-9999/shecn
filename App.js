import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./home";
import About from "./about";

import "./home.css"
function App() {
  return (
    <BrowserRouter>
      <a href="https://shecanfoundation.org/donate" ><button className="butt"
      >join us</button></a>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

      </Routes>
      <footer className="footer">&copy; she can foundation all rights reseved</footer>
    </BrowserRouter>
  );
}

export default App;