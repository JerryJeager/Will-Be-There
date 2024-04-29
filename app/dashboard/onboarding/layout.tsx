'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import React from 'react';

export default function Layout({ children }) {
    const pathname = usePathname();

    const activeTwo = pathname === '/dashboard/onboarding/step-two';
    const activeThree = pathname === '/dashboard/onboarding/step-three';

    return (
        <main className='bg-[#F2EFF7] sm:py-16 min-[991px]:px-20 max-[600px]:px-5 max-[991px]:px-10 py-14 w-full  col-span-12'>
            <div className='flex flex-wrap gap-y-4 w-full items-center justify-between'>
                <Link
                    href='/dashboard/onboarding/step-one'
                    className='font-medium text-lg md:text-[22px] flex items-center gap-x-2 sm:gap-x-4  text-[#0D35FB] sm:justify-start justify-center'
                >
                    <div className='rounded-full bg-white p-4 border flex justify-center items-center border-dashed w-5 sm:w-10 h-5 sm:h-10 border-[#0D35FB]'>
                        1
                    </div>

                    <p>Event Name</p>
                </Link>

                <Link
                    href='/dashboard/onboarding/step-two'
                    className={`font-medium text-lg md:text-[22px] flex items-center gap-x-2 sm:gap-x-4  text-[#0D35FB] sm:justify-start justify-center ${
                        activeTwo || activeThree
                            ? 'text-[#0D35FB]'
                            : 'text-[#1B1B21]'
                    }`}
                >
                    <div
                        className={`rounded-full bg-white p-4 border flex justify-center items-center border-dashed w-5 sm:w-10 h-5 sm:h-10 border-[#0D35FB] ${
                            activeTwo || activeThree
                                ? 'border-[#0D35FB]'
                                : 'border-black'
                        }`}
                    >
                        2
                    </div>

                    <p>Event Details</p>
                </Link>

                <Link
                    href='/dashboard/onboarding/step-three'
                    className={`font-medium text-lg md:text-[22px] flex items-center gap-x-2 sm:gap-x-4  text-[#0D35FB] sm:justify-start justify-center ${
                        activeThree ? 'text-[#0D35FB]' : 'text-[#1B1B21]'
                    }`}
                >
                    <div
                        className={`rounded-full bg-white p-4 border flex justify-center items-center border-dashed w-5 sm:w-10 h-5 sm:h-10 border-[#0D35FB] ${
                            activeThree ? 'border-[#0D35FB]' : 'border-black'
                        }`}
                    >
                        3
                    </div>

                    <p>Generate URL</p>
                </Link>
            </div>

            <div>{children}</div>
        </main>
    );
}
