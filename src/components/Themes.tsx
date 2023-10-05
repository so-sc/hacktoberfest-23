'use client'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react'

export default function Themes() {
    const themes = useRef(null);
    const themesContainer = useRef(null);
    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
        // var t1 = gsap.timeline({
        //     scrollTrigger: {
        //         trigger: themesContainer.current,
        //         start: "50% 100%",
        //         end: "100% 80%",
        //         // scrub: true,
        //         // duration: 1,
        //         pin: true,
        //         markers: true,
        //     },
        // })
            // .to(themes.current, {
            //     width: "100vw",
            //     height: "100vh",
            //     delay: 1,
            // })
    }, []);
    // I'm still trying to do a very particular animation but if u can do it plz do it.
    // basically When u scroll down a box will start growing big and it has scrub enabled
    // also the card below can be made into new component if u want
    return (
        <div className='
        grid  grid-cols-3 px-8 gap-4
        '>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            {/* <div
                ref={themesContainer}
                className="
             flex justify-center items-center h-screen bg-red-400
            ">
                <div
                    ref={themes}
                    className="
                h-1 w-1 bg-gradient-to-r from-blue-500 to-green-500
                ">

                </div>
            </div> */}
           
        </div>
    )
}

function Card(){
    return (
         <div className='relative overflow-hidden rounded-md border group aspect-video'>
                <div className="absolute inset-0 z-10 bg-zinc-950/70 transition-colors group-hover:bg-zinc-950/75" />
                <Image src='https://images.unsplash.com/photo-1682685796014-2f342188a635?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80' alt=''
                    fill
                    className='object-cover w-full h-full transition-all duration-500 ease-in-out transform group-hover:scale-110
        '
                />
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center">
                    <h1 className="text-3xl font-bold text-white">Theme</h1>
                </div>

            </div>
    )
}
