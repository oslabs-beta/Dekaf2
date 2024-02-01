import React from 'react'
import Image from 'next/image'

const overview = () => {
  return (
  <div className=" h-screen text-black border-teal-700 h-56 grid grid-cols-3 gap-4 content-center ...">
  <div>01</div>
  <div>  </div>
  <div>
  <div>hello</div>
  </div>
  <div>04</div>
  <div> <Image
       src="/messages.png"
      width={600}
      height={600}
      alt = "picture of total messages"
       /></div>
  <div className='object-center'>
    <Image 
    src = "/trends.png"
    width = {600}
    height={500}
    alt='topic trends'
    />
  </div>
  <div>07</div>
  <div>08</div>
  <div>
  <Image
     src="/dlq.png"
     width={600}
     height={500}
     alt="Picture of the author"
   />
  </div>
</div>

)
}

export default overview

// <div className="text-red-950 border-y-rose-800 rounded-full">MADE IT TO OVERVIEW PAGE</div>
  //   <div className='relative'>
  //     <Image
  //     className = "absolute left-40 top-20"
  //     src="/messages.png"
  //     width={930}
  //     height={700}
  //     alt = "picture of total messages"
  //     />

  //   <Image 
  //   className = "absolute top-28 right-11 "
  //   src="/dlq.png"
  //   width={600}
  //   height={500}
  //   alt="Picture of the author"

  // />
  // <div className= "fixed top-100 left-14 right-0 text-black border-8 box-border w-60 h-50 p-20 border-slate-950	"> CHART #1 </div>

  // </div>
   