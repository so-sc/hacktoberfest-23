"use client";
import Image from "next/image";
import TypingAnimation from "@/components/TextAnimation/TextType";
import styles from "@/components/About/About.module.css";

interface CardProps {
  message: string;
  prizes: string[];
  img: string;
}

export default function Rewards() {
  const images = [
    {
      src: "/assets/icons/05@1x.png",
      alt: "logo",
      className: `w-60 pl-40 md:mr-0 mr-5 md:p-14 ${styles.float1} absolute right-0 mt-[15rem]`,
    },
    {
      src: "/assets/icons/08@1x.png",
      alt: "logo",
      className: `w-60 pr-40 md:ml-0 ml-5 md:p-14 ${styles.float} mt-[30rem] absolute`,
    },
    {
      src: "/assets/icons/09@1x.png",
      alt: "logo",
      className: `w-60 pl-40 md:mr-0 mr-5 md:p-14 ${styles.float1} absolute right-0 mt-[75rem]`,
    },
    {
      src: "/assets/icons/02@1x.png",
      alt: "logo",
      className: `w-60 pr-40 md:ml-0 ml-5 md:p-14 ${styles.float} mt-[90rem] absolute`,
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
      <div className="md:px-20 pb-5 md:mb-0 px-10 lg:px-32">
        <h1 className="my-10 md:py-10 text-center text-4xl md:text-5xl lg:text-5xl font-jbExtrabold">
          <TypingAnimation message="Prizes" />
        </h1>
        <div className="grid gap-5 place-items-center items-center">
          <div className="mt-5 md:w-[35rem] lg:w-[45rem] p-0.5 rounded-2xl hover:drop-shadow-[0_0_0.2rem_#d2b863] bg-gray-600 font-jbMedium hover:bg-gradient-to-tr from-[#ec4237] via-[#d2b863] to-[#33b6d8] transition duration-300">
            <div className="bg-[#0f0913] rounded-2xl hover:drop-shadow-[0_0_0.2rem_#460a07] transition duration-300 underline-offset-8">
              <div className="backdrop-blur-sm sm:px-20 px-5 flex flex-col justify-center items-center py-16 font-jbBold text-4xl rounded-2xl bg-[#d1f2f9] bg-opacity-5">
                <div className="flex md:flex-row flex-col justify-center items-center">
                  <div className="lg:text-3xl text-[#fffba4] text-2xl transition duration-300">
                    Total Prize Pool of
                  </div>
                </div>
                <ul className="text-3xl lg:text-4xl w-fit mt-5">₹ 20,000</ul>
              </div>
            </div>
          </div>
          <Card
            img="first.svg"
            message="Overall Winner"
            prizes={[
              "Cash Prize of 10,000 INR.",
              "Bonus Mega Swags by SOSC",
              "Winner Certificate",
            ]}
          />
          <Card
            img="second.svg"
            message="Runner Up 1"
            prizes={[
              "Cash Prize of 6,000 INR.",
              "Bonus Mega Swags by SOSC",
              "Winner Certificate",
            ]}
          />
          <Card
            img="third.svg"
            message="Runner Up 2"
            prizes={[
              "Cash Prize of 4,000 INR.",
              "Bonus Mega Swags by SOSC",
              "Winner Certificate",
            ]}
          />
          <Card
            message="Participation Prizes"
            prizes={["Swags and Goodies by SOSC", "Participation Certificate"]}
            img="participate.png"
          />
        </div>
      </div>
    </div>
  );
}

function Card({ message, prizes, img }: CardProps) {
  return (
    <div>
      <div className="mt-5 md:w-[35rem] lg:w-[45rem] p-0.5 rounded-2xl hover:drop-shadow-[0_0_0.2rem_#d2b863] bg-gray-600 font-jbMedium hover:bg-gradient-to-tr from-[#ec4237] via-[#d2b863] to-[#33b6d8] transition duration-300">
        <div className="bg-[#0f0913] rounded-2xl hover:drop-shadow-[0_0_0.2rem_#460a07] transition duration-300 underline-offset-8">
          <div className="backdrop-blur-sm sm:px-20 px-5 flex flex-col justify-center items-center py-16 font-jbBold text-4xl rounded-2xl bg-[#d1f2f9] bg-opacity-5">
            <div className="flex md:flex-row flex-col justify-center items-center">
              <img
                className="w-20 md:pr-5 md:mb-0 mb-5"
                src={`/assets/prize/${img}`}
                alt="prize"
              />
              <div className="lg:text-3xl text-[#fffba4] text-2xl transition duration-300">
                {message}
              </div>
            </div>
            <ul className="md:text-2xl text-lg w-fit mt-5">
              {prizes.map((prize, index) => (
                <li className="py-1" key={index}>
                  <span>&#8226;</span> {prize}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
