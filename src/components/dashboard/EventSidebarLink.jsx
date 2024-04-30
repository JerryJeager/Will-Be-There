"use client"
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function EventSidebarLink({ ...props }) {
    const pathname = usePathname();



  const { href, label, isActive } = props;


    return (
        <li>
            <Link href={href}>
                <div className={`px-4 py-2 h-12 flex flex-row items-center justify-start rounded-md transition-all ease-in ${isActive ? 'bg-[#525E94] text-white' : 'hover:bg-[#525E94] hover:text-white'}`}>
                    <span className="tracking-tighter">{label}</span>
                </div>
            </Link>
        </li>
    )
}