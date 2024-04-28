"use client"
import { usePathname } from "next/navigation";
import Link from "next/link";


export default function SidebarLink({ ...props }) {

  const { href, label, icon, isActive, isDisplayed } = props;

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