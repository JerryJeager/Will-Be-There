'use client';
import { useEffect, useState } from 'react';
import EventSidebar from '../../../../src/components/dashboard/EventSidebar';

export default function Layout({ children }: { children: React.ReactNode }) {
    const [eventID, setEventID] = useState('');
    useEffect(() => {
        const id = sessionStorage.getItem('event_id');
        setEventID(id);
    });

    return (
        <>
            <EventSidebar eventId={eventID} />
            <main className='event-dashboard'>{children}</main>
        </>
    );
}
