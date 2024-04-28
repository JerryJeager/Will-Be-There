"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/assets/logo.png";
import { Button } from "../shared/Button";
import { CgMenuRight } from "react-icons/cg";
import { IoMdAdd, IoMdClose, IoMdNotificationsOutline } from "react-icons/io";
import { usePathname } from "next/navigation";
import { RiMenu2Fill } from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";
import { CgHome, CgMail, CgLogOut } from "react-icons/cg";
import {
  IoChatbubblesOutline,
  IoCalendarOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import EventForm from './dashboard/EventForm'



const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [sideBar, setSideBar] = useState(false);
  const [dashboardSidemenu, setDashboardSideMenu] = useState(false)
  const [ open, setOpen ] = useState(false);

  const pathname = usePathname();
  const iconSize = 24;



  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  const handleSideBar = () => {
    setSideBar(!sideBar);
  };

  const handleDashboardMenu = () => {
    setDashboardSideMenu(!dashboardSidemenu)
  }

  return (
      <div
        className={`${
          isActive && "fixed inset-0 top-0  transition-all duration-200"
        } z-[999] h-24 bg-white flex items-center justify-center w-[100%] m-0 p-0 `}
      >
        {
           pathname.includes('/dashboard') ?  (
            <div className="flex justify-between m-5 md:m-10 items-center w-full text-[1rem] lg:text-lg transition-all ease-in ">
                <div onClick={handleDashboardMenu} className="flex md:hidden">
                    <RiMenu2Fill size={30}/>
                    {
                        dashboardSidemenu && (
                            <div
                                className={`${
                                    dashboardSidemenu ? "fixed w-[50%] sm:w-[50%] left-0" : "-left-96"
                                }  h-screen top-0 pt-4 rounded-l-lg shadow-2xl bg-[#0B195B] z-50 transition-all duration-700 ease-linear `}
                                >
                                <div className=" flex justify-end p-3 text-white" onClick={handleDashboardMenu}   >
                                    <IoMdClose size={30} />
                                </div>
                                <div className="mx-3  space-y-4 text-white text-xl">
                                    <p>
                                        <Link href="/dashboard" className={`px-4 py-2 h-12 flex items-center justify-start rounded-md transition-all ease-in gap-2 hover:bg-[#525E94]`}> <CgHome size={iconSize} />Home</Link>
                                    </p>
                                    <p>
                                        <Link href="/dashboard/events" className={`px-4 py-2 h-12 flex items-center justify-start rounded-md transition-all ease-in gap-2 hover:bg-[#525E94]`}><IoCalendarOutline size={iconSize} />Events</Link>
                                    </p>
                                    <p>
                                        <Link href="/dashboard/invitations" className={`px-4 py-2 h-12 flex items-center justify-start rounded-md transition-all ease-in gap-2 hover:bg-[#525E94]`}><CgMail size={iconSize}/>Invitations</Link>
                                    </p>
                                    <p>
                                        <Link href="/dashboard/settings" className={`px-4 py-2 h-12 flex items-center justify-start rounded-md transition-all ease-in gap-2 hover:bg-[#525E94]`}> <IoSettingsOutline />Settings</Link>
                                    </p>
                                    <p>
                                        <Link href="/dashboard/chat" className={`px-4 py-2 h-12 flex items-center justify-start rounded-md transition-all ease-in gap-2 hover:bg-[#525E94]`}> <IoChatbubblesOutline size={iconSize} />Chat</Link>
                                    </p>
                                    <p>
                                        <Link href="/dashboard/logout" className={`px-4 py-2 h-12 flex items-center justify-start rounded-md transition-all ease-in gap-2 hover:bg-[#525E94]`}> <CgLogOut size={iconSize} />Logout</Link>
                                    </p>
                                    
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className="flex items-center gap-10 lg:gap-24 capitalize font-semibold">
                    <div className="hidden md:flex">
                        <Link href="/">
                            <Image src={logo} alt="logo" />
                        </Link>
                    </div>
                    <div>
                        <Link href="/">
                            <p>home</p>
                        </Link>
                    </div>
                </div>
                <div className=" items-center space-x-8 capitalize flex">
                    <div>
                        <Link href="#">
                            <div className="hidden md:flex">
                                <Button onClick={() => setOpen(true)} text="Create event"/>
                            </div>
                            <span  className="md:hidden"><IoMdAdd size={30}/></span>
                        </Link>
                    </div>
                    <div>
                        <Link href="/">
                            <p className="hidden md:flex">notification</p>
                            <span className="md:hidden flex"><IoMdNotificationsOutline size={30}/></span>
                        </Link>
                    </div>
                    <div>
                        <Link href="/">
                            <p className="hidden md:flex">profile</p>
                            <span className="md:hidden flex"><FaRegUserCircle size={30}/></span>
                        </Link>
                    </div>
                </div>
                
            </div>
          ):
          <ul className="flex justify-between m-5 md:m-10 items-center w-full">
            <li>
              <Link href="/">
                <Image src={logo} alt="logo" />
              </Link>
            </li>
            <li className="gap-10 hidden md:flex transition-all font-semibold">
              <Link href="/dashboard" className="flex items-center space-x-1">
                <span>Features</span>
                <svg
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.41 0.590088L6 5.17009L10.59 0.590088L12 2.00009L6 8.00009L0 2.00009L1.41 0.590088Z"
                    fill="#303036"
                  />
                </svg>
              </Link>
              <Link href="/">
                <span>Overview</span>
              </Link>
              <Link href="/">
                <span>Pricing</span>
              </Link>
            </li>
            <li className=" hidden md:flex transition-all ">
              <Link href="/auth/signup">
                <Button text="Sign Up" />
              </Link>
            </li>
            {/* hamburger-menu */}
            <li className="block md:hidden transition-all relative">
              <p onClick={handleSideBar}>
                <CgMenuRight size={30} />
              </p>
              {sideBar && (
                <div
                  className={`${
                    sideBar ? "fixed w-[70%] sm:w-[50%] right-0" : "-right-96"
                  }  h-screen top-0 pt-4 rounded-l-lg shadow-2xl bg-white z-50 transition-all duration-700 ease-linear `}
                >
                  <div
                    className=" flex justify-end p-3"
                    onClick={handleSideBar}
                  >
                    <IoMdClose size={30} />
                  </div>
                  <div className="ml-3  space-y-4">
                    <p>
                      <Link href="/">Features</Link>
                    </p>
                    <p>
                      <Link href="/">Overview</Link>
                    </p>
                    <p>
                      <Link href="/">Pricing</Link>
                    </p>

                    <p className="text-[#0d35fb] font-semibold">
                      <Link href="/auth/signup">Sign Up</Link>
                    </p>
                  </div>
                </div>
              )}
            </li>
          </ul>
        }
        <EventForm open={open} handleClose={() => setOpen(false)} />
      </div>
  );
};


export default Navbar;
