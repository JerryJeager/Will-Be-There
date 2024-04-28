import { IoEllipsisVertical } from "react-icons/io5";


export default function GuestSummary({ guest }) {
    
    const { id, name, email, status, plusOnes } = guest;

    const attendanceBadges = [
        { label: 'attending', color: '#007105'},
        { label: 'pending', color: '#EE9611'},
        { label: 'not attending', color: '#BA1A1A'}
    ] 

    const matchingBadge = attendanceBadges.find(badge => badge.label === status);

    return (
        <div className="bg-white grid grid-cols-12 w-full items-center justify-between w-full text-sm border-b-black last:border-b-none py-2">
            <div className="col-span-1 text-center">{id}</div>
            <div className="col-span-2">{name}</div>
            <div className="col-span-3">{email}</div>
            <div className="col-span-2">
                {matchingBadge && (
                    <div className={`p-2 text-white rounded-md text-xs inline-block`} style={{ backgroundColor: matchingBadge.color }}>
                        {matchingBadge.label}
                    </div>
                )}
            </div>
            <div className="col-span-3">{plusOnes.length}</div>
            <div className="col-span-1">
                <button className="rounded-sm border-gray border p-1">
                    <IoEllipsisVertical />
                </button>
            </div>
        </div>
    )
}