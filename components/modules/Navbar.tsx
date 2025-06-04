"use client"
import React from 'react'
import { useRouter } from "next/navigation";
import { ChevronLeft, Home } from "lucide-react";
import { Button } from "../ui/button";
import { AvatarDemo } from "./Avatar";
import { ThemeToggler } from "./ThemeToggler";


const Navbar = () => {
    const router = useRouter()
    return (
        <div className="w-full border-b-2 border-neutral-300 h-16 flex justify-bewtween p-4">
            <Button className="" onClick={() => router.back()}><ChevronLeft /></Button>
            <Button className="mx-2" onClick={() => router.push('/')}><Home /></Button>
            <ThemeToggler />
            <AvatarDemo />
        </div>
    )
}

export default Navbar