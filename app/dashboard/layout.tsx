import Sidebar from "../../src/components/dashboard/Sidebar";

export default function DashboardLayout({ children } : { children: React.ReactNode }) {
    return (
        <div className="grid grid-cols-12 min-h-screen text-[#1f1f1f]">
            <Sidebar />
            {children}
        </div>
    )
}