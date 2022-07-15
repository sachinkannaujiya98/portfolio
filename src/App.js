
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
    < div className=' container mx-auto'>
    <Navbar/>
    <Info/>
    <About/>
    <Testimonial/>
    <Work/>
    <Skills/>
    <ContactUs/>
    </div>
  );
}

export default App;
