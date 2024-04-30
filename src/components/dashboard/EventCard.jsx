import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../../shared/Button';
import dayjs from 'dayjs';
import axios from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
const localizedFormat = require('dayjs/plugin/localizedFormat');
dayjs.extend(localizedFormat);

const url = 'https://will-be-there.onrender.com';

export default function EventCard({ data, setOpen }) {
    const { id, name, description, country, state, venue, image_url, date } =
        data;

    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const token = sessionStorage.getItem('token');

    const handleClick = (id) => {
        sessionStorage.setItem('event_id', id);
    };
    const handleDelete = async (id) => {
        setIsLoading(true);
        try {
            const response = await axios.delete(`${url}/api/v1/event/${id}`, {
                headers: { Authorization: 'Bearer ' + token }
            });
            setIsLoading(false);
            window.location.reload();

            return response;
        } catch (error) {
            setIsLoading(false);
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <>
            <div
                key={id}
                className='bg-white p-4 rounded-lg shadow-md flex flex-col'
            >
                <figure className='relative w-full h-72 rounded-lg overflow-hidden'>
                    {image_url ? (
                        <Image
                            width='600'
                            height='600'
                            className='object-cover object-center w-full h-full'
                            src={image_url}
                        />
                    ) : (
                        <div className='bg-gray-200 w-full flex flex-col gap-y-4 h-full justify-center items-center'>
                            No Image available
                            <br />
                            <button
                                onClick={() => setOpen(true)}
                                className='underline text-sm'
                            >
                                Add Image here
                            </button>
                        </div>
                    )}
                </figure>
                <div className=' justify-between h-[50%] space-y-6'>
                    <div className='w-full flex flex-col items-start '>
                        <h2 className='font-bold text-lg lg:text-2xl py-2'>
                            {name}
                        </h2>
                        <p className='text-[#777680] text-sm md:text-base w-full'>
                            {description}
                        </p>
                    </div>
                    <div className='flex flex-row justify-between items-center'>
                        <div className='space-y-1'>
                            <div className='text-[#303036] font-light text-sm space-x-4'>
                                {venue}, {state}, {country}.
                            </div>
                            <div className='text-[#303036] font-light text-sm space-x-4'>
                                {dayjs(date).format('LLL')}
                            </div>
                        </div>

                        <div className='flex flex-row text-sm items-center space-x-0 md:space-x-4 space-y-2 md:space-y-0'>
                            <Link
                                className='text-[#0D3dFB]'
                                onClick={() => handleClick(id)}
                                href={`/dashboard/onboarding/step-three/?eventId=${id}`}
                            >
                                <button className='text-center p-3 px-4'>
                                    Share
                                </button>
                            </Link>
                            <Link
                                className='text-[#0D3dFB]'
                                onClick={() => {
                                    handleClick(id);
                                }}
                                href={`/dashboard/events/${id}`}
                            >
                                <Button text='View' />
                            </Link>
                        </div>
                    </div>

                    <button
                        onClick={() => handleDelete(id)}
                        className='bg-red-500 w-full text-sm text-white p-3 px-4 col-span-2 rounded-lg hover:shadow-xl shadow-red-200 duration-200 active:scale-100 font-semibold'
                    >
                        Delete Event
                    </button>
                </div>
            </div>
        </>
    );
}
