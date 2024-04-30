import Sidebar from '../../src/components/dashboard/Sidebar';

export default function DashboardLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <div className='flex min-h-screen text-[#1f1f1f] mt-24'>
            <Sidebar />
            {children}
        </div>
    );
}
