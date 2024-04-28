import EventSidebar from '../../../../src/components/dashboard/EventSidebar'

export default function Layout({ children } : { children: React.ReactNode }) {

    return (
        <>
            <EventSidebar eventId={1234} />
            <main className="event-dashboard">
                {children}
            </main>
        </>
    )

}