
import './App.css';
import Navbar from './pages/Navbar';
import Info from "./pages/Info"
import About from './pages/About';
import Testimonial from './pages/Testimonial';
import Work from './pages/Work';
import Skills from './pages/Skills';
import ContactUs from './pages/ContactUs';
function App() {
  return (
    <div className=''>
      <Navbar />
      <div className='container px-7 md:px-4 lg:px-28 xl:px-7 max-w-6xl m-auto'>
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
