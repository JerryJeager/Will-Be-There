import React from 'react'
import { Wrapper } from '../../shared/Wrapper'
import { Button } from '../../shared/Button'
import Image from 'next/image'
import image from '../../../public/assets/Rectangle 5.png'

export const Overview1 = () => {
  return (
    <section>
        <Wrapper>
            <div className='flex flex-col md:flex-row md:py-10 px-5 space-y-4 md:space-x-12'>
                {/* left */}
                <div className='space-y-4 md:w-[50%] text-center md:text-start'>
                    <p className='font-bold sm:text-3xl text-xl'>Streamline your event journey from start to finish</p>
                    <p className='text-gray-500 text-lg'>
                        Begin with effortlessly compile a list of  for guests and items to contribute to your event, ensuring every detail is accounted for.
                    </p>
                    <div>
                        <Button text="Try Now For Free"/>
                    </div>
                </div>
                {/* right */}
                <div className='h-96 md:w-[50%]'>
                    <Image src={image} alt={'image'} className='w-full h-full object-contain'/>
                </div>
            </div>
        </Wrapper>
    </section>
  )
}
