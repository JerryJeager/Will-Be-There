"use client"
import {usePathname} from "next/navigation"
import authImg1 from "../../../public/assets/authImg1.png"
import authImg2 from "../../../public/assets/authImg2.png"
import authImage from "../../../public/assets/authImage.jpg"
import React from 'react'
import Image from "next/image"

const AuthImage = () => {
    const pathname = usePathname()
  return (
    <div className="flex h-full">
        {pathname == "/auth/login" ? 
          <Image alt="image" src={authImg2} quality={100} className="object-contain" />
         : 
          <Image  alt="image" src={authImage} quality={100} className="object-cover"   />
        }
    </div>
  )
}

export default AuthImage