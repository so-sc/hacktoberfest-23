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
      <div className="pt-20 md:pb-10 pb-20 px-5 text-center">
        <h1 className="md:text-4xl text-2xl font-jbExtrabolditalic">
          Registration Opening Soon
        </h1>
        <p className="font-jbExtrabold text-2xl mt-4">{"Stay tuned ;)"}</p>
      </div>
      <About />
      <Footer />
    </main>
  );
}
