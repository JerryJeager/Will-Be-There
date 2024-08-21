'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ReactNode } from 'react';

interface SidebarLinkProps {
    href: string;
    label: string;
    icon: ReactNode;
    isActive?: boolean;
    isDisplayed?: boolean;
    onClick?: () => void;
}

/**
 * Component for individual sidebar link
 * @param {SidebarLinkProps} props - The properties for the SidebarLink component
 * @returns {JSX.Element} - The completed SidebarLink component
 */
export default function SidebarLink({
    href,
    label,
    icon,
    isActive = false,
    isDisplayed = true,
    onClick
}: SidebarLinkProps): JSX.Element {
    const pathname = usePathname();

    if (!isDisplayed) return null;

    return (
        <li>
            <Link
                href={href}
                onClick={onClick}
                className={`px-5 py-2 h-12 flex rounded-md transition-all ease-in  ${
                    isActive ? 'bg-[#525E94]' : 'hover:bg-[#525E94]'
                }`}
            >
                <div className="flex items-center justify-start font-[500]">
                    {icon}
                    {pathname.includes('/dashboard/events') ? null : (
                        <span className="ml-2 hidden lg:block">{label}</span>
                    )}
                </div>
            </Link>
        </li>
    );
}
