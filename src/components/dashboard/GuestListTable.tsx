import React from 'react';
import { IoEllipsisVertical } from 'react-icons/io5';

export default function GuestListTable({ guest }) {
    const { id, name, email, status } = guest;

    const attendance = [
        { label: 'invite sent', color: 'text-black' },
        { label: 'pending invite', color: 'text-[#EE9611]' }
    ];

    const matching = attendance.find((badge) => badge.label === status);

    return (
        <div className='bg-white grid grid-cols-12 w-full items-center justify-between w-full text-sm border-b-black last:border-b-none py-2'>
            <div className='min-[800px]:col-span-1 col-span-2 text-center'>
                {id}
            </div>
            <div className='min-[800px]:col-span-3 col-span-4'>{name}</div>
            <div className='xl:col-span-3 col-span-4'>{email}</div>
            <div className='col-span-3 min-[800px]:block hidden'>
                {matching && (
                    <div
                        className={`p-2 text-white rounded-md text-xs inline-block ${matching.color}`}
                    >
                        {matching.label}
                    </div>
                )}
            </div>
            <div className='xl:col-span-2 min-[800px]:col-span-1 col-span-2 ml-auto me-4'>
                <button className='rounded-sm border-gray border p-1'>
                    <IoEllipsisVertical />
                </button>
            </div>
        </div>
    );
}
