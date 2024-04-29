import { IoEllipsisVertical } from 'react-icons/io5';

export default function GuestSummary({ guest, index }) {
    const { id, first_name, last_name, email, status, plus_ones } = guest;

    const attendanceBadges = [
        { label: 'attending', color: '#007105' },
        { label: 'pending', color: '#EE9611' },
        { label: 'rejected', color: '#BA1A1A' },
        { label: 'approved', color: '#0B195B' }
    ];

    const matchingBadge = attendanceBadges.find(
        (badge) => badge.label === status
    );

    return (
        <div
            id={id}
            className='bg-white grid grid-cols-12 w-full text-xs md:text-sm border border-b-black last:border-none py-2 gap-x-8'
        >
            <div className='col-span-1 text-center'>{index + 1}</div>
            <div className='tracking-tight md:tracking-normal col-span-2'>
                {first_name} {last_name}
            </div>
            <div className='tracking-tight md:tracking-normal col-span-4 md:col-span-3'>
                {email}
            </div>
            <div className='col-span-3 md:col-span-2 text-xs'>
                {matchingBadge && (
                    <div
                        className={`scale-75 md:scale-100 font-semibold p-2 text-white rounded-md text-xs inline-block`}
                        style={{ backgroundColor: matchingBadge.color }}
                    >
                        {matchingBadge.label}
                    </div>
                )}
            </div>
            <div className='col-span-1 md:col-span-3'>{plus_ones.length}</div>
            <div className='col-span-1'>
                <button className='rounded-sm border-gray border p-1'>
                    <IoEllipsisVertical />
                </button>
            </div>
        </div>
    );
}
