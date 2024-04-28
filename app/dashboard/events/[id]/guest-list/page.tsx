'use client';

import axios from 'axios';
import Searchbar from '../../../../../src/components/Searchbar';
import AddNewGuest from '../../../../../src/components/dashboard/AddNewGuest';
import GuestListTable from '../../../../../src/components/dashboard/GuestListTable';

const url = 'https://will-be-there.onrender.com';

// async function getEventDetails(id, url) {
//     try {
//         const response = await axios.get(`${url}/api/v1/invitation/guests/${id}`);

//     } catch (error: any) {
//         console.error('Error signing up:', error);

//         throw error;
//     }
// }

export default function GuestListPage({ params }: { params: { id: string } }) {
    return (
        <main className='space-y-6'>
            <header className='text-[#303036]'>
                <h1 className='font-medium text-2xl leading-9 capitalize'>
                    Guest list
                </h1>
            </header>

            <section className='space-y-6'>
                <div className='flex justify-between items-center md:flex-nowrap flex-wrap md:gap-y-0 gap-y-5'>
                    <AddNewGuest />
                    <Searchbar />
                </div>

                <div className='rounded-lg overflow-hidden'>
                    <div className='bg-[#DFE0FF] grid grid-cols-12 p-4'>
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

                    {mockGuestList.map((guest) => (
                        <GuestListTable key={guest.id} guest={guest} />
                    ))}
                </div>
            </section>
        </main>
    );
}

const mockGuestList = [
    {
        id: 1,
        name: 'Tolu Adebayo',
        email: 'toluadebayo@gmail.com',
        status: 'invite sent'
    },
    {
        id: 2,
        name: 'Akira Tanaka',
        email: 'akira@outlook.com',
        status: 'pending invite'
    },
    {
        id: 3,
        name: 'Yousef Al-Farsi',
        email: 'yousefal-farsi@protonmail.com',
        status: 'invite sent'
    },
    {
        id: 4,
        name: 'Matteo Rossi',
        email: 'matteo@rossi@hotmail.com,',
        status: 'pending invite'
    },
    {
        id: 5,
        name: 'Emily Johnson',
        email: 'emily.johnson@aol.com',
        status: 'invite sent'
    },
    {
        id: 6,
        name: 'Maha Khalifa',
        email: 'maha@khalifa@gmail.com',
        status: 'pending invite'
    },
    {
        id: 7,
        name: 'Marcelo Lopez',
        email: 'marcelolopez@yahoo.com',
        status: 'invite sent'
    },
    {
        id: 8,
        name: 'Sofia Costa',
        email: 'scosta@gmail.com',
        status: 'pending invite'
    },
    {
        id: 9,
        name: 'Moses Osei',
        email: 'mosesosei@outlook.com',
        status: 'invite sent'
    }
];
