import Image from "next/image";
import Link from "next/link";
import { Button } from "../../shared/Button";

export default function EventCard({ data }) {

    const { title, thumbnail, description, date, time, slug } = data;
    
    return (
        <>
            <div className="bg-white p-4 col-span-12 md:col-span-6 rounded-lg shadow-md flex flex-col">
                <figure className="relative w-full h-72 rounded-lg overflow-hidden">
                    <Image width="600" height="600" className="object-cover object-center w-full h-full" src={thumbnail} />
                </figure>
                <div className="flex flex-col justify-between">
                    <div className="w-full flex flex-col items-start mt-4">
                        <h2 className="font-bold text-2xl">{title}</h2>
                        <p className="text-[#777680] text-sm md:text-base w-full h-16">{description}</p>
                    </div>
                    <div className="flex flex-row justify-between items-center mt-4">
                        <div className="text-[#303036] font-light text-sm space-x-4">
                            {time}
                            <span>|</span>
                            {date}
                        </div>
                        <div className="flex flex-row text-sm items-center space-x-0 md:space-x-4 space-y-2 md:space-y-0">
                            <Link className="text-[#0D3dFB]" href={slug}>
                                <button className="text-center p-3 px-4">Share</button>
                            </Link>
                            <Link className="text-[#0D3dFB]" href={slug}>
                                <Button text="View" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}