'use client';
import { usePathname } from 'next/navigation';
import { EventSidebarLink } from './EventSidebarLink';
import React from 'react';

interface EventSidebarProps {
    eventId: string;
}
export const EventSidebar: React.FC<EventSidebarProps> = ({ eventId }) => {
    const path = `/dashboard/events/${eventId}`;

    const pathname = usePathname();

    const eventSidebarMenuLinks: { href: string; label: string }[] = [
        { href: `${path}`, label: 'Dashboard' },
        { href: `${path}/guest-list`, label: 'Guest List' },
        { href: `${path}/rsvp-tracking`, label: 'RSVP Tracking' },
        { href: `${path}/feedback-tracking`, label: 'Feedback Tracking' },
        { href: `${path}/event-settings`, label: 'Event Settings' }
    ];

    return (
        <aside className='hidden md:block md:col-span-2 py-8 bg-[#BAC3FF] w-80'>
            <ul className='space-y-4 px-2'>
                {eventSidebarMenuLinks &&
                    eventSidebarMenuLinks.map((link) => (
                        <EventSidebarLink
                            key={link.href}
                            href={link.href}
                            label={link.label}
                            isActive={pathname.endsWith(link.href)}
                        />
                    ))}
            </ul>
        </aside>
    );
}
