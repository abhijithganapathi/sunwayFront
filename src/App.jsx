import "./App.css";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Header from "./Components/Nav/Header";
import Features from "./Components/Features/Features";
import Stats from "./Components/Stats/Stats.jsx";
import Faq from "./Components/FAQ/Faq.jsx";
import Testimonials from "./Components/Testimonials/Testimonials.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Gallery from "./Components/Gallery/Gallery.jsx";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Stats />
      <Features />
      <Gallery/>
      <Testimonials/>
      <Faq />
      <Contact/>
      <Footer />
    </>
  );
}

export default App;
