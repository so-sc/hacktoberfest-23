"use client";
import TypingAnimation from "@/components/TextAnimation/TextType";
import styles from "./About.module.css";
import Link from "next/link";

const Events = () => {
  return (
    <div>
      <div className="md:px-20 my-10 py-5 md:py-10 mb-20 px-10 lg:px-32">
        {/* <h1 className="text-center my-10 py-5 md:py-10 text-4xl md:text-5xl font-jbExtrabold">
          <TypingAnimation message="About" />
        </h1> */}
        <div className="flex space-x-10 sm:space-x-20 md:space-x-32 justify-center items-center">
          <img
            src="/assets/sponsors/scem-logo.png"
            className="md:w-32 w-24"
            alt="scem"
          />
          <img
            src="/assets/sponsors/mlh-logo.svg"
            className="md:w-40 w-32"
            alt="mlh"
          />
        </div>
      </div>
    </div>
  );
};

export default Events;
