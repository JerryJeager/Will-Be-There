import {
    AttendanceStatusCard,
    EmailStatusCard,
    GuestSummary
} from '../../../../../src/components/dashboard';
import Searchbar from '../../../../../src/components/Searchbar';
import { mockEventDetails } from '../../../../../src/utils/mock-data';

async function getEventDetails(id) {
    const res = await fetch(`${process.env.BACKEND_API}/api/v1/event/${id}`);

    return await res.json();
}

async function getGuestsByEventId(event_id) {
    const res = await fetch(
        `${process.env.BACKEND_API}/api/v1/invitation/guests/${event_id}`
    );

    return await res.json();
}

export default async function RSVPTrackingPage({
    params
}: {
    params: { id: string };
}) {
    const event =
        process.env.NODE_ENV === 'development'
            ? mockEventDetails
            : await getEventDetails(params.id);

    const event =
        process.env.NODE_ENV === 'development'
            ? mockEventDetails
            : await getEventDetails(params.id);
    const guests =
        process.env.NODE_ENV === 'development'
            ? mockEventDetails.guestList
            : await getGuestsByEventId(params.id);

    return (
        <div className='flex flex-col w-full'>
            <header className='mb-8'>
                <div className='mb-8'>
                    <h1 className='text-2l mb-4'>RSVP Tracking</h1>
                    <h2 className='text-3xl font-medium'>
                        Stephanie's Wedding Invitation
                    </h2>
                </div>
                <div className='grid grid-cols-12 w-full gap-x-0 gap-y-4 md:gap-x-8 md:gap-y-0'>
                    <AttendanceStatusCard status={event.attendanceStatus} />
                    <EmailStatusCard status={event.emailStatus} />
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
                            {guests.map((guest) => (
                                <GuestSummary key={guest.id} guest={guest} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
