import React from 'react'
import { Wrapper } from '../../shared/Wrapper'
import Image, { StaticImageData } from 'next/image'
import icon from '../../../public/assets/Vector.png'
import icon2 from '../../../public/assets/Vector2.png'

interface PricingItem {
    id: number;
    title: string;
    price: string;
    duration: string;
    description: string;
    offer1: string;
    offer2: string;
    offer3: string;
    button: string;
    bgColor?: string;
    color?: string;
    color2?: string;
    icon?: StaticImageData;
  }

export const PricingData: PricingItem[] = [
    {
        id: 1,
        title: 'Free',
        price: '$0/',
        duration: "month",
        description: "Get Started with Trial plan for Free with:",
        offer1: "Personalize Invite",
        offer2: "Invite Update",
        offer3: "Feedback Message",
        button: 'sign up'         
    },
    {
        id: 2,
        title: 'Basic',
        price: '$19/',
        duration: "month",
        description: "Everything in free and:",
        icon: icon2,
        offer1: "Guest list & tracking",
        offer2: "Special Note",
        offer3: "Event Reminder",
        button: 'sign up',
        bgColor: "#0B195B",
        color: "#ffffff",
        color2: "#b5b1b1"        
    },
    {
        id: 3,
        title: 'Premium',
        price: '$196/',
        duration: "month",
        description: "30% Discount for a year plan plus all benefit and:",
        offer1: "Merch",
        offer2: "Newsletter",
        offer3: "Unlimited Invite",
        button: 'sign up'         
    }
]
 

export const Pricing = () => {
  return (
    <section id='pricing'>
        <Wrapper>
            <div className="flex flex-col items-center justify-center py-10">
                <p className="text-xl sm:text-3xl text-center font-semibold">
                    PRICING FOR INVITATION
                </p>
                <p className="text-gray-500 text-sm sm:text-lg py-2 text-center">
                    Discover the right plan for you. From essentials to premium
                    features, we've got you covered.
                </p>
            </div>
            <div className="flex items-center justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 m-2">
                    {PricingData.map((data, index) => {
                    return (
                        <div
                        key={index}
                        className="flex flex-col justify-center  border-[3px] border-[#0B195B] rounded-[2rem] min-w-full md:w-[21rem] h-96 space-y-5 hover:scale-105 ease-in transition-all p-6 "
                        style={{
                            backgroundColor: `${data?.bgColor}`,
                            color: `${data?.color}`,
                        }}
                        >
                        <div className="text-center">
                            <p
                            className="text-gray-500 font-bold p-1"
                            style={{ color: `${data?.color2}` }}
                            >
                            {data.title}
                            </p>
                            <p>
                            <span className='font-semibold'>{data.price}</span>
                            <span>{data.duration}</span>
                            </p>
                        </div>
                        <div>
                            <p className="p-2 text-[1.2rem] leading-[1.5rem] mb-2 font-[500]">
                            {data.description}
                            </p>
                            <p className="flex items-center gap-2 text-lg">
                            <Image
                                src={data?.icon || icon}
                                alt="icon"
                                quality={100}
                            />
                            {data.offer1}
                            </p>
                            <p className="flex items-center gap-2 text-lg">
                            <Image
                                src={data?.icon || icon}
                                alt="icon"
                                quality={100}
                            />
                            {data.offer2}
                            </p>
                            <p className="flex items-center gap-2 text-lg">
                            <Image
                                src={data?.icon || icon}
                                alt="icon"
                                quality={100}
                            />
                            {data.offer3}
                            </p>
                        </div>
                        <div className=" text-white bg-[#0D35FB] m-2 text-center rounded-xl">
                            <button className="p-2 capitalize font-semibold">{data.button}</button>
                        </div>
                        </div>
                    );
                    })}
                </div>
            </div>
        </Wrapper>
    </section>
  )
}
