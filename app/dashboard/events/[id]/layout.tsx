'use client';
import EventSidebar from '../../../../src/components/dashboard/EventSidebar';

export default function Layout({ children }: { children: React.ReactNode }) {
    const id = sessionStorage.getItem('event_id');

    return (
        <>
            <EventSidebar eventId={id} />
            <main className='event-dashboard'>{children}</main>
        </>
    );
}
