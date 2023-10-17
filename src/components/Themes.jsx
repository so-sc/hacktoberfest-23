// Themes.js

"use client";
import Image from "next/image";
import TypingAnimation from "@/components/TextAnimation/TextType";
import { themes } from "../constants"; // Import the themes data

export default function Themes() {
  return (
    <div className="md:px-20 mb-20 px-10 lg:px-32">
      <h1 className="my-10 py-5 md:py-10 text-center text-4xl md:text-5xl font-jbExtrabold">
        <TypingAnimation message="Themes" />
      </h1>
      <div className="grid md:grid-cols-2 gap-10">
        {themes.map((theme) => (
          <Card key={theme.name} theme={theme.name} img={theme.image} />
        ))}
      </div>
    </div>
  );
}

function Card({ theme, img }) {
  return (
    <div className="relative gradient_border overflow-hidden rounded-md border group aspect-video">
      <div className="absolute inset-0 z-10 bg-zinc-950/70 transition-colors group-hover:bg-zinc-950/75" />
      <Image
        src={`/assets/theme/${img}`}
        alt={`${theme} image`}
        fill
        className="object-cover w-full h-full transition-all duration-500 ease-in-out transform group-hover:scale-110"
      />
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center">
        <h1 className="text-center px-5 text-2xl lg:text-3xl font-bold text-white">
          {theme}
        </h1>
      </div>
    </div>
  );
}
