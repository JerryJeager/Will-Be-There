'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { CreateEventButton, EventCard } from '../../src/components/dashboard';

const Dashboard = () => {
    const { data: session, status: sessionStatus } = useSession();
    const router = useRouter();

    // Redirect to login if not authenticated
    if (sessionStatus !== 'authenticated') {
        router.push('/login');
        return null; // Return null while redirecting
    }

    if (mockData.length === 0) {
        return (
            <main className='w-full col-span-10 flex flex-col p-8 bg-[#F2EFF7] flex-grow items-center justify-center'>
                <NoEventAvailable />
            </main>
        );
    }

    return (
        <main className='w-full col-span-10 flex flex-col px-24 py-8 bg-[#F2EFF7] flex-grow'>
            <header className=''>
                <h1 className='text-[#777680] text-2xl'>
                    Welcome, {session.user.name}.
                </h1>
            </header>
            
            <section className='mb-8'>
                <h2 className='text-2xl font-bold mb-2'>Recent Event</h2>
                <div className='w-full grid grid-cols-12 gap-4'>
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
        thumbnail:
            'https://images.pexels.com/photos/1071879/pexels-photo-1071879.jpeg?auto=compress&cs=tinysrgb&w=800',
        title: "Stephanie's Wedding Invitation",
        description:
            'Join Stephanie and David as they tie the knot under a canopy of wisteria, followed by an evening of dancing and delicious food under the Tuscan sun.',
        date: '2024-05-01',
        time: '11AM',
        location: 'New York',
        slug: '/invitation/1jkdjfieiaadfa'
    },
    {
        id: '2jkdjfieiaadfa',
        thumbnail:
            'https://images.pexels.com/photos/7723715/pexels-photo-7723715.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        title: 'Homewarming Party',
        description:
            'Get ready to dance the night away and reconnect with old friends at our lively Homecoming Bash',
        date: '2024-05-15',
        time: '2PM',
        location: 'San Francisco',
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
        <div className='flex h-full justify-center items-center w-1/5'>
            <CreateEventButton />
        </div>
    </div>
);

const NewEvent = () => (
    <div>
        <h2 className='text-2xl font-bold mb-2'>Create New Event</h2>
        <div className='bg-white rounded-lg shadow-md p-4 flex flex-row items-center justify-between'>
            Lorem ipsum dolor sit amet consectur. Volulpat...........
            <CreateEventButton />
        </div>
    </div>
);

export default Dashboard;