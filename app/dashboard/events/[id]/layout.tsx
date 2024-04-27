import EventSidebar from '../../../../src/components/dashboard/EventSidebar'

export default function Layout({ children } : { children: React.ReactNode }) {

    return (
        <>
            <EventSidebar eventId={1234} />
            <main className="w-full col-span-9 flex flex-col px-24 py-8 bg-[#F2EFF7] flex-grow">
                {children}
            </main>
        </>
    )

}