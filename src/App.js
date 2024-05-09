import './App.css';
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Highlight from "./components/Highlight";
import Testimonial from "./components/Testimonial";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <main>
      <Nav />
      <Hero />
      <Highlight />
      <Testimonial />
      <About />
      <Footer />
    </main>
  );
}

export default App;
