"use client"; 
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from 'next/image';
import logo from '../../public/assets/logo.png'
import { Button } from "../shared/Button";
import menu from '../../public/assets/Menu.png'

const Navbar = () => {
    const [isActive, setIsActive] = useState(false)

    useEffect(()=> {
        window.addEventListener('scroll', ()=> {
            window.scrollY > 60 ? setIsActive(true) : setIsActive(false)
        })
    })
    return (
        <div className={`${isActive && 'fixed inset-0 top-0  transition-all duration-200 bg-white/80 backdrop-blur'} z-[999] h-24 bg-white flex items-center justify-center w-[100%] m-0 p-0 `}>
            <ul className="flex justify-between m-5 md:m-10 items-center w-full">
                <div>
                    <Link href="/">
                        <li><Image src={logo} alt="logo"/></li>
                    </Link>
                </div>
                <div className="gap-10 hidden md:flex transition-all">
                    <Link href="/dashboard">
                        <li className="flex items-center space-x-1">
                            <p>Features</p>
                            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.41 0.590088L6 5.17009L10.59 0.590088L12 2.00009L6 8.00009L0 2.00009L1.41 0.590088Z" fill="#303036"/>
                            </svg>
                        </li>
                    </Link>
                    <Link href="/login">
                        <li>Overview</li>
                    </Link>
                    <Link href="/signup">
                        <li>Pricing</li>
                    </Link>
                </div>
                <div className=" hidden md:flex transition-all">
                    <Link href="/signup">
                        <li>
                            <Button text="signup"/>
                        </li>
                    </Link>
                </div>
                <div className="block md:hidden transition-all ">
                    <p>
                        <Image src={menu} alt="menu"/>
                    </p>
                </div>
            </ul>
        </div>
    );
};

export default Navbar;
