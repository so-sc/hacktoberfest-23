import About from "@/components/About/page";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import TextSlide from "@/components/TextSlide/page";
import Themes from "@/components/Themes";
import gsap from "gsap";
import Flowchart from "@/components/Flowchart/page";
import styles from "@/components/About/About.module.css";

export default function Home() {
  return (
    <main>
      <Hero />
      <TextSlide />
      {/* <Themes /> */}
      {/* <div className="-z-20">
        <img
          src="/assets/icons/13@1x.png"
          alt="logo"
          className={`w-60 pr-40 md:ml-0 ml-5 md:p-14 ${styles.float} absolute`}
        />
        <img
          src="/assets/icons/14@1x.png"
          alt="logo"
          className={`w-60 pl-40 md:mr-0 mr-5 md:p-14 ${styles.float3} absolute mt-60 right-0`}
        />
        <img
          src="/assets/icons/06@1x.png"
          alt="logo"
          className={`w-60 pr-40 md:ml-0 ml-5 md:p-14 ${styles.float2} absolute mt-[30rem]`}
        />
        <img
          src="/assets/icons/04@1x.png"
          alt="logo"
          className={`w-60 pl-40 md:mr-0 mr-5 md:p-14 ${styles.float1} absolute right-0 mt-[45rem]`}
        />
        <img
          src="/assets/icons/13@1x.png"
          alt="logo"
          className={`w-60 pr-40 md:ml-0 ml-5 md:p-14 ${styles.float} absolute mt-[60rem]`}
        />
      </div>
      <Flowchart /> */}
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
