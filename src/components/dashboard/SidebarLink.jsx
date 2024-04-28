"use client"
import { usePathname } from "next/navigation";
import Link from "next/link";

/**
 * 
 * @param {*} href - The URL path for the sidebar link
 * @returns 
 */
export default function SidebarLink({ href, label, icon }) {

    const pathname= usePathname();
    // Check if the current route matches the href
    const isActive = pathname.endsWith(href);

    return (
      <li>
        <Link href={href} className={`px-4 py-2 h-12 flex items-center justify-start rounded-md transition-all ease-in  ${isActive ? 'bg-[#525E94]' : 'hover:bg-[#525E94]'}`}>
          <div className={` flex items-center`}>
            {icon} <span className="ml-2 hidden lg:block ">{label}</span>
          </div>
        </Link>
      </li>
    );
  }