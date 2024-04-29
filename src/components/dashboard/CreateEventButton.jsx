import Link from 'next/link';

export default function CreateEventButton() {
    return (
        <Link
            href='/dashboard/onboarding/step-one'
            className='bg-[#0D35FB] hover:bg-blue-700 text-white font-medium text-sm p-4 rounded-lg '
        >
            Create Event
        </Link>
    );
}
