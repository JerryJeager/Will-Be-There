import { IoCheckmark, IoClose, IoAlert } from "react-icons/io5";
import CardColumn from './CardColumn';

export default function AttendanceStatusCard({ status }) {

    const { attending, notAttending, pending } = status;

    const totalGuest = attending + notAttending + pending;

    const attendingPercentage = (attending / totalGuest) * 100;
    const notAttendingPercentage = (notAttending / totalGuest) * 100;

    return (
        <div className="bg-white col-span-6 w-full p-4 rounded-lg">
            <h2 className="text-3xl mb-4 font-medium">{totalGuest} Guests</h2>
            <div className="flex flex-row gap-4 w-full justify-between mb-4">
                <CardColumn icon={<IoCheckmark className="text-green-500"/>} title={attending} subtitle="Attending" alignItems="start" />
                <CardColumn icon={<IoClose className="text-yellow-500"/>} title={notAttending} subtitle="Not Attending" alignItems="center" />
                <CardColumn icon={<IoAlert className="text-red-500"/>} title={pending} subtitle="Pending" alignItems="end" />
            </div>
            <div className="w-full h-2 rounded-lg" style={{ background: `linear-gradient(90deg, rgba(0, 113, 5, 1) ${attendingPercentage}%, rgba(238, 150, 17, 1) ${attendingPercentage}% ${attendingPercentage + notAttendingPercentage}%, rgba(186, 26, 26, 1) ${attendingPercentage + notAttendingPercentage}% 100%)` }}></div>
        </div>
    )
}
