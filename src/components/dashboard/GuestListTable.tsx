import React from 'react';
import { IoEllipsisVertical } from 'react-icons/io5';

export default function GuestListTable({ guest, index }) {
    const { id, first_name, last_name, email, status } = guest;

    const attendance = [
        { label: 'attending', color: 'text-black', text: 'Invite Accepted' },
        { label: 'pending', color: 'text-[#EE9611]', text: 'Invite Pending' },
        { label: 'rejected', color: 'text-red-500', text: 'Invite Rejected' },
        { label: 'approved', color: 'text-green-500', text: 'Invite Approved' }
    ];

    const matching = attendance.find((badge) => badge.label === status);

    return (
        <div
            id={id}
            className='bg-white grid grid-cols-12 w-full items-center justify-between w-full text-sm border-b-black last:border-b-none py-2'
        >
            <div className='min-[800px]:col-span-1 col-span-2 text-center'>
                {index + 1}
            </div>
            <div className='min-[800px]:col-span-3 col-span-4 capitalize'>
                {first_name + ' ' + last_name}
            </div>
            <div className='xl:col-span-3 col-span-4'>{email}</div>
            <div className='col-span-3 min-[800px]:block hidden'>
                {matching && (
                    <div
                        className={`p-2 rounded-md text-xs inline-block ${matching.color}`}
                    >
                        {matching.text}
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
