import React from 'react'
import { GITHUB_LINK, LINKEDIN_LINK, TAMUHACK_LINK } from '../utils/Constants'

export default function Heading() {
  return (
    <div className="hidden sm:flex justify-center pt-[10vh] sm:pt-[20vh]">
      <h1 className="text-[40px] lg:text-[70px] font-bold w-[65%] lg:w-[75%] xl:w-[65%]">
        <span className="blend">I&apos;m </span>
        <a href={LINKEDIN_LINK} className="headerlink" target="_blank" rel="noopener noreferrer">
          <div className="highlight"></div>
          <span className="redtext">Abhishek More</span>
        </a>
        <span className="blend">
          , an
        </span>
        <br className="hidden xl:inline" /> <span className="blend">
        aspiring    
        </span> <a href={GITHUB_LINK} target="_blank" rel="noopener noreferrer">
          <span className="redtext">software engineer</span>
        </a>
        <br className="hidden xl:inline" /> <span className="blend">
          and
        </span> <a href={TAMUHACK_LINK} target="_blank" rel="noopener noreferrer">
          <span className="redtext">hackathon enthusiast</span>
        </a>
      </h1>
    </div>
  )
}
