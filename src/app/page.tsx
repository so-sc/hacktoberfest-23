import React from "react";
import About from "@/components/About/page";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import TextSlide from "@/components/TextSlide/page";
import Themes from "@/components/Themes";
import gsap from "gsap";
import Flowchart from "@/components/Flowchart/page";
import styles from "@/components/About/About.module.css";
import DateComponent from "@/components/DateComponent";
import Rewards from "@/components/Rewards";
import Judges from "@/components/Judges";
import Link from "@/components/Links";

import Sponsors from "@/components/Sponsors";

export default function Home() {
  const images = [
    {
      src: "/assets/icons/13@1x.png",
      alt: "logo",
      className: `w-60 sm:visible invisible pr-40 md:ml-0 ml-5 md:p-14 ${styles.float} mt-[45rem] absolute`,
    },
    {
      src: "/assets/icons/04@1x.png",
      alt: "logo",
      className: `w-60 pl-40 md:mr-0 mr-5 md:p-14 ${styles.float1} absolute right-0 mt-[60rem]`,
    },

    {
      src: "/assets/icons/13@1x.png",
      alt: "logo",
      className: `visible sm:invisible w-60 pr-40 md:ml-0 ml-5 md:p-14 ${styles.float2} absolute mt-[75rem]`,
    },
    {
      src: "/assets/icons/12@1x.png",
      alt: "logo",
      className: `w-60 pl-40 md:mr-0 mr-5 md:p-14 ${styles.float1} absolute md:mt-[125rem] mt-[167rem] right-0`,
    },
    {
      src: "/assets/icons/03@1x.png",
      alt: "logo",
      className: `w-60 pr-40 md:ml-0 ml-5 md:p-14 ${styles.float} absolute md:mt-[180rem] mt-[200rem]`,
    },
    {
      src: "/assets/icons/07@1x.png",
      alt: "logo",
      className: `w-60 pl-40 md:mr-0 mr-5 md:p-14 ${styles.float1} absolute mt-[245rem] md:mt-[213rem] right-0`,
    },
  ];

  return (
    <main className="min-h-screen">
      <div className="-z-20">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className={image.className}
          />
        ))}
      </div>
      <section id="home">
        <Hero />
      </section>
      <section id="date">
        <DateComponent />
      </section>
      <TextSlide />
      <div id="about">
        <About />
      </div>
      <section id="flowchart">
        <Flowchart />
      </section>
      <section id="themes">
        <Themes />
      </section>
      <section id="prizes">
        <Rewards />
      </section>
      {/* <section id="judges">
        <Judges />
      </section> */}
      <Sponsors />
      <Footer />
    </main>
  );
}
