"use client";
import React, { useState } from "react";
import Timer from "./Timer";

const RegistrationButton = () => {
  const revealTime = new Date("2023-10-28T11:00:00").getTime();
  const [hackathonRevealed, setHackathonRevealed] = useState(false);

  const handleTimeout = () => {
    setHackathonRevealed(true);
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center h-full mx-10 my-20">
        <h1 className="z-40 font-jbExtrabold text-center text-2xl md:text-4xl">
          28th and 29th October
        </h1>
        <div className="z-40 pt-5 font-jbExtrabold text-center text-2xl md:text-4xl">
          {!hackathonRevealed ? (
            <Timer targetTime={revealTime} onTimeout={handleTimeout} />
          ) : (
            <div className="text-[#fffba4]">00:00:00:00</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegistrationButton;
