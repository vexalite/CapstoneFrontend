import React from 'react'

export default function Footer() {
  return (
    <div className='footer-main flex flex-col xl:flex-row '>
      <div className="foot-container xl:w-6/12 flex md:flex-row flex-col">
        <div className="foot-container-mid w-full bg-red-500  md:h-full whitespace-pre-wrap border-t-2 border-black md:w-1/2">Container 1</div>
        <div className="foot-container-mid w-full bg-green-500 md:h-full whitespace-pre-wrap border-t-2 border-black md:w-1/2">Container 2</div>
      </div>
      <div className="foot-container xl:w-6/12 bg-blue-500 md:h-full whitespace-pre-wrap xl:mt-auto border-t-2 border-black">Container 3</div>
    </div>
  )
}
