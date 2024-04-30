'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { CreateEventButton, EventCard } from '../../src/components/dashboard';
import ImageUpload from '../../src/components/dashboard/ImageUpload';

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
    const [open, setOpen] = useState(false);

    const getEvents = async (id: string, url: string, token: string) => {
        try {
            const response = await axios.get(`${url}/api/v1/event/user/${id}`, {
                headers: { Authorization: 'Bearer ' + token }
            });

            const sortedEvents = response.data.sort((a: any, b: any) => {
                // Convert date strings to Date objects for comparison
                const dateA: any = new Date(a.created_at);
                const dateB: any = new Date(b.created_at);

                // Compare the dates
                return dateB - dateA;
            });
            setEvents(sortedEvents);
            console.log('Event:', sortedEvents);
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
    return (
        <main className='w-full sm:p-7  p-5   bg-[#F2EFF7]'>
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
                <h2 className='text-2xl font-bold p-2'>Recent Event</h2>
                <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-4 h-auto '>
                    {events.length === 0 ? (
                        <span>Loading....</span>
                    ) : (
                        events.map((event) => (
                            <EventCard data={event} setOpen={setOpen} />
                        ))
                    )}
                </div>
            </section>
            <section className='w-full'>
                <NewEvent />
            </section>
            <ImageUpload open={open} setOpen={setOpen} />
        </main>
    );
};

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
        <h2 className='text-2xl font-bold p-2'>Create New Event</h2>
        <div className='bg-white rounded-lg shadow-md  p-3 md:p-4 flex flex-col md:flex-row items-center justify-center md:justify-between text-center md:text-start gap-6'>
            <p className='text-lg'>
                Create a new event and share with your friends...
            </p>
            <CreateEventButton />
        </div>
    </div>
);

export default Dashboard;
