import React from 'react'

export default function Heading() {
  return (
    <div className="hidden sm:flex justify-center pt-[10vh] sm:pt-[20vh]">
      <h1 className="text-[40px] lg:text-[70px] font-bold w-[65%] lg:w-[75%] xl:w-[65%]">
        <span className="blend">I'm </span>
        <a href="https://www.linkedin.com/in/abhishek-more-linked" target="_blank" rel="noopener noreferrer">
          <span className="redtext">Abhishek More</span>
        </a>
        <span className="blend">
          , an
        </span>
        <br className="hidden xl:inline" /> <span className="blend">
        aspiring    
        </span> <a href="https://github.com/Abhishek-More" target="_blank" rel="noopener noreferrer">
          <span className="redtext">software engineer</span>
        </a>
        <br className="hidden xl:inline" /> <span className="blend">
          and
        </span> <a href="https://tamuhack.com/" target="_blank" rel="noopener noreferrer">
          <span className="redtext">hackathon enthusiast</span>
        </a>
      </h1>
    </div>
  )
}
