// Todo: Bring in the required import from 'react-router-dom'
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import Footer from "./components/Footer";

import "./styles/index.css";

function App() {
  return (
    <>
      <Header />
      <SectionOne />
      <Outlet />
      <SectionTwo />
      <Footer />
    </>
  );
}

export default App;
