"use client"
import {usePathname} from "next/navigation"
import authImg1 from "../../../public/assets/authImg1.png"
import authImg2 from "../../../public/assets/authImg2.png"
import React from 'react'
import Image from "next/image"

const AuthImage = () => {
    const pathname = usePathname()
  return (
    <div>
        {pathname == "/auth/login" ? <Image src={authImg2} width={450} /> : <Image src={authImg1} width={450} /> }
    </div>
  )
}

export default AuthImage