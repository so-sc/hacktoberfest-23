"use client";
import TypingAnimation from "@/components/TextAnimation/TextType";
import styles from "./About.module.css";
import Link from "next/link";

const Events = () => {
  return (
    <div>
      {/* <div className="flex justify-center items-center">
        <div className="tracking-wider py-5 md:py-20 w-full">
          <div
            className={`gradient_border h-full md:p-20 p-10 lg:mx-32 md:m-20 m-10 md:my-0 my-0 lg:my-0 backdrop-blur-sm bg-[#d1f2f9] bg-opacity-5`}
          >
            <h1 className="font-jbExtrabold mb-5 text-3xl">
              <TypingAnimation message="About" />
            </h1>
            <div className="font-jbRegular text-sm md:text-base leading-8">
              {"Hacktober Fest is a premier flagship event organised by "}
              <span className="hover:drop-shadow-[0_0_0.2rem_#d2b863] transition duration-300">
                <Link
                  className="underline drop-shadow-[0_0_0.2rem_#460a07] leading-8 transition duration-300 underline-offset-8"
                  href="https://www.sosc.org.in/"
                  target="_blank"
                >
                  Sahyadri Open Source Community (SOSC)
                </Link>{" "}
              </span>
              every year every year. Conducted exclusively in the month of
              October, HacktoberFest is a 2-day event, with a wide reach across
              several colleges in the region, witnessing participation from over
              100+ teams and over 1000 participants.
            </div>
            <p className="pt-5 leading-8 font-jbRegular text-sm md:text-base">
              The event shall include a 24-hour hackathon, wherein students
              shall have a wide variety of themes. Festering an atmosphere of
              learning, exploring and networking, Hacktober Fest is
              one-of-a-kind in terms of hackathons, being organised completely
              by students.
            </p>
            <p className="py-5 leading-8 font-jbRegular text-sm md:text-base">
              Hacktober Fest is gearing up to be one of the most anticipated and
              exciting hackathons of the year!
            </p>
          </div>
        </div>
      </div> */}
      <div className="md:px-20 mb-20 px-10 lg:px-32">
        <h1 className="my-10 py-5 md:py-10 text-center text-4xl md:text-5xl font-jbExtrabold">
          <TypingAnimation message="About" />
        </h1>
        <div>
          <div className="font-jbRegular md:text-lg leading-8">
            {"Hacktober Fest is a premier flagship event organised by "}
            <span className="hover:drop-shadow-[0_0_0.2rem_#d2b863] transition duration-300">
              <Link
                className="underline drop-shadow-[0_0_0.2rem_#460a07] leading-8 transition duration-300 underline-offset-4"
                href="https://www.sosc.org.in/"
                target="_blank"
              >
                Sahyadri Open Source Community (SOSC)
              </Link>{" "}
            </span>
            every year every year. Conducted exclusively in the month of
            October, Hacktober Fest is a 2-day event, with a wide reach across
            several colleges in the region, witnessing participation from over
            100+ teams and over 1000 participants.
          </div>
          <div className="font-jbRegular pt-10 md:text-lg leading-8">
            The event shall include a 24-hour hackathon, wherein students shall
            have a wide variety of themes. Festering an atmosphere of learning,
            exploring and networking, Hacktober Fest is one-of-a-kind in terms
            of hackathons, being organised completely by students.
          </div>
          <div className="font-jbRegular pt-10 md:text-lg leading-8">
            Hacktober Fest is gearing up to be one of the most anticipated and
            exciting hackathons of the year!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
