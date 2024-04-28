"use client"
import SidebarLink from './SidebarLink'
import { usePathname } from 'next/navigation';
import { CgHome, CgMail, CgLogOut } from 'react-icons/cg';
import { IoChatbubblesOutline, IoCalendarOutline, IoSettingsOutline } from 'react-icons/io5';
/**
 * Used for the main dashboard 
 * @returns {JSX.Element} - The completed Sidebar component
 */
export default function Sidebar() {

    const pathname = usePathname();

    const iconSize = 24;

    const asideLinks = [
        { href: '/dashboard', label: 'Home', icon: <CgHome size={iconSize} /> },
        { href: '/dashboard/events', label: 'Events', icon: <IoCalendarOutline size={iconSize} /> },
        { href: '/dashboard/invitations', label: 'Invitations', icon: <CgMail size={iconSize} /> },
        { href: '/dashboard/settings', label: 'Settings', icon: <IoSettingsOutline /> },
        { href: '/dashboard/chat', label: 'Chat', icon: <IoChatbubblesOutline size={iconSize} /> }
    ];

    return (
        <>
            <aside className={`bg-[#0B195B] text-white col-span-0 ${!pathname.startsWith('/dashboard/events/') ? 'hidden md:flex flex-col md:col-span-2' : 'hidden md:flex flex-col md:col-span-1' } p-8  items-center transition-all ease-in`}>
                <div className='flex flex-col justify-between h-4/5'>
                    <ul className='space-y-4 flex flex-col items-center justify-start'>
                        {asideLinks && asideLinks.map((link) => (
                            <SidebarLink key={link.href} href={link.href} label={link.label} icon={link.icon} 
                            isActive={pathname.endsWith(link.href)}
                            isDisplayed={!pathname.startsWith('/dashboard/events/')} />
                        ))}
                    </ul>
                    <ul>
                        <SidebarLink href="/logout" label="Logout" icon={<CgLogOut size={iconSize} />} 
                        isDisplayed={!pathname.startsWith('/dashboard/events/')} />
                    </ul>
                </div>
            </aside>
        </>
    )
}
