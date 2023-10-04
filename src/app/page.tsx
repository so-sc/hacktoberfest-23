import About from "@/components/About/page";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import TextSlide from "@/components/TextSlide/page";
import Themes from "@/components/Themes";
import gsap from "gsap";

export default function Home() {
  return (
    <main>
      <Hero />
      <TextSlide />
      <Themes/>
      <About />
      <Footer />
    </main>
  );
}
