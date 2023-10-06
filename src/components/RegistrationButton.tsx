import React from "react";
import Link from "next/link";
const RegistrationButton = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center h-full m-20">
        <h1 className="z-50 font-jbExtrabold text-2xl md:text-3xl">
          Join us on 28th and 29th of October
        </h1>
        <div className="flex p-5">
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
    </div>
  );
};

export default RegistrationButton;
