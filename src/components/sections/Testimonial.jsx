'use client';
import React from 'react'
import Image from 'next/image'
import arrowRight from "../../../public/assets/Arrow circle left.png"
import arrowLeft from "../../../public/assets/Arrow circle right.png"

export const testimonialData = [ 
    {
        id: 1,
        comment: "Since using Will Be There, the quality of our guest invite process has improved drastically. The user-friendly interface allows even non-designers like myself to create professional-looking Invite. It's a fantastic tool for any business looking to improve their Event process.",
        name: "Donald Duke",
        occupation: "CEO Designly",
    },
    {
        id: 2,
        comment: "Since using Will Be There, the quality of our guest invite process has improved drastically. The user-friendly interface allows even non-designers like myself to create professional-looking Invite. It's a fantastic tool for any business looking to improve their Event process.",
        name: "Donald Duke",
        occupation: "CEO Designly",
        bgColor: `#4f60d5`
    },
    {
        id: 3,
        comment: "Since using Will Be There, the quality of our guest invite process has improved drastically. The user-friendly interface allows even non-designers like myself to create professional-looking Invite. It's a fantastic tool for any business looking to improve their Event process.",
        name: "Donald Duke",
        occupation: "CEO Designly"
    }
]

export const Testimonial = () => {

     // set sliderLeft
     const slideLeft = () =>{
        let slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 500
    }

     // set sliderRight
     const slideRight = () =>{
        let slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 500
    }

  return (
    <section>
        <div className='flex flex-col items-center justify-center text-center py-5 sm:p-10'>
            <div>
                <p className='text-[2rem] sm:text-[2.5rem] text-center font-semibold'>Hear From Our Amazing Clients</p>
                <p className='text-gray-500 text-[1.25rem] md:text-[1.3rem] py-2 leading-[1.5rem] md:leading-[2.5rem]'>Review from our customers shows how stunning invites for all event using a reliable and sustainable</p>
            </div>
            <div id='slider' className='w-full h-full overflow-x-auto whitespace-nowrap scrollbar-hide scroll-smooth relative py-10 transition-all'>
                {
                    testimonialData.map((data)=> {
                        return (
                            <div key={data.id} className=' inline-block cursor-pointer relative p-2 text-center mx-5 space-y-5 py-5'>
                                <div className='bg-[#0D154B] rounded-2xl p-4 hover:shadow-lg shadow-[#0D154B] transition-all duration-200 whitespace-normal w-[25.3rem] md:w-[47rem] h-[24.8rem] md:h-[19.9rem] flex items-center' style={{backgroundColor: `${data?.bgColor}`}}>
                                    <p className='text-[1.3rem] md:text-[1.7rem] leading-[] md:leading-[2.25rem] font-semibold text-[#FFFFFF]'>"{data.comment}"</p>
                                </div>
                                <div className=''>
                                    <p className='font-semibold text-[1.75rem] leading-[2.5rem]'>{data.name}</p>
                                    <p className='text-[#636363] text-[1.35rem] leading-[2.5rem]'>{data.occupation}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className='h-1 w-full relative '>
                <div className='flex justify-center items-center bg-[#7582D6] absolute top-0 inset-0 z-10 '>
                    <div className='flex bg-white p-2 space-x-3'>
                        <span id='slider' onClick={slideLeft} className='h-8'>
                            <Image className='h-full w-full' src={arrowLeft} alt='arrowLeft'/>
                        </span>
                        <span id='slider' onClick={slideRight} className='h-8'>
                            <Image className='h-full w-full' src={arrowRight} alt='arrowLeft'/>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

