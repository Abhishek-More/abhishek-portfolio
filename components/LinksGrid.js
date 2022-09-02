import React from 'react'

export default function LinksGrid() {
  return (
    <div className="flex flex-col sm:flex sm:flex-row lg:hidden justify-center w-[80%] md:w-[65%] m-auto pt-10 sm:pt-20">
        <div className="px-0 sm:px-8">
            <div className="py-4">
              <a className="text-2xl sm:text-3xl lg:text-3xl font-bold blend" href="https://firebasestorage.googleapis.com/v0/b/asciify-a4fba.appspot.com/o/Abhishek%20More%20Resume.pdf?alt=media&token=84cf5ee1-8480-4338-a511-bb9be33bbeed" target="_blank" rel="noopener noreferrer">Resume &rarr;</a>
            </div>
            <div className="py-4">
              <a className="text-2xl sm:text-3xl lg:text-3xl font-bold my-2 blend" href="https://github.com/Abhishek-More" target="_blank" rel="noopener noreferrer">Github &rarr;</a>
            </div>
        </div>
        <div className="px-0 sm:px-8">
            <div className="py-4">
              <a className="text-2xl sm:text-3xl lg:text-3xl font-bold blend" href="https://www.linkedin.com/in/abhishek-more-linked" target="_blank" rel="noopener noreferrer">LinkedIn &rarr;</a>
            </div>
            <div className="py-4">
              <a className="text-2xl sm:text-3xl lg:text-3xl font-bold my-2 blend" href="https://devpost.com/AbhishekMore" target="_blank" rel="noopener noreferrer">Devpost &rarr;</a>
            </div>
        </div>
    </div>
  )
}
