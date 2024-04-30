'use client';

import { useRouter } from 'next/navigation';
import FeedbackCard from '../../../../../src/components/dashboard/FeedbackCard';
import { useEffect, useState } from 'react';
import axios from 'axios';

const url = 'https://will-be-there.onrender.com';

export default function Page({ params }: { params: { id } }) {
    const router = useRouter();
    const [guests, setGuests] = useState([]);
    const getGuests = async (id: string, url: string, token: string) => {
        try {
            const response = await axios.get(
                `${url}/api/v1/invitation/guests/${id}`,
                {
                    headers: { Authorization: 'Bearer ' + token }
                }
            );

            console.log('Guests:', response.data);

            const filteredData = response.data.filter(
                (entry) => entry.message.trim() !== ''
            );
            setGuests(filteredData);
            console.log(filteredData);

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

        getGuests(params.id, url, token);
    }, [0]);
    return (
        <div className='w-full'>
            <h1 className='mb-8'>Feedback Messages</h1>

            <div className='space-y-4'>
                {guests &&
                    guests.map((guest) => (
                        <FeedbackCard key={guest.id} guests={guest} />
                    ))}
                {guests.length <= 0 && (
                    <h2 className='flex flex-col w-full h-full justify-center items-center text-center'>
                        No feedback has been added yet.
                    </h2>
                )}
            </div>
        </div>
    );
}
