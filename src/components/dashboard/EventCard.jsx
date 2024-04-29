import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../../shared/Button';
import dayjs from 'dayjs';
const localizedFormat = require('dayjs/plugin/localizedFormat');
dayjs.extend(localizedFormat);

export default function EventCard({ data }) {
    const { id, name, description, country, state, venue, image_url, date } =
        data;
    const handleClick = (id) => {
        sessionStorage.setItem('event_id', id);
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
                            <Link
                                href='/dashboard/onboarding/add-image'
                                className='underline text-sm'
                            >
                                Add Image here
                            </Link>
                        </div>
                    )}
                </figure>
                <div className=' justify-between h-[50%]'>
                    <div className='w-full flex flex-col items-start '>
                        <h2 className='font-bold text-lg lg:text-2xl py-2'>
                            {title}
                        </h2>
                        <p className='text-[#777680] text-sm md:text-base w-full px-2'>
                            {description}
                        </p>
                    </div>
                    <div className='flex flex-row justify-between items-center pt-6'>
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
                                href={`#`}
                            >
                                <button className='text-center p-3 px-4'>
                                    Share
                                </button>
                            </Link>
                            <Link
                                className='text-[#0D3dFB]'
                                onClick={() => handleClick(id)}
                                href={`/dashboard/events/${id}`}
                            >
                                <Button text='View' />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
