"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/assets/logo.png";
import { Button } from "../shared/Button";
import { CgMenuRight } from "react-icons/cg";
import { IoMdAdd, IoMdClose, IoMdNotificationsOutline } from "react-icons/io";
import { usePathname, useRouter } from "next/navigation";
import { RiMenu2Fill } from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";
import { IoChatbubblesOutline } from "react-icons/io5";
import EventForm from "./dashboard/EventForm";
import homeIcon from "../../public/assets/home-06.png";
import eventIcon from "../../public/assets/calendar-03.png";
import invitationIcon from "../../public/assets/mail-01.png";
import settingsIcon from "../../public/assets/setting-07.png";
import logoutIcon from "../../public/assets/logout-02.png";
import { RxDashboard } from "react-icons/rx";
import { CreateEventButton } from "./dashboard";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [sideBar, setSideBar] = useState(false);
  const [dashboardSidemenu, setDashboardSideMenu] = useState(false);
  const [open, setOpen] = useState(false);
  const [eventMenuDropDown, setEventMenuDropdown] = useState(false);

  const pathname = usePathname();
  const router = useRouter();
  const iconSize = 20;
  const eventID = sessionStorage.getItem("event_id")
  const path = `/dashboard/events/${eventID}`;

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  const handleSideBar = () => {
    setSideBar(!sideBar);
  };

  const handleDashboardMenu = () => {
    setDashboardSideMenu(!dashboardSidemenu);
  };

  const handleEventMenuDropDown = () => {
    setEventMenuDropdown(!eventMenuDropDown);
  };

  return (
    <div
      className={`fixed inset-0 z-[999] h-24 bg-white flex items-center justify-center w-[100%] m-0 p-0 transition-all duration-200`}
    >
      {pathname.includes("/dashboard") ? (
        <div className="flex justify-between m-5 md:m-10 items-center w-full text-[1rem] lg:text-lg transition-all ease-in ">
          <div onClick={handleDashboardMenu} className="flex md:hidden">
            <RiMenu2Fill size={20} />
            {dashboardSidemenu && (
              <div
                className={`${
                  dashboardSidemenu
                    ? "fixed w-[50%] sm:w-[30%] left-0"
                    : "-left-96"
                }  h-screen top-0 pt-4 shadow-2xl bg-[#0B195B] z-50 transition-all duration-700 ease-linear `}
              >
                <div
                  className=" flex justify-end p-3 text-white"
                  onClick={handleDashboardMenu}
                >
                  <IoMdClose size={20} />
                </div>
                <div className="mx  space-y-2 text-white text-xl font-[500]">
                  <p>
                    <Link
                      href="/dashboard"
                      className={`px-4 py-2 h-12 flex items-center justify-start rounded-md transition-all ease-in gap-2 hover:bg-[#525E94] text-lg`}
                    >
                      {" "}
                      <Image src={homeIcon} alt="icon" height={20} width={20} />
                      Home
                    </Link>
                  </p>
                  <p>
                    <Link
                      href="/dashboard/"
                      className={`px-4 py-2 h-12 flex items-center justify-start rounded-md transition-all ease-in gap-2 hover:bg-[#525E94] text-lg`}
                    >
                      <Image
                        src={eventIcon}
                        alt="icon"
                        height={20}
                        width={20}
                      />
                      Events
                    </Link>
                  </p>
                  <p>
                    <Link
                      href="#"
                      className={`px-4 py-2 h-12 flex items-center justify-start rounded-md transition-all ease-in gap-2 hover:bg-[#525E94] text-lg`}
                    >
                      <Image
                        src={invitationIcon}
                        alt="icon"
                        height={20}
                        width={20}
                      />
                      Invitations
                    </Link>
                  </p>
                  <p>
                    <Link
                      href="#"
                      className={`px-4 py-2 h-12 flex items-center justify-start rounded-md transition-all ease-in gap-2 hover:bg-[#525E94] text-lg`}
                    >
                      {" "}
                      <Image
                        src={settingsIcon}
                        alt="icon"
                        height={20}
                        width={20}
                      />
                      Settings
                    </Link>
                  </p>
                  <p>
                    <Link
                      href="#"
                      className={`px-4 py-2 h-12 flex items-center justify-start rounded-md transition-all ease-in gap-2 hover:bg-[#525E94] text-lg`}
                    >
                      {" "}
                      <IoChatbubblesOutline size={iconSize} />
                      Chat
                    </Link>
                  </p>
                  <p>
                    <Link
                      href="/"
                      onClick={() => {
                        sessionStorage.clear();
                      }}
                      className={`px-4 py-2 h-12 flex items-center justify-start rounded-md transition-all ease-in gap-2 hover:bg-[#525E94] text-lg`}
                    >
                      {" "}
                      <Image
                        src={logoutIcon}
                        alt="icon"
                        height={20}
                        width={20}
                      />
                      Logout
                    </Link>
                  </p>
                </div>
              </div>
            )}
          </div>
          <div className="flex items-center gap-10 lg:gap-24 capitalize font-semibold">
            <div className="hidden md:flex">
              <Link href="/">
                <Image src={logo} alt="logo" />
              </Link>
            </div>
            <div
              onClick={handleEventMenuDropDown}
              className={`relative ${
                pathname.includes("/dashboard/events")
                  ? "inline-block"
                  : "hidden"
              }`}
            >
              <p className="md:hidden">
                <RxDashboard />
              </p>
              {eventMenuDropDown && (
                <div
                  onMouseLeave={handleEventMenuDropDown}
                  className="absolute top-4 w-60 bg-white rounded shadow-md p-2 h-64 z-50 inset-0 -left-20 right-0 "
                >
                  <ul>
                    <li>
                      <Link
                        href={path}
                        className={`px-4 py-2 h-12 tracking-tighter flex flex-row items-center justify-start rounded-md transition-all ease-in hover:bg-[#525E94] hover:text-white`}
                      >
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={`${path}/guest-list`}
                        className={`px-4 py-2 h-12 tracking-tighter flex flex-row items-center justify-start rounded-md transition-all ease-in hover:bg-[#525E94] hover:text-white`}
                      >
                        Guest List
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={`${path}/rsvp-tracking`}
                        className={`px-4 py-2 h-12 tracking-tighter flex flex-row items-center justify-start rounded-md transition-all ease-in hover:bg-[#525E94] hover:text-white`}
                      >
                        RSVP Tracking
                      </Link>
                    </li>
                    <li>
                      <Link href={`${path}/feedback-tracking`}>
                        <div
                          className={`px-4 py-2 tracking-tighter h-12 flex flex-row items-center justify-start rounded-md transition-all ease-in hover:bg-[#525E94] hover:text-white`}
                        >
                          Feedback Tracking
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={`#`}
                        className={`px-4 py-2 h-12 tracking-tighter flex flex-row items-center justify-start rounded-md transition-all ease-in hover:bg-[#525E94] hover:text-white`}
                      >
                        Event Settings
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className=" items-center space-x-8 capitalize flex">
            <div>
              <div className="hidden md:flex">
                <CreateEventButton />

                <IoMdAdd size={20} className="md:hidden" />
              </div>
            </div>
            <div>
              <Link href="#">
                <p className="hidden md:flex">notification</p>

                <IoMdNotificationsOutline
                  size={20}
                  className="md:hidden flex"
                />
              </Link>
            </div>
            <div>
              <Link href="#">
                <p className="hidden md:flex">profile</p>

                <FaRegUserCircle size={20} className="md:hidden flex" />
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <ul className="flex justify-between m-5 md:m-10 items-center w-full">
          <li>
            <Link href="/">
              <Image src={logo} alt="logo" />
            </Link>
          </li>
          <li className="gap-10 hidden md:flex transition-all font-semibold">
            <Link href="#feature" className="flex items-center space-x-1">
              Features
            </Link>
            <Link href="/">Overview</Link>
            <Link href="#pricing">Pricing</Link>
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
                <div className=" flex justify-end p-3" onClick={handleSideBar}>
                  <IoMdClose size={30} />
                </div>
                <div className="ml-3  space-y-4">
                  <p>
                    <Link href="/dashboard">Features</Link>
                  </p>
                  <p>
                    <Link href="/">Overview</Link>
                  </p>
                  <p>
                    <Link href="#pricing">Pricing</Link>
                  </p>

                  <p className="text-[#0d35fb] font-semibold">
                    <Link href="/auth/signup">Sign Up</Link>
                  </p>
                </div>
              </div>
            )}
          </li>
        </ul>
      )}
      <EventForm open={open} handleClose={() => setOpen(false)} />
    </div>
  );
};

export default Navbar;
