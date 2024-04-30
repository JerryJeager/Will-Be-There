'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function SidebarLink({ ...props }) {
    const { href, label, icon, isActive, isDisplayed, onClick } = props;
    const pathname = usePathname();

    return (
        <li>
            <Link
                href={href}
                onClick={onClick}
                className={`px-5 py-2 h-12 flex rounded-md transition-all ease-in  ${
                    isActive ? 'bg-[#525E94]' : 'hover:bg-[#525E94]'
                }`}
            >
                <div className={` flex items-center justify-start font-[500]`}>
                    {icon}
                    {pathname.includes('/dashboard/events') ? null : (
                        <span className='ml-2 hidden lg:block '>{label}</span>
                    )}
                </div>
            </Link>
        </li>
    );
}
