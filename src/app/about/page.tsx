import TypingAnimation from '@/components/TextAnimation/TextType'
import Image from 'next/image'
import React from 'react'

export default function page() {
    return (
        <div className='mt-28'>
            <div className="flex justify-between px-32">
                <div className='flex justify-center items-center translate-x-20
                '>
                    <h1 className="text-8xl font-bold capitalize">About</h1>
                </div>
                <div className=''>
                    <Image
                        src='/assets/logo/logo.png'
                        width={500}
                        height={500}
                        alt=''
                        className=''
                    />
                </div>
            </div>

            <div className='mt-10 flex px-32 gap-20 justify-between'>
                <Image src='/assets/background/bl.png' width={50} height={50} alt='' className='' />
                <Image src='/assets/background/bl.png' width={50} height={50} alt='' className='' />
                <Image src='/assets/background/bl.png' width={50} height={50} alt='' className='' />
                <Image src='/assets/background/bl.png' width={50} height={50} alt='' className='' />
                <Image src='/assets/background/bl.png' width={50} height={50} alt='' className='' />
                <Image src='/assets/background/bl.png' width={50} height={50} alt='' className='' />
                <Image src='/assets/background/bl.png' width={50} height={50} alt='' className='' />
                <Image src='/assets/background/bl.png' width={50} height={50} alt='' className='' />
                <Image src='/assets/background/bl.png' width={50} height={50} alt='' className='' />
                <Image src='/assets/background/bl.png' width={50} height={50} alt='' className='' />
            </div>
            <div className='flex justify-center items-center mt-8 flex-col'>
                <h1 className='text-6xl text-center font-bold'>
                    <TypingAnimation message='What is Hacktoberfest?'cursor='_' />
                </h1>
                <p className='text-xl mt-4 px-32 text-gray-700'>
                    Hacktoberfest is DigitalOcean’s annual event that encourages people to contribute to open source throughout October. Much of modern tech infrastructure—including some of DigitalOcean’s own products—relies on open-source projects built and maintained by passionate people who often don’t have the staff or budgets to do much more than keep the project alive. Hacktoberfest is all about giving back to those projects, sharpening skills, and celebrating all things open source, especially the people that make open source so special.

                    For the past 10 years, thousands of people—coders and non-coders alike—have participated in Hacktoberfest to support the projects they use and love, learn and practice skills that will enhance their careers, and meet new people who love open source as much as they do.
                </p>
            </div>
        </div>
    )
}

