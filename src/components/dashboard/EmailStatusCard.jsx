import { IoCheckmark, IoClose, IoAlert } from "react-icons/io5";
import CardColumn from './CardColumn';

export default function EmailStatusCard({ status }) {

    const { sent, notSent, pending } = status;

    const totalEmails = sent + notSent + pending

    const sentPercentage = (sent / totalEmails) * 100;
    const notSentPercentage = (notSent / totalEmails) * 100;

    return (
        <div className="bg-white col-span-12 md:col-span-6 w-full p-4 rounded-lg">
            <h2 className="text-3xl mb-4 font-medium">Email Status</h2>
            <div className="flex flex-row gap-4 w-full justify-between mb-4">
                <CardColumn icon={<IoCheckmark className="text-green-500"/>} title={sent} subtitle="sent" alignItems="start" />
                <CardColumn icon={<IoClose className="text-yellow-500"/>} title={notSent} subtitle="Not sent" alignItems="center" />
                <CardColumn icon={<IoAlert className="text-red-500"/>} title={pending} subtitle="Pending" alignItems="end" />
            </div>

            <div className="w-full h-2 rounded-lg" style={{ background: `linear-gradient(to right, rgba(0, 113, 5, 1) ${sentPercentage}%, rgba(238, 150, 17, 1) ${sentPercentage}% ${sentPercentage + notSentPercentage}%, rgba(186, 26, 26, 1) ${sentPercentage + notSentPercentage}% 100%)` }}></div>
        </div>
    )
}
