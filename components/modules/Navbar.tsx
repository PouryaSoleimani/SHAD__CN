import { AvatarDemo } from "./Avatar";
import { ThemeToggler } from "./ThemeToggler";

import React from 'react'

const Navbar = () => {
    return (
        <div className="w-full border-b-2 border-neutral-300 h-16 flex justify-bewtween p-4">
            <ThemeToggler />
            <AvatarDemo />
        </div>
    )
}

export default Navbar