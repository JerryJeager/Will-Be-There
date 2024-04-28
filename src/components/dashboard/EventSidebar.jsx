'use client';
import { usePathname } from 'next/navigation';
import EventSidebarLink from '../../components/dashboard/EventSidebarLink';

export default function EventSidebar({ eventId }) {
    const path = `/dashboard/events/${eventId}`;

    const pathname = usePathname();

    const eventSidebarMenuLinks = [
        { href: `${path}`, label: 'Dashboard' },
        { href: `${path}/guest-list`, label: 'Guest List' },
        { href: `${path}/rsvp-tracking`, label: 'RSVP Tracking' },
        { href: `${path}/feedback-tracking`, label: 'Feedback Tracking' },
        { href: `${path}/event-settings`, label: 'Event Settings' }
    ];

    const eventSidebarMenuLinks = [
        { href: `${path}`, label: 'Dashboard' },
        { href: `${path}/guestlist`, label: 'Guest List' },
        { href: `${path}/rsvp-tracking`, label: 'RSVP Tracking' },
        { href: `${path}/feedback-tracking`, label: 'Feedback Tracking' },
        { href: `${path}/event-settings`, label: 'Event Settings' }
    ];

    return (
        <aside className='hidden md:block md:col-span-2 py-8 bg-[#BAC3FF]'>
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
