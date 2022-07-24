import "./App.css";
import Navbar from "./pages/Navbar";
import Info from "./pages/Info";
import About from "./pages/About";
import Testimonial from "./pages/Testimonial";
import Work from "./pages/Work";
import Skills from "./pages/Skills";
import ContactUs from "./pages/ContactUs";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="">
      <Navbar />
      <div className="container px-7 md:px-4 lg:px-28 xl:px-7 max-w-6xl m-auto">
        <Routes>
          {/* <Route exact path="/" element={<Info />} /> */}
          <Route exact path="about" element={<About />} />
          <Route exact path="testimonial" element={<Testimonial />} />
          <Route exact path="project" element={<Work />} />
          <Route exact path="skills" element={<Skills />} />
          <Route exact path="contact" element={<ContactUs />} />
        </Routes>
        <Info />
        <About />
        <Testimonial />
        <Work />
        <Skills />
        <ContactUs />
      </div>
    </div>
  );
}

export default App;
