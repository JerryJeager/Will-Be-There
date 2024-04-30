'use client';

import { useRouter } from 'next/navigation';
import {
    AttendanceStatusCard,
    GuestSummary
} from '../../../../../src/components/dashboard';
import Searchbar from '../../../../../src/components/Searchbar';
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

export default function RSVPTrackingPage({
    params
}: {
    params: { id: string };
}) {
    const router = useRouter();
    const [guests, setGuests] = useState([]);
    const [event, setEvent] = useState<Event>();
    const [isLoading, setIsLoading] = useState(false)

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
        setIsLoading(true)
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
        finally{
            setIsLoading(false)
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
        <div className='flex flex-col w-full'>
            <header className='mb-8'>
                <div className='mb-8'>
                    <h1 className='text-2l mb-4'>RSVP Tracking</h1>
                    <h2 className='text-3xl font-medium capitalize'>
                        {event && event.name ? (
                            event.name
                        ) : (
                            <div className='animate-pulse w-fit rounded-full'>
                                ...
                            </div>
                        )}
                    </h2>
                </div>
                <div className='grid grid-cols-12 w-full gap-x-0 gap-y-4 md:gap-x-8 md:gap-y-0'>
                    {guests.length === 0 && isLoading ? (
                        <div className='animate-pulse w-fit rounded-full'>
                            Loading ...
                        </div>
                    ) : (
                        <AttendanceStatusCard guests={guests} />
                    )}
                    {/* <EmailStatusCard status={event.emailStatus} /> */}
                </div>
            </header>
            <section className='flex flex-col w-full'>
                <div className='flex flex-col md:flex-row justify-between items-stretch w-full py-8 py-2 gap-x-8 text-xs'>
                    <h2 className='text-2xl mb-2'>Guest Tracking</h2>
                    <Searchbar />
                </div>
                <div className='rounded-lg w-full relative overflow-x-scroll'>
                    <div className='w-96 md:w-full text-sm'>
                        <div className='bg-[#DFE0FF] grid grid-cols-12 w-full text-xs md:text-sm p-4 space-x-8'>
                            <div className='col-span-1'>SN.</div>
                            <div className='col-span-2'>Name</div>
                            <div className='col-span-4 md:col-span-3'>
                                Email
                            </div>
                            <div className='col-span-3 md:col-span-2'>
                                Status
                            </div>
                            <div className='col-span-1 md:col-span-3'>
                                Plus one
                            </div>
                            <div className='col-span-1'>
                                {/*meant to be empty*/}
                            </div>
                        </div>
                        <div className='w-full'>
                            {guests.length === 0 && isLoading ? (
                                <div className='animate-pulse w-fit rounded-full'>
                                    Loading ...
                                </div>
                            ) : (
                                guests.map((guest, index) => (
                                    <GuestSummary
                                        key={guest.id}
                                        guest={guest}
                                        index={index}
                                    />
                                ))
                                
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
