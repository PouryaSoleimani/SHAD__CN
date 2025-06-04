import { AvatarDemo } from "./Avatar";
import { ThemeToggler } from "./ThemeToggler";

import React from 'react'

const Navbar = () => {
    return (
        <div className="absolute top-0 left-0 right-0 w-full border-b-2 border-neutral-300 h-16 flex justify-end p-4">
            <ThemeToggler />
            <AvatarDemo />
        </div>
    )
}

export default Navbar