import Image from "next/image";
import Hero from "./sections/Hero";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Services from "./sections/Services";
import Testimonials from "./sections/Testimonials";
import Pricing from "./sections/Pricing";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className='min-h-screen p-6 w-full bg-light text-dark'>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  );
}
