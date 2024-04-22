"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/assets/logo.png";
import { Button } from "../shared/Button";
import { CgMenuRight } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [sideBar, setSideBar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  const handleSideBar = () => {
    setSideBar(!sideBar);
  };
  return (
    <div
      className={`${
        isActive && "fixed inset-0 top-0  transition-all duration-200"
      } z-[999] h-24 bg-white flex items-center justify-center w-[100%] m-0 p-0 `}
    >
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
          <Link href="/login">
            <span>Overview</span>
          </Link>
          <Link href="/signup">
            <span>Pricing</span>
          </Link>
        </li>
        <li className=" hidden md:flex transition-all ">
          <Link href="/signup">
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
                <IoMdClose size={20} />
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
                  <Link href="/">Sign Up</Link>
                </p>
              </div>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
