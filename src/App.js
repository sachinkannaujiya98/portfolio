import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import Info from "./Component/info/Info";
import About from "./Component/About/About";
import Testimonial from "./Component/Testimonial/Testimonial";
import Work from "./Component/work/Work";
import Skills from "./Component/skills/Skills";
import ContactUs from "./Component/Contact/ContactUs";
import Footer from "./Component/footer";

function App() {

  return (
    <>
      <Navbar />
      <div className="container px-7 md:px-4 lg:px-28 xl:px-7 max-w-6xl m-auto">
        <Info />
        <About />
        <Testimonial />
        <Work />
        <Skills />
        <ContactUs />
      </div>
      <Footer />
    </>
  );
}

export default App;
