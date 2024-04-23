import React from 'react'
import icon1 from "../../../public/assets/icon1.png"
import icon2 from "../../../public/assets/icon2.png"
import icon3 from "../../../public/assets/icon3.png"
import icon4 from "../../../public/assets/icon4.png"
import icon5 from "../../../public/assets/icon5.png"
import icon6 from "../../../public/assets/icon6.png"
import Image from 'next/image'
import { Wrapper } from '../../shared/Wrapper'

export const  Featuredata = [
    {
        id: 1,
        icon: icon1,
        title: "Personalize Invite",
        text: "Easily customize invitations effortlessly to reflect your unique style and event theme"
    },
    {
        id: 2,
        icon: icon2,
        title: "Feedback Message",
        text: "Stay informed about guest attendance with RSVP responses indicating their attendance status"
    },
    {
        id: 3,
        icon: icon3, 
        title: "Guest List Tracking",
        text: "Manage your guest list and track delivery status to recipients' emails with precision"
    },
    {
        id: 4,
        icon: icon4,
        title: "Event Reminder",
        text: "Never miss a beat, Receive timely reminders for both hosts and RSVPs as the big day approaches"
    },
    {
        id: 5,
        icon: icon5,
        title: "Invite Update",
        text: "Receive instant notifications for any updates to RSVPs, including additional guests or gift items"
    },
    {
        id: 6,
        icon: icon6, 
        title: "Special Note",
        text: "RSVPs can include special notes or congratulatory messages to enhance the event experience"
    },
]

export const Features = () => {
  return (
    <section className=''>
        <div className='bg-[#0D154B] flex flex-col justify-center items-center p-5'>
            <div className='text-center space-y-5 p-5'>
                <p className='text-[#BCC2FF] text-3xl'>Features</p>
                <p className='text-white'>Essential Tools for Seamless Planning and Delighted Guests.</p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 m-2'>
                {
                    Featuredata.map( (data) => {
                        return (
                            <div key={data.id} className='hover:shadow-2xl shadow-indigo-500 hover:scale-105  cursor-pointer transition-all duration-200 text-white bg-[#BCC2FF]/20 w-60 h-48 rounded-lg flex flex-col items-center justify-center space-y-2'>
                                <p className='text-center h-10 w-10'><Image src={data.icon} alt='icon' width="300" height={'400'} quality={100} className='w-full h-full'/></p>
                                <p className='text-[#FFFFFF]'>{data.title}</p>
                                <p className='text-sm text-center font-normal p-2 text-[#F5F2FA]'>{data.text}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}
