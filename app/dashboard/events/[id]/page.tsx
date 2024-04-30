'use client';

import { useState, useEffect } from 'react';
import { AttendanceStatusCard } from '../../../../src/components/dashboard';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import GuestListTable from '../../../../src/components/dashboard/GuestListTable';

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

export default function EventDashboardPage({
    params
}: {
    params: { id: string };
}) {
    const router = useRouter();
    const [event, setEvent] = useState<Event>();
    const [guests, setGuests] = useState([]);

    const getEventByID = async (id: string, url: string, token: string) => {
        try {
            const response = await axios.get(`${url}/api/v1/event/${id}`, {
                headers: { Authorization: 'Bearer ' + token }
            });

            console.log('Event:', response.data);
            setEvent(response.data);
            return response.data;
        } catch (error: any) {
            console.error('Error:', error);
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

            console.log('Guests:', response.data);
            setGuests(response.data);
            return response.data;
        } catch (error: any) {
            console.error('Error:', error);
            setGuests([]);
            return [];
        }
    };

    useEffect(() => {
        const token = sessionStorage.getItem('token');
        if (!token) {
            router.push('/auth/login');
        }

        getEventByID(params.id, url, token);
        getGuests(params.id, url, token);
    }, [0]);

    return (
        <main className='flex flex-col w-full'>
            <header className='mb-8'>
                <div className='mb-8'>
                    <h1 className='text-2l mb-4'>Dashboard</h1>
                    <h2 className='text-3xl font-medium'>
                        {event && event.name ? (
                            event.name
                        ) : (
                            <div className='animate-pulse w-fit rounded-full'>
                                ...
                            </div>
                        )}
                    </h2>
                </div>
                <div className='grid grid-cols-12 w-full gap-x-0 md:gap-x-8 gap-y-4 md:gap-y-0'>
                    {guests.length !== 0 ? (
                        <AttendanceStatusCard guests={guests} />
                    ) : (
                        <div className='animate-pulse w-fit rounded-full'>
                            Loading ...
                        </div>
                    )}
                    {/* <EmailStatusCard status={event.emailStatus} /> */}
                </div>
            </header>

            <section className='flex flex-col w-full'>
                <div className='flex flex-row justify-between items-stretch w-full py-8'>
                    <h2 className='text-2xl mb-2'>Guest List</h2>
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
