import React from 'react'
import { MOBILE_NAME, LINKEDIN_LINK, MOBILE_CHARACTERIZATIONS} from '../utils/Constants';
import Typewriter from 'typewriter-effect';

export default function HeadingMobile() {
  
  return (
    <div className="flex sm:hidden justify-center pt-[10vh]">
      <h1 className="text-[40px] lg:text-[70px] font-bold w-[80%] ">
        <span className="blend">hi, i&apos;m</span>
        <br />
        <a className="gradient blend" href={LINKEDIN_LINK} target="_blank" rel="noopener noreferrer">
          <span>{MOBILE_NAME}</span>
        </a>
        <div className="">
        <Typewriter
          options={{
            strings: MOBILE_CHARACTERIZATIONS,
            wrapperClassName: "text-2xl blend",
            cursorClassName: "invisible",
            autoStart: true,
            loop: true,
          }}
        />
        </div>
      </h1>
    </div>
  )
}
