import React from 'react'
import { Wrapper } from '../../shared/Wrapper'
import { Button } from '../../shared/Button'
import Image from 'next/image'
import image from '../../../public/assets/overview2.png'
import Link from 'next/link'

export const Overview2 = () => {
  return (
    <section>
        <Wrapper>
            <div className='flex flex-col md:flex-row py-5 md:py-10 px-5 space-y-5 md:space-x-12'>
                {/* left */}
                <div className='h-96 md:w-[50%] p-'>
                    <Image src={image} alt={'image'} className='w-full h-full object-contain'/>
                </div>
                {/* right */}
                <div className='space-y-4 md:w-[50%] order-first md:order-last text-center md:text-start'>
                    <p className='font-bold sm:text-3xl text-xl'>Elevate your event planning journey!</p>
                    <p className='text-gray-500 text-lg'>
                        Effortlessly organize guest lists and contributions, ensuring a seamless and stress-free experience every step of the way.
                    </p>
                    <div>
                        <Link href="/auth/login">
                            <Button text="Try Now For Free"/>
                        </Link>
                    </div>
                </div>
            </div>
        </Wrapper>
    </section>
  )
}
