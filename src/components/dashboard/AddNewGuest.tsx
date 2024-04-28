import React from 'react';
import { IoAdd } from 'react-icons/io5';

export default function AddNewGuest() {
    return (
        <button className='flex gap-x-1 items-center text-base font-medium text-[#0B195B] p-2 rounded-[10px] border-[1.5px] border-[#0B195B] hover:bg-[#0B195B] hover:text-white duration-200'>
            <IoAdd className='text-2xl' />
            Add New Guest
        </button>
    );
}
