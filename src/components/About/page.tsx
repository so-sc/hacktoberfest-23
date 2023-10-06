"use client";
import TypingAnimation from "@/components/TextAnimation/TextType";
import styles from "./About.module.css";
import Link from "next/link";

const Events = () => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="tracking-wider py-5 md:py-20 w-full">
          <div
            className={`gradient_border h-full md:p-20 p-10 lg:mx-32 md:m-20 m-10 md:my-0 my-0 lg:my-0 backdrop-blur-sm bg-[#d1f2f9] bg-opacity-5`}
          >
            <h1 className="font-jbExtrabold mb-5 text-3xl">
              <TypingAnimation message="About" />
            </h1>
            <div className="font-jbRegular text-sm md:text-base leading-8">
              {"Hack Night is a flagship event organized by "}
              <span className="hover:drop-shadow-[0_0_0.2rem_#d2b863] transition duration-300">
                <Link
                  className="underline drop-shadow-[0_0_0.2rem_#460a07] leading-8 transition duration-300 underline-offset-8"
                  href="https://www.sosc.org.in/"
                  target="_blank"
                >
                  Sahyadri Open Source Community (SOSC)
                </Link>{" "}
              </span>
              in celebration of Hacktoberfest 2023
            </div>
            <p className="py-5 leading-8 font-jbRegular text-sm md:text-base">
              Hacktoberfest is open to everyone in our global community. Whether
              you&apos;re new to development, a student or a long-time
              contributor, you can help drive growth of open source and make
              positive contributions to an ever-growing community. All
              backgrounds and skills levels are encouraged to complete the
              challenge.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
