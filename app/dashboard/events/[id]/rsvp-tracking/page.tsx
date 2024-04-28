import { AttendanceStatusCard, EmailStatusCard, GuestSummary } from '../../../../../src/components/dashboard'
import Searchbar from '../../../../../src/components/Searchbar'

async function getEventDetails(id) {
    const res = await fetch(`http://localhost:3000/api/event/${id}`)

    const data = await res.json();

    return data;
}

export default async function RSVPTrackingPage({ params }: { params: { id: string } }) {

    const event = process.env.NODE_ENV === 'development' ? mockEventDetails : await getEventDetails(params.id);
    
    return (
        <main className='flex flex-col w-full'>
            <header className='mb-8'>
                <div className='mb-8'>
                    <h1 className='text-2l mb-4'>RSVP Tracking</h1>
                    <h2 className='text-3xl font-medium'>Stephanie's Wedding Invitation</h2>
                </div>
                <div className='grid grid-cols-12 w-full gap-8 '>
                    <AttendanceStatusCard status={event.attendanceStatus} />
                    <EmailStatusCard status={event.emailStatus} />
                </div>
            </header>

            <section className='flex flex-col w-full'>
                <div className='flex flex-row justify-between items-stretch w-full py-8'>
                    <h2 className='text-2xl mb-2'>Guest Tracking</h2>
                    <Searchbar />
                </div>
                <div className='rounded-lg overflow-hidden'>
                    <div className='bg-[#DFE0FF] grid grid-cols-12 p-4'>
                        <div className="col-span-1">SN.</div>
                        <div className="col-span-2">Name</div>
                        <div className="col-span-3">Email</div>
                        <div className="col-span-2">Status</div>
                        <div className="col-span-3">Plus one</div>
                        <div className="col-span-1">{/*meant to be empty*/}</div>
                    </div>
                    <div className='w-full'>
                        {mockEventDetails.guestList.map((guest) => (
                            <GuestSummary key={guest.id} guest={guest} />
                        ))}
                    </div>
                </div>
            </section>

        </main>
    )
}

const mockEventDetails = {
    title: "Stephanie's Wedding Invitation",
    description: "This is a description of the event",
    date: "2021-09-21",
    time: "12:00 PM",
    location: "1234 Fake St, Fake City, Fake State 12345",
    attendanceStatus: { attending: 287, notAttending: 100, pending: 30 },
    emailStatus: { sent: 23, notSent: 10, pending: 15 },
    guestList: [
        { id: 1, name: "Tolu Adebayo", email: "toluadebayo@gmail.com", status: "attending", plusOnes: ["Hassan Ibrahim", "Amelia Jones", "Carlos Silva"] },
        { id: 2, name: "Akira Tanaka", email: "akira@outlook.com", status: "not attending", plusOnes: ["Sophia Kim", "Fatima Ali"] },
        { id: 3, name: "Yousef Al-Farsi", email: "yousefal-farsi@protonmail.com", status: "attending", plusOnes: [] },
        { id: 4, name: "Matteo Rossi", email: "matteo@rossi@hotmail.com,", status: "pending", plusOnes: ["Mohammed Ahmed", "Alejandro Lopez"] },
        { id: 5, name: "Emily Johnson", email: "emily.johnson@aol.com", status: "attending", plusOnes: ["Sophie Martin", "Ahmed Hassan", "Mia Thompson"] },
        { id: 6, name: "Maha Khalifa", email: "maha@khalifa@gmail.com", status: "not attending", plusOnes: ["Aaliyah Brown", "Daniel Garcia", "Maria Lopez"] },
        { id: 7, name: "Marcelo Lopez", email: "marcelolopez@yahoo.com", status: "attending", plusOnes: ["Lucas Nguyen"] },
        { id: 8, name: "Sofia Costa", email: "scosta@gmail.com", status: "pending", plusOnes: ["Olivia Rodriguez", "Liam Martinez", "Yara Nasser"] },
        { id: 9, name: "Moses Osei", email: "mosesosei@outlook.com", status: "attending", plusOnes: ["Sophia Silva"] }
    ],
};