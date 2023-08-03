// Todo: Bring in the required import from 'react-router-dom'
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import AboutMe from "./pages/AboutMe";
import Footer from "./components/Footer";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";

import "./styles/index.css";

function App() {
  return (
    <>
      <Header />
      <SectionOne />
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <SectionTwo />
      <Footer />
    </>
  );
}

export default App;
