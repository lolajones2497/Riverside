import { BrowserRouter, Routes, Route } from "react-router-dom";

// styles
import "./App.css";

// components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// pages
import Home from "./pages/home/Home";
import Calc from "./pages/calc/Calc";
import Contact from "./pages/contact/Contact";
import Services from "./pages/services/Services";
import Rock from "./pages/rock/Rock";
import Supplies from "./pages/supplies/Supplies";
import Turf from "./pages/turf/Turf";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calc" element={<Calc />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/servies" element={<Services />} />
          <Route path="/rock" element={<Rock />} />
          <Route path="/supplies" element={<Supplies />} />
          <Route path="/turf" element={<Turf />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
