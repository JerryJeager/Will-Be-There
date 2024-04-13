import React from 'react'
import { Wrapper } from '../../shared/Wrapper'
import { IoIosArrowDown } from "react-icons/io";

export const FaqData = [
    {
        id: 1,
        title: "What Is Will Be There About",
        details: ""
    },
    {
        id: 2,
        title: "Is it free to use?",
        details: ""
    },
    {
        id: 3,
        title: "Do I need to download any software to use Will Be There?",
        details: ""
    },
    {
        id: 4,
        title: "Can I manage my guest list?",
        details: ""
    },
    {
        id: 5,
        title: "Can I send follow-up reminders?",
        details: ""
    },
    {
        id: 6,
        title: "Can guests update their RSVP after they respond?",
        details: ""
    },
    {
        id: 1,
        title: "What Is Will Be There About",
        details: ""
    }
]

export const Faq = () => {
  return (
    <section>
        <Wrapper>
            <div className='flex flex-col items-center justify-center py-10'>
                <div className='p-5'>
                    <h1 className='text-xl sm:text-3xl text-center font-semibold'>Frequently Asked Questions</h1>
                </div>
                <div className='w-[80%]'>
                    {
                        FaqData.map((data) => {
                            return (
                                <div key={data.id} className='p-4'>
                                    <div className='flex justify-between items-center'>
                                        <h1>{data.title}</h1>
                                        <span><IoIosArrowDown /></span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </Wrapper>
    </section>
  )
}
