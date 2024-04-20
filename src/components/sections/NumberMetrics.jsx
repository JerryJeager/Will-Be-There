import React, { useState } from 'react'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

export const NumberMetrics = () => {
  const [counter, setCounter] = useState(false)
  return (
    <div className='py-10'>
        <ScrollTrigger onEnter={ ()=> setCounter(true)} onExit={()=> setCounter(false)}>
            { counter && (
                <div className='flex items-center justify-between md:justify-around p-2 md:p-4 md:px-10 bg-[#ECECEC]'>
                    <div className='flex flex-col items-center justify-center text-[#0524C9] cursor-pointer text-center gap-[0.25rem]'>
                        <CountUp start={0} end={3} suffix="k" duration={2} className=' text-[2.5rem] font-bold md:leading-[3rem]' />
                        <p className='text-[0.875rem] font-semibold tracking-[0.0043rem] leading-[1.05rem]'>Happy Clients</p>
                    </div>
                    <div className='flex flex-col items-center justify-center text-[#0524C9] cursor-pointer text-center gap-[0.25rem]'>
                        <CountUp start={0} end={150} suffix="+" duration={2} className=' text-[2.5rem] font-bold md:leading-[3rem]'/>
                        <p className='text-[0.875rem] font-semibold tracking-[0.0043rem] leading-[1.05rem]'>Positive Feedback</p>
                    </div>
                    <div className='flex flex-col items-center justify-center text-[#0524C9] cursor-pointer text-center gap-[0.25rem]'>
                        <CountUp start={0} end={15} suffix="k" duration={2} className=' text-[2.5rem] font-bold md:leading-[3rem]'/>
                        <p className='text-[0.875rem] font-semibold tracking-[0.0043rem] leading-[1.05rem]'>Successful Event</p>
                    </div>
                </div>
            )}
        </ScrollTrigger>
    </div>
  )
}
