import axios from 'axios';
import { useRouter } from 'next/navigation';
import React from 'react';
import { IoTrashBin } from 'react-icons/io5';
const url = 'https://will-be-there.onrender.com';

export default function GuestListTable({ guest, index }) {
    const { id, first_name, last_name, email, status } = guest;
    const router = useRouter();
    const token = sessionStorage.getItem('token');
    const attendance = [
        { label: 'attending', color: 'text-black', text: 'Invite Accepted' },
        { label: 'pending', color: 'text-[#EE9611]', text: 'Invite Pending' },
        { label: 'rejected', color: 'text-red-500', text: 'Invite Rejected' },
        { label: 'approved', color: 'text-green-500', text: 'Invite Approved' }
    ];

    const matching = attendance.find((badge) => badge.label === status);

    const handleDelete = async (id) => {
        try {
            const response = await axios.delete(
                `${url}/api/v1/invitation/guest/${id}`,
                {
                    headers: { Authorization: 'Bearer ' + token }
                }
            );

            window.location.reload();

            return response;
        } catch (error) {
            // setIsLoading(false);
        } finally {
            // setIsLoading(false);
        }
    };

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
            <div className='xl:col-span-2 min-[800px]:col-span-1 col-span-2 mx-auto'>
                <button
                    className='bg-red-500 w-full text-sm text-white p-3 rounded-lg'
                    onClick={() => handleDelete(id)}
                >
                    <IoTrashBin />
                </button>
            </div>
        </div>
    );
}
