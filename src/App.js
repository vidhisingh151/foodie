import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Menu from "./Components/Menu";
import CopyRight from "./Components/CopyRight"

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Work />
      <Menu/>
      <Testimonial />
      <Contact />
      <Footer />
      <CopyRight/>
    </div>
  );
}

export default App;
