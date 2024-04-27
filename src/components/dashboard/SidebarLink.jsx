"use client"
import { usePathname } from "next/navigation";
import Link from "next/link";


export default function SidebarLink({ ...props }) {

  const { href, label, icon, isActive, isDisplayed } = props;

  return (
    <li className="w-full">
      <Link href={href}>
        <div className={`flex flex-row items-center h-12 ${isDisplayed ? 'w-full px-4 py-2 justify-start' : 'w-12 p-auto justify-center'}  rounded-md transition-all ease-in ${isActive ? 'bg-[#525E94]' : 'hover:bg-[#525E94]'}`}>
          <>{icon}{isDisplayed && <span className={'ml-4'}>{label}</span>}</>
        </div>
      </Link>
    </li>
  );
}