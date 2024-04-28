import { AttendanceStatusCard, EmailStatusCard, GuestSummary } from '../../../../src/components/dashboard'
import { mockEventDetails } from '../../../../src/utils/mock-data'

async function getEventDetails(id) {
    const res = await fetch(`http://localhost:3000/api/event/${id}`)

    const data = await res.json();

    return data;
}

export default async function EventDashboardPage({ params }: { params: { id: string } }) {

    const event = process.env.NODE_ENV === 'development' ? mockEventDetails : await getEventDetails(params.id);
    
    return (
        <main className='flex flex-col w-full'>
            <header className='mb-8'>
                <div className='mb-8'>
                    <h1 className='text-2l mb-4'>RSVP Tracking</h1>
                    <h2 className='text-3xl font-medium'>Stephanie's Wedding Invitation</h2>
                </div>
                <div className='grid grid-cols-12 w-full gap-x-0 md:gap-x-8 gap-y-4 md:gap-y-0'>
                    <AttendanceStatusCard status={event.attendanceStatus} />
                    <EmailStatusCard status={event.emailStatus} />
                </div>
            </header>

            <section className='flex flex-col w-full'>
                <div className='flex flex-row justify-between items-stretch w-full py-8'>
                    <h2 className='text-2xl mb-2'>Guest List</h2>
                </div>
                <div className='rounded-lg overflow-hidden'>
                   {/* Guestlist component goes here */}
                </div>
            </section>
        </main>
    )
}