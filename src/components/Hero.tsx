import Button from "@/components/Button";
import TypingAnimation from "@/components/TextAnimation/TextType";
import styles from "@/components/About/About.module.css";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="absolute -z-20 inset-0 overflow-hidden">
        <img
          src="/assets/background/pic2.png"
          width={500}
          height={500}
          alt="background"
          className="object-center h-full w-full object-cover"
        ></img>
      </div>
      <Link href="#date" className={`absolute ${styles.float1} bottom-0 py-10`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M11 4h2v12h2v2h-2v2h-2v-2H9v-2h2V4zM7 14v2h2v-2H7zm0 0v-2H5v2h2zm10 0v2h-2v-2h2zm0 0v-2h2v2h-2z"
          />
        </svg>
      </Link>
      <div className="absolute top-0 h-screen flex items-center">
        <div className="flex pt-5 flex-col items-center">
          <img
            src="/assets/logo/main-logo-new.png"
            width={500}
            height={500}
            alt="background"
            className="lg:w-[60rem] md:flex hidden w-[50rem] -z-10"
          ></img>
          <img
            src="/assets/logo/logo-vertical.png"
            width={500}
            height={500}
            alt="background"
            className="flex md:hidden -z-10"
          ></img>
          <div className="flex flex-col pt-2 items-center font-jbExtrabold">
            <div className="text-3xl md:text-4xl">
              <TypingAnimation message="HackNight 2023" />
            </div>
            {/* <Button /> */}
          </div>
        </div>
      </div>
      <div className="-z-10">
        <img
          src="/assets/background/tl.png"
          width={500}
          height={500}
          alt="background"
          className="object-center pr-60 md:pr-40 lg:pr-32 absolute top-0 left-0"
        ></img>
        <img
          src="/assets/background/tr.png"
          width={500}
          height={500}
          alt="background"
          className="object-center pl-60 md:pl-40 lg:pl-32 absolute top-0 right-0"
        ></img>
        <img
          src="/assets/background/bb.png"
          width={500}
          height={500}
          alt="background"
          className="object-center pr-60 md:pr-40 lg:pr-32 absolute bottom-0 left-0"
        ></img>
        <img
          src="/assets/background/bbb.png"
          width={500}
          height={500}
          alt="background"
          className="object-center pl-60 md:pl-40 lg:pl-32 absolute bottom-0 right-0"
        ></img>
      </div>
    </div>
  );
};

export default Hero;
