"use client"
import React from 'react'
import { useRouter } from "next/navigation";
import { ChevronLeft, Home } from "lucide-react";
import { Button } from "../ui/button";
import { AvatarDemo } from "./Avatar";
import { ThemeToggler } from "./ThemeToggler";
import Navigation from './Navigation';
import Image from 'next/image';


const NavbarComponent = () => {
    const router = useRouter()
    return (
        <div className="w-full border-b-2 border-neutral-300 h-16 flex justify-between p-4 sticky top-0 z-50 bg-neutral-800">
            <Image src="/next.svg" width={200} height={30} alt='next' />
            <Navigation />
            <div className='flex'>
                <AvatarDemo />
                <div className='flex mx-3'>
                    <Button className="" onClick={() => router.back()}><ChevronLeft /></Button>
                    <Button className="mx-2" onClick={() => router.push('/')}><Home /></Button>
                    <ThemeToggler />
                </div>
            </div>
        </div>
    )
}

export default NavbarComponent;