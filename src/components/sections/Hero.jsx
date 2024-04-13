import React from 'react'
import { Button } from '../../shared/Button'
import { Wrapper } from '../../shared/Wrapper'
import rectangle1 from '../../../public/assets/Rectangle 1.png'
import rectangle2 from '../../../public/assets/Rectangle 2.png'
import rectangle3 from '../../../public/assets/Rectangle 3.png'
import rectangle4 from '../../../public/assets/Rectangle 4.png'
import image1 from '../../../public/assets/6156c82878aa44a0abe88e614a3951c6 1.png'
import image2 from '../../../public/assets/62eeb6325a284dc46abe43038ee5de10 1.png'
import image4 from '../../../public/assets/71d7e20dbf050e8158fe59d95ab534fa 1.png'
import image3 from '../../../public/assets/b6fe54c71659b6da9dcbaca205ad2426 1.png'
import Image from 'next/image'

export const Hero = () => {
  return (
    <section className=''>
        <Wrapper>
            <div className='flex flex-col md:flex-row gap-2 p-4 items-center justify-between py-10'>
                {/* left side */}
                <div className='space-y-5 py-5 md:w-full flex flex-col items-center md:items-start'>
                    <h1 className='text-3xl font-semibold'>Instantly Create <strong className='text-[#0D35FB]'>Custom</strong> Invite For Any Event.</h1>
                    <p>
                        Let’s help you keep track of  your invited guest with our innovative online RSVP platform, creating stunning invites fit for you.
                    </p>
                    <div>
                        <Button text='Sign up for free'/>
                    </div> 
                </div>
                {/* right side */}
                <div className='w-full flex justify-center items-center'>
                    <div className='grid grid-cols-2 gap-2'>
                        <p className='h-[10rem] sm:h-[12rem] md:h-[10rem] w-[10rem] sm:w-[12rem] md:w-[10rem] relative'>
                            <Image src={rectangle1} alt={rectangle1} className='w-full h-full'/>
                            <Image src={image1} alt={image1} className='absolute inset-0 h-full object-fit pt-1 pr-1'/>
                        </p>
                        <p className='h-[10rem] sm:h-[12rem] md:h-[10rem] w-[10rem] sm:w-[12rem] md:w-[10rem] relative'>
                            <Image src={rectangle3} alt={rectangle3} className='w-full h-full'/>
                            <Image src={image2} alt={image2} className='absolute inset-0 h-full object-fit pt-1 pr-1'/>
                        </p>
                        <p className='h-[10rem] sm:h-[12rem] md:h-[10rem] w-[10rem] sm:w-[12rem] md:w-[10rem] relative'>
                            <Image src={rectangle4} alt={rectangle4} className='w-full h-full'/>
                            <Image src={image3} alt={image2} className='absolute inset-0 h-full object-fit pb-1 pl-1'/>
                        </p>
                        <p className='h-[10rem] sm:h-[12rem] md:h-[10rem] w-[10rem] sm:w-[12rem] md:w-[10rem] relative'>
                            <Image src={rectangle2} alt={rectangle2} className='w-full h-full'/>
                            <Image src={image4} alt={image4} className='absolute inset-0 h-full object-fit pb-1 pr-1'/>
                        </p>
                    </div>
                </div>
            </div>
        </Wrapper>
    </section>
  )
}
