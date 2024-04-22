import Link from 'next/link';

export default function CreateEventButton() {
    return (
        <Link
            href='/dashboard/onboarding/step-one'
            className='bg-[#0D35FB] hover:bg-blue-700 text-white text-sm p-4 rounded-md'
        >
            Create Event
        </Link>
    );
}
