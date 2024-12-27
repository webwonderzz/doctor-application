import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Doctors from "./components/Doctors";
import Appointment from "./components/Appointment";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  return (
    <>
      <Navbar />
      <About />
      <Doctors />
      <Appointment />
      <Contact />
    </>



  );
}

export default App;
