import Image from "next/image";
import Link from "next/link";
import { Button } from "../../shared/Button";

export default function EventCard({ data }) {

    const { title, thumbnail, description, date, time, slug } = data;
    
    return (
        <>
            <div className="bg-white p-2 h-96 transition-all rounded-lg shadow-md flex flex-col cursor-pointer ">
                <figure className="relative w-full h-[50%] rounded-lg overflow-hidden md:hover:scale-105 ease-in transition-all duration-300">
                    <Image width="600" height="600" className="object-cover object-center w-full h-full" src={thumbnail} />
                </figure>
                <div className=" justify-between h-[50%]">
                    <div className="w-full flex flex-col items-start ">
                        <h2 className="font-bold text-lg lg:text-2xl py-2">{title}</h2>
                        <p className="text-[#777680] text-sm md:text-base w-full px-2">{description}</p>
                    </div>
                    <div className="flex justify-between items-center  pb-5 px-2">
                        <div className="text-[#303036] font-light text-sm space-x-2 ">
                            <span className="font-semibold">{time}</span>
                            <span className="">|</span>
                            <span className="font-semibold">{date}</span>
                        </div>
                        <div className="flex text-sm items-center gap-4">
                            <Link className="text-[#0D3dFB] hover:text-white hover:bg-[#0D3dFB]" href={slug}>
                                <button className=" text-center font-semibold rounded-lg">Share</button>
                            </Link>
                            <Link className="" href={slug}>
                                <Button text="View" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}