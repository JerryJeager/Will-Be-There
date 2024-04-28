import EventSidebar from '../../../../src/components/dashboard/EventSidebar';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <EventSidebar eventId={1234} />
            <main className='w-full col-span-8 flex flex-col xl:px-24 lg:px-16 px-12 py-8 bg-[#F2EFF7] flex-grow'>
                {children}
            </main>
        </>
    );
}
