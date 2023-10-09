"use client";
import Image from "next/image";
import TypingAnimation from "@/components/TextAnimation/TextType";

export default function Themes() {
  return (
    <div className="md:px-20 mb-20 px-10 lg:px-32">
      <h1 className="my-10 py-5 md:py-10 text-center text-3xl md:text-5xl font-jbExtrabold">
        <TypingAnimation message="Exciting Themes" />
      </h1>
      <div className="grid md:grid-cols-2 gap-10">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="relative gradient_border overflow-hidden rounded-md border group aspect-video">
      <div className="absolute inset-0 z-10 bg-zinc-950/70 transition-colors group-hover:bg-zinc-950/75" />
      <Image
        src="https://images.unsplash.com/photo-1682685796014-2f342188a635?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
        alt=""
        fill
        className="object-cover w-full h-full transition-all duration-500 ease-in-out transform group-hover:scale-110"
      />
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-white">Theme</h1>
      </div>
    </div>
  );
}
