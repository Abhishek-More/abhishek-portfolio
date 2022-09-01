import React from 'react'
import Typewriter from 'typewriter-effect';

export default function HeadingMobile() {
  return (
    <div className="flex sm:hidden justify-center pt-[10vh]">
      <h1 className="text-[40px] lg:text-[70px] font-bold w-[80%]">
        <span className="blend">hi, i&apos;m </span>
        <br />
        <a className="redtext" href="https://www.linkedin.com/in/abhishek-more-linked" target="_blank" rel="noopener noreferrer">
          <span>abhishek more</span>
        </a>

        <div className="">
        <Typewriter
          options={{
            strings: ['tamuhack director', 'tech bro', 'skater boi'],
            wrapperClassName: "text-2xl blend",
            autoStart: true,
            loop: true,
          }}
        />
        </div>
      </h1>
    </div>
  )
}
