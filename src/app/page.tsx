import About from "@/components/About/page";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import TextSlide from "@/components/TextSlide/page";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TextSlide />
      <About />
      <Footer />
    </main>
  );
}
