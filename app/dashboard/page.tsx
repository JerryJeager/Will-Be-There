'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { CreateEventButton, EventCard } from '../../src/components/dashboard';

interface User {
    id: string;
    created_at: string;
    email: string;
    first_name: string;
    last_name: string;
    password: string;
}

const url = 'https://will-be-there.onrender.com';

const Dashboard = () => {
    const router = useRouter();
    const [events, setEvents] = useState([]);
    const [user, setUser] = useState<User>();

    const getEvents = async (id: string, url: string, token: string) => {
        try {
            const response = await axios.get(`${url}/api/v1/event/user/${id}`, {
                headers: { Authorization: 'Bearer ' + token }
            });

            console.log('Events:', response.data);
            setEvents(response.data);
            return response.data;
        } catch (error: any) {
            console.error('Error signing up:', error);
            setEvents([]);
            return [];
        }
    };

    const getUser = async (id: string, url: string, token: string) => {
        try {
            const response = await axios.get(`${url}/api/v1/users/${id}`, {
                headers: { Authorization: 'Bearer ' + token }
            });

            console.log('User:', response.data);
            setUser(response.data);
            return response.data;
        } catch (error: any) {
            console.error('User Error:', error);
            setUser({} as User);
            return [];
        }
    };

    useEffect(() => {
        const token = sessionStorage.getItem('token');
        const user_id = sessionStorage.getItem('user_id');

        if (!token) {
            router.push('/auth/login');
        } else {
            console.log('Token found:', token);
        }
        getUser(user_id, url, token);

        getEvents(user_id, url, token);
    }, [0]);

    console.log(events, user);

    // if (events.length === 0) {
    //     return (
    //         <main className='w-full col-span-10 flex flex-col p-8 bg-[#F2EFF7] flex-grow items-center justify-center'>
    //             <NoEventAvailable />
    //         </main>
    //     );
    // }

    return (
        <main className='dashboard'>
            <header className='mb-8'>
                <h1 className='text-[#777680] text-lg md:text-2xl'>
                    Welcome,{' '}
                    {user && user.first_name ? (
                        user.first_name
                    ) : (
                        <div className='animate-pulse h-4 inline-block mt-4 w-10 rounded-full bg-white'></div>
                    )}
                </h1>
            </header>

            <section className='mb-8'>
                <h2 className='text-2xl font-bold mb-2'>Recent Event</h2>
                <div className='w-full grid grid-cols-auto lg:grid-cols-2 grid-rows-auto gap-4'>
                    {events.length === 0 ? (
                        <span>Loading....</span>
                    ) : (
                        events.map((event) => <EventCard data={event} />)
                    )}
                </div>
            </section>
            <section className='w-full'>
                <NewEvent />
            </section>
        </main>
    );
    return (
        <main className='w-full col-span-12 md:col-span-10 px-3  md:px-5 lg:px-24 py-8 bg-[#F2EFF7] flex-grow'>
            <header className=''>
                <h1 className='text-[#777680] text-2xl '>
                    Welcome, <span className='font-bold'> Victory</span>
                </h1>
            </header>
              
            <section className='mb-8'>
                <h2 className='text-2xl font-bold mb-2'>Recent Event</h2>
                <div className='w-full grid grid-cols-1 md:grid-cols-12 gap-4'>
                    {mockData &&
                        mockData.map((event) => <EventCard data={event} />)}
                </div>
            </section>
            <section className='w-full'>
                <NewEvent />
            </section>
        </main>
    );
};

const mockData = [
    {
        id: '1jkdjfieiaadfa',
        image_url:
            'https://images.pexels.com/photos/1071879/pexels-photo-1071879.jpeg?auto=compress&cs=tinysrgb&w=800',
        name: "Stephanie's Wedding Invitation",
        description:
            'Join Stephanie and David as they tie the knot under a canopy of wisteria, followed by an evening of dancing and delicious food under the Tuscan sun.',
        date: '2024-08-02T15:04:05Z',
        venue: 'Times Square',
        state: 'New York',
        country: 'USA',
        slug: '/invitation/1jkdjfieiaadfa'
    },
    {
        id: '2jkdjfieiaadfa',
        image_url:
            'https://images.pexels.com/photos/7723715/pexels-photo-7723715.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        name: 'Homewarming Party',
        description:
            'Get ready to dance the night away and reconnect with old friends at our lively Homecoming Bash',
        date: '2024-08-02T15:04:05Z',
        venue: 'Golden Gate Bridge',
        state: 'San Francisco',
        country: 'USA',
        slug: '/invitation/2jkdjfieiaadfa'
    }
];

const NoEventAvailable = () => (
    <div className='w-3/5 bg-white flex flex-row items-center justify-center p-4 rounded-lg'>
        <div className='w-4/5'>
            <h2 className='text-2xl font-bold mb-2'>No event available</h2>
            <p>
                You haven't created any events yet. Click the "Create New Event"
                button to get started.
            </p>
        </div>
        <div className='flex h-full justify-center items-center  lg:w-1/5'>
            <CreateEventButton />
        </div>
    </div>
);

const NewEvent = () => (
    <div>
        <h2 className='text-2xl font-bold mb-2'>Create New Event</h2>
        <div className='bg-white rounded-lg shadow-md  p-3 md:p-4 flex flex-col md:flex-row items-center justify-center md:justify-between text-center md:text-start gap-6'>
            <p>
                Need more events? Click the "Create New Event" button to get
                started.
            </p>
            <CreateEventButton />
        </div>
    </div>
);

export default Dashboard;
