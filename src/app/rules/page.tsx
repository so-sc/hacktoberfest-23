import TypingAnimation from '@/components/TextAnimation/TextType'
import React from 'react'

export default function page() {
  return (
    <div className='relative mt-28'>
      <h1 className='text-4xl text-center font-bold'>
        <TypingAnimation message='What is Hacktoberfest?' />
      </h1>
      <p className='text-xl mt-4 px-32 text-gray-700'>
        Hacktoberfest is DigitalOcean’s annual event that encourages people to contribute to open source throughout October. Much of modern tech infrastructure—including some of DigitalOcean’s own products—relies on open-source projects built and maintained by passionate people who often don’t have the staff or budgets to do much more than keep the project alive. Hacktoberfest is all about giving back to those projects, sharpening skills, and celebrating all things open source, especially the people that make open source so special.

        For the past 10 years, thousands of people—coders and non-coders alike—have participated in Hacktoberfest to support the projects they use and love, learn and practice skills that will enhance their careers, and meet new people who love open source as much as they do.
      </p>
    </div>
  )
}
