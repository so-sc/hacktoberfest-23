"use client";
import Image from "next/image";
import TypingAnimation from "@/components/TextAnimation/TextType";
import styles from "@/components/About/About.module.css";

interface CardProps {
  message: string;
}

export default function Rewards() {
  const images = [
    {
      src: "/assets/icons/13@1x.png",
      alt: "logo",
      className: `w-60 pr-40 md:ml-0 ml-5 md:p-14 ${styles.float} sm:mt-[0rem] mt-[30rem] absolute`,
    },
    {
      src: "/assets/icons/04@1x.png",
      alt: "logo",
      className: `w-60 pl-40 md:mr-0 mr-5 md:p-14 ${styles.float1} absolute right-0 mt-[15rem]`,
    },
  ];
  return (
    <div>
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
      <div className="md:px-20 mb-10 md:mb-36 px-10 lg:px-32">
        <h1 className="my-10 md:py-0 text-center text-3xl md:text-4xl lg:text-5xl font-jbExtrabold">
          <TypingAnimation message="Amazing Rewards" />
        </h1>
        <div className="grid md:grid-cols-3 gap-10">
          <Card message="Card 1 Text" />
          <Card message="Card 2 Text" />
          <Card message="Card 3 Text" />
        </div>
      </div>
    </div>
  );
}

function Card({ message }: CardProps) {
  return (
    <div>
      <div className="mt-5 p-0.5 rounded-2xl hover:drop-shadow-[0_0_0.2rem_#d2b863] bg-gray-600 font-jbMedium hover:bg-gradient-to-tr from-[#ec4237] via-[#d2b863] to-[#33b6d8] transition duration-300">
        <div className=" bg-[#0f0913] rounded-2xl hover:drop-shadow-[0_0_0.2rem_#460a07] transition duration-300 underline-offset-8">
          <div className="backdrop-blur-sm py-5 rounded-2xl bg-[#d1f2f9] bg-opacity-5">
            <div className="p-5 text-center transition duration-300">
              {message}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
