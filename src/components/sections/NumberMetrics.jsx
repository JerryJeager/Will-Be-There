import React, { useState } from 'react'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

export const NumberMetrics = () => {
  const [counter, setCounter] = useState(false)
  return (
    <div className='py-10'>
        <ScrollTrigger onEnter={ ()=> setCounter(true)} onExit={()=> setCounter(false)}>
            { counter && (
                <div className='flex items-center justify-between md:justify-around p-5 md:px-10 bg-[#ECECEC]'>
                    <div className='flex flex-col items-center justify-center text-[#0524C9] cursor-pointer text-center counter font-bold'>
                        <CountUp start={0} end={3} suffix="k" duration={2} className=' text-lg md:text-3xl font-bold' />
                        <p className='text-sm md:text-lg count'>Happy Clients</p>
                    </div>
                    <div className='flex flex-col items-center justify-center text-[#0524C9] cursor-pointer text-center counter font-bold'>
                        <CountUp start={0} end={150} suffix="+" duration={2} className=' text-lg md:text-3xl font-bold'/>
                        <p className='text-sm md:text-lg'>Positive Feedback</p>
                    </div>
                    <div className='flex flex-col items-center justify-center text-[#0524C9] cursor-pointer text-center counter font-bold'>
                        <CountUp start={0} end={15} suffix="k" duration={2} className=' text-lg md:text-3xl font-bold'/>
                        <p className='text-sm md:text-lg'>Successful Event</p>
                    </div>
                </div>
            )}
        </ScrollTrigger>
    </div>
  )
}
