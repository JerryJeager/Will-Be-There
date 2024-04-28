'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import React from 'react';

export default function Layout({ children }) {
    const pathname = usePathname();

    const activeTwo = pathname === '/dashboard/onboarding/step-two';
    const activeThree = pathname === '/dashboard/onboarding/step-three';

    return (
        <main className='bg-[#F2EFF7] sm:py-20 min-[991px]:px-20  max-[991px]:px-12 py-14  col-span-10'>
            <div className='mb-20 grid sm:grid-cols-3 sm:grid-rows-1 grid-cols-1 gap-y-7 items-center justify-between'>
                <Link
                    href='/dashboard/onboarding/step-one'
                    className='font-medium text-[22px] flex items-center gap-x-4 text-[#0D35FB] sm:justify-start justify-center'
                >
                    <div className='rounded-full bg-white p-4 border flex justify-center items-center border-dashed w-10 h-10 border-[#0D35FB]'>
                        1
                    </div>

                    <p>Event Name</p>
                </Link>

                <Link
                    href='/dashboard/onboarding/step-two'
                    className={`font-medium text-[22px] flex items-center gap-x-4 sm:justify-start justify-center ${
                        activeTwo || activeThree
                            ? 'text-[#0D35FB]'
                            : 'text-[#1B1B21]'
                    }`}
                >
                    <div
                        className={`rounded-full bg-white p-4 border flex justify-center items-center border-dashed w-10 h-10 ${
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
                    className={`font-medium text-[22px] flex items-center gap-x-4 sm:justify-start justify-center ${
                        activeThree ? 'text-[#0D35FB]' : 'text-[#1B1B21]'
                    }`}
                >
                    <div
                        className={`rounded-full bg-white p-4 border flex justify-center items-center border-dashed w-10 h-10 ${
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
