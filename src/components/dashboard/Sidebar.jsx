"use client"
import SidebarLink from './SidebarLink'
import { usePathname } from 'next/navigation';
import { CgHome, CgMail, CgLogOut } from 'react-icons/cg';
import { IoChatbubblesOutline, IoCalendarOutline, IoSettingsOutline } from 'react-icons/io5';
/**
 * Used for the main dashboard
 * @returns {JSX.Element} - The completed Sidebar component
 */
export default function Sidebar() {

    const pathname = usePathname();

    const iconSize = 24;

    const asideLinks = [
        { href: '/dashboard', label: 'Home', icon: <CgHome size={iconSize} /> },
        { href: '/dashboard/events', label: 'Events', icon: <IoCalendarOutline size={iconSize} /> },
        { href: '/dashboard/invitations', label: 'Invitations', icon: <CgMail size={iconSize} /> },
        { href: '/dashboard/settings', label: 'Settings', icon: <IoSettingsOutline /> },
        { href: '/dashboard/chat', label: 'Chat', icon: <IoChatbubblesOutline size={iconSize} /> }
    ];

  return (
    <>
      <aside className="bg-[#0B195B] text-white col-span-2 p-8 hidden md:block">
        <div className="flex flex-col justify-between h-4/5">
          <ul className="space-y-4">
            {asideLinks &&
              asideLinks.map((link) => (
                <SidebarLink
                  key={link.href}
                  href={link.href}
                  label={link.label}
                  icon={link.icon}
                />
              ))}
          </ul>
          <ul>
            <SidebarLink
              href="/logout"
              label="Logout"
              icon={<CgLogOut size={iconSize} />}
            />
          </ul>
        </div>
      </aside>
    </>
  );
}
