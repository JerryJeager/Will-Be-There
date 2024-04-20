import React from "react";
import { Wrapper } from "../../shared/Wrapper";
import { Button } from "../../shared/Button";
import Image from "next/image";
import image from "../../../public/assets/overview2.png";


export const Overview2 = () => {
  return (
    <section>
        <Wrapper>
            <div className='flex flex-col md:flex-row md:py-10 px-2 space-y-5 md:space-x-1 justify-evenly'>
                {/* left */}
                <div className='h-[20rem] md:h-[30rem] md:w-[39rem] mt-2 py-2 md:py-0 order-2 md:order-first border'>
                    <Image src={image} alt={'image'} className='w-full h-full object-cover rounded-[2rem]'/>
                </div>
                {/* right */}
                <div className='space-y-5 md:w-[30%] text-center md:text-start'>
                    <p className='font-bold text-[2rem] leading-[2.5rem]'>Streamline your event journey from start to finish</p>
                    <p className='text-gray-500 text-[1.25rem] leading-[1.55rem] tracking-[0.008rem]'>
                        Begin with effortlessly compile a list of  for guests and items to contribute to your event, ensuring every detail is accounted for.
                    </p>
                    <div className="hidden md:block">
                        <Button text="Try Now For Free"/>
                    </div>
                </div>
            </div>
        </Wrapper>
    </section>
  );
};
