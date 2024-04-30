'use client';
import SidebarLink from './SidebarLink';
import { usePathname } from 'next/navigation';
import { IoChatbubblesOutline } from 'react-icons/io5';
import homeIcon from '../../../public/assets/home-06.png';
import eventIcon from '../../../public/assets/calendar-03.png';
import invitationIcon from '../../../public/assets/mail-01.png';
import settingsIcon from '../../../public/assets/setting-07.png';
import logoutIcon from '../../../public/assets/logout-02.png';
import Image from 'next/image';
import { useEffect, useState } from 'react';

/**
 * Used for the main dashboard
 * @returns {JSX.Element} - The completed Sidebar component
 */
export default function Sidebar() {
    const [eventID, setEventID] = useState('');
    useEffect(() => {
        const id = sessionStorage.getItem('event_id');
        setEventID(id);
    });
    const pathname = usePathname();

    const iconSize = 24;

    const asideLinks = [
        {
            href: '/dashboard',
            label: 'Home',
            icon: <Image src={homeIcon} alt='icon' height={20} width={20} />
        },
        {
            href: `/dashboard/events/${eventID}`,
            label: 'Events',
            icon: <Image src={eventIcon} alt='icon' height={20} width={20} />
        },
        {
            href: '/dashboard/invitations',
            label: 'Invitations',
            icon: (
                <Image src={invitationIcon} alt='icon' height={20} width={20} />
            )
        },
        {
            href: '/dashboard/settings',
            label: 'Settings',
            icon: <Image src={settingsIcon} alt='icon' height={20} width={20} />
        },
        {
            href: '/dashboard/chat',
            label: 'Chat',
            icon: <IoChatbubblesOutline size={iconSize} />
        }
    ];

    return (
        <>
            <aside
                className={`bg-[#0B195B] text-white col-span-2 w-10  p-8  ${
                    !pathname.startsWith('/dashboard/events/')
                        ? 'hidden md:flex flex-col md:col-span-2 lg:w-80'
                        : 'hidden md:flex flex-col md:col-span-1'
                }  items-center transition-all ease-in `}
            >
                <div className='flex flex-col justify-between h-4/5 '>
                    <ul className='space-y-4 '>
                        {asideLinks &&
                            asideLinks.map((link) => (
                                <SidebarLink
                                    key={link.href}
                                    href={link.href}
                                    label={link.label}
                                    icon={link.icon}
                                    isActive={pathname.endsWith(link.href)}
                                    isDisplayed={
                                        !pathname.startsWith(
                                            '/dashboard/events/'
                                        )
                                    }
                                />
                            ))}
                    </ul>
                    <ul>
                        <SidebarLink
                            href='/'
                            onClick={() => {
                                sessionStorage.clear();
                            }}
                            label='Logout'
                            icon={
                                <Image
                                    src={logoutIcon}
                                    alt='icon'
                                    height={20}
                                    width={20}
                                />
                            }
                            isDisplayed={
                                !pathname.startsWith('/dashboard/events/')
                            }
                        />
                    </ul>
                </div>
            </aside>
        </>
    );
}
