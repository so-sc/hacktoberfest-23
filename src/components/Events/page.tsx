"use client";
import styles from "./Event.module.css";
import Link from "next/link";

const Events = () => {
  return (
    <div className="h-screen">
      <div className="-z-10">
        <img
          src="/assets/icons/13@1x.png"
          alt="logo"
          className={`w-60 pr-40 md:ml-0 ml-5 md:p-14 ${styles.float} absolute`}
        />
        <img
          src="/assets/icons/14@1x.png"
          alt="logo"
          className={`w-60 pl-40 md:mr-0 mr-5 md:p-14 ${styles.float3} absolute mt-60 right-0`}
        />
        <img
          src="/assets/icons/06@1x.png"
          alt="logo"
          className={`w-60 pr-40 md:ml-0 ml-5 md:p-14 ${styles.float2} absolute mt-[30rem]`}
        />
        <img
          src="/assets/icons/04@1x.png"
          alt="logo"
          className={`w-60 pl-40 md:mr-0 mr-5 md:p-14 ${styles.float1} absolute right-0 mt-[45rem]`}
        />
      </div>
      <div className="tracking-wider w-full">
        <div className="h-full md:p-20 p-10 lg:m-32 md:m-20 m-10 md:my-0 my-0 lg:my-0 backdrop-blur-sm bg-[#d1f2f9] bg-opacity-5 rounded-3xl overflow-hidden">
          <h1 className="font-jbExtrabold mb-5 text-3xl">About.</h1>
          <p className="font-jbRegular text-sm md:text-base">
            Hack Night is a flagship event organized by Sahyadri Open Source
            Community (SOSC) in celebration of Hacktoberfest 2023
          </p>
          <p className="py-5 font-jbRegular text-sm md:text-base">
            Hacktoberfest is open to everyone in our global community. Whether
            you&apos;re new to development, a student or a long-time
            contributor, you can help drive growth of open source and make
            positive contributions to an ever-growing community. All backgrounds
            and skills levels are encouraged to complete the challenge.
          </p>
        </div>
      </div>
      {/* When Registrations Opens, un-comment these */}
      {/* <div>
        <div className="flex flex-col justify-center items-center h-full md:p-20 p-10 md:m-20 m-10 rounded-3xl overflow-hidden">
          <h1 className="font-jbExtrabold mb-5 text-2xl md:text-3xl">
            Take part in the most awaited event!
          </h1>
          <div className="flex">
            <div className="mt-5 p-0.5 rounded-2xl hover:drop-shadow-[0_0_0.2rem_#d2b863] bg-gray-600 font-jbMedium hover:bg-gradient-to-tr from-[#ec4237] via-[#d2b863] to-[#33b6d8] transition duration-300">
              <div className="py-5 bg-[#0f0913] rounded-2xl hover:drop-shadow-[0_0_0.2rem_#460a07] transition duration-300 underline-offset-8">
                <div className=" hover:drop-shadow-[0_0_0.2rem_#d2b863] transition duration-300">
                  <Link
                    href=""
                    className=" py-5 px-5 hover:drop-shadow-[0_0_0.2rem_#460a07] transition duration-300 underline-offset-8"
                    target="_blank"
                  >
                    Register Now!
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Events;
