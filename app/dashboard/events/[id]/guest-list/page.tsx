'use client';

import { useRouter } from 'next/navigation';
import Searchbar from '../../../../../src/components/Searchbar';
import AddNewGuest from '../../../../../src/components/dashboard/AddNewGuest';
import GuestListTable from '../../../../../src/components/dashboard/GuestListTable';
import { useEffect, useState } from 'react';
import axios from 'axios';

const url = 'https://will-be-there.onrender.com';

interface Event {
    id: string;
    created_at: string;
    name: string;
    description: string;
    user_id: string;
    country: string;
    state: string;
    date: string;
    venue: string;
    image_url: string;
}

export default function GuestListPage({ params }: { params: { id: string } }) {
    const router = useRouter();
    const [guests, setGuests] = useState([]);
    const [event, setEvent] = useState<Event>();

    const getEventByID = async (id: string, url: string, token: string) => {
        try {
            const response = await axios.get(`${url}/api/v1/event/${id}`, {
                headers: { Authorization: 'Bearer ' + token }
            });

            console.log('Events:', response.data);
            setEvent(response.data);
            return response.data;
        } catch (error: any) {
            console.error('Error signing up:', error);
            setEvent({} as Event);
            return [];
        }
    };
    const getGuests = async (id: string, url: string, token: string) => {
        try {
            const response = await axios.get(
                `${url}/api/v1/invitation/guests/${id}`,
                {
                    headers: { Authorization: 'Bearer ' + token }
                }
            );

            console.log('Events:', response.data);
            setGuests(response.data);
            return response.data;
        } catch (error: any) {
            console.error('Error signing up:', error);
            setGuests([]);
            return [];
        }
    };

    useEffect(() => {
        const token = sessionStorage.getItem('token');
        if (!token) {
            router.push('/auth/login');
        } else {
            console.log('Token found:', token);
        }

        getGuests(params.id, url, token);
        getEventByID(params.id, url, token);
    }, [0]);
    return (
        <main className='space-y-6'>
            <header className='text-[#303036]'>
                <h1 className='font-medium text-2xl leading-9 capitalize'>
                    Guest list for{' '}
                    {event && event.name ? (
                        event.name
                    ) : (
                        <div className='animate-pulse inline-block w-fit rounded-full'>
                            ...
                        </div>
                    )}
                </h1>
            </header>

            <section className='space-y-6'>
                <div className='flex justify-between items-center md:flex-nowrap flex-wrap md:gap-y-0 gap-y-5'>
                    <AddNewGuest />
                    <Searchbar />
                </div>

                <div className='rounded-lg overflow-hidden'>
                    <div className='bg-[#DFE0FF] text-[#0B195B] grid grid-cols-12 p-4'>
                        <div className='min-[800px]:col-span-1 col-span-2'>
                            SN.
                        </div>
                        <div className='min-[800px]:col-span-3 col-span-4'>
                            Name
                        </div>
                        <div className='xl:col-span-3 col-span-4'>Email</div>
                        <div className='col-span-3 min-[800px]:block hidden'>
                            Status
                        </div>

                        <div className='xl:col-span-2 min-[800px]:col-span-1 col-span-2'>
                            {/*meant to be empty*/}
                        </div>
                    </div>

                    {guests.length !== 0 ? (
                        guests.map((guest, index) => (
                            <GuestListTable
                                key={guest.id}
                                guest={guest}
                                index={index}
                            />
                        ))
                    ) : (
                        <div className='animate-pulse w-fit rounded-full'>
                            Loading ...
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}
