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
        <div className="flex justify-center items-center">
          <img src="/assets/sponsors/mlh-logo.svg" className="w-40" alt="mlh" />
        </div>
      </div>
    </div>
  );
};

export default Events;
