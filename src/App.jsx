import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import MovingLine from "./components/MovingLine";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Designs from "./sections/Designs";
import Blog from "./sections/Blog";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <MovingLine />
      <About />
      <Skills />
      <Projects />
      <Designs />
      <Blog />
      <Contact />
      <Footer className="py-6 text-center text-gray-500 text-sm">
        &copy; 2024 Fahmida Khan Oyshi. All rights reserved.
      </Footer>
    </>
  );
}