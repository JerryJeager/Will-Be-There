import Link from 'next/link';
import React from 'react';

export default function StepOne() {
    return (
        <section className='container mx-auto'>
            <h1 className='text-center font-bold mb-5 text-[#1B1B21] text-[40px]'>
                Enter your event name
            </h1>

            <p className='text-center text-[#777680] font-medium text-xl leading-6'>
                Input the selected name for your event
            </p>

            <form action='' className='pt-14 space-y-16'>
                <input
                    type='text'
                    className='w-full border-[1.5px] border-[#C7C5D0] text-base bg-white rounded-lg px-4 py-5 placeholder:text-[#C7C5D0] focus:border-[#0D154B] focus-within:border-[#0D154B] focus-visible:border-[#0D154B] focus-visible:outline-none'
                    placeholder='Enter your event name'
                    required
                />

                <div className='grid gap-y-7'>
                    <button
                        type='submit'
                        className='p-[18px] rounded-[10px] bg-[#0D35FB] text-white font-medium text-base'
                    >
                        Continue
                    </button>

                    <Link
                        href='/dashboard/onboarding/step-two'
                        className='p-4 text-center bg-transparent font-medium text-base rounded-[10px] border-[1.5px] border-[#0B195B] text-[#0B195B]'
                    >
                        Skip
                    </Link>
                </div>
            </form>
        </section>
    );
}
