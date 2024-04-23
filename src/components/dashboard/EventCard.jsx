import Image from "next/image";
import Link from "next/link";

export default function EventCard({ data }) {

    const { title, thumbnail, description, date, time, slug } = data;

    return (
        <>
            <div className="event-card bg-white p-4 col-span-6 rounded-lg shadow-md">
                <figure className="relative w-full h-72 rounded-lg overflow-hidden">
                    <Image width="600" height="600" className="object-cover object-center w-full h-full" src={thumbnail} />
                </figure>
                <div className="flex flex-col justify-between">
                    <div className="w-full flex flex-col items-start mt-4">
                        <h2 className="font-bold text-2xl">{title}</h2>
                        <p className="text-[#777680] truncate w-full h-12">{description}</p>
                    </div>
                    <div className="flex flex-row justify-between items-center mt-4">
                        <div className="text-[#303036] space-x-4">
                            {time}
                            |
                            {date}
                        </div>
                        <div>
                            <Link className="text-[#0D3dFB]" href={slug} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}