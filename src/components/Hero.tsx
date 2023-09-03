import Image from "next/image";
const Hero = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="absolute -z-20 inset-0 overflow-hidden">
        <img
          src="/assets/background/pic1.png"
          width={500}
          height={500}
          alt="background"
          className="object-center h-full w-full object-cover"
        ></img>
      </div>
      <div className="flex flex-col items-center">
        <img
          src="/assets/logo/main-logo.png"
          width={500}
          height={500}
          alt="background"
          className="lg:w-[60rem] w-[50rem] -z-10"
        ></img>
      </div>
    </div>
  );
};

export default Hero;
