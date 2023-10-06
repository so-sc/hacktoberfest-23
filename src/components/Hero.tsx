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
      <div className="flex flex-col items-center">
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
        <div className="flex pt-2 items-center font-jbExtrabold">
          <p className="text-3xl md:text-4xl">HackNight 2023</p>
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
