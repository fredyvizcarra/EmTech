import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AccordionSection from "./components/AccordionSection";
import OurStudents from "./components/OurStudents";
import PartnersSection from "./components/PartnersSection";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <HeroSection />
        <AccordionSection />
        <OurStudents />
        <PartnersSection />
        <Footer />
      </main>
    </>
  );
}

export default App;
