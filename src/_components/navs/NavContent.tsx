"use client"

import MenuButton from "../buttons/MenuButton"
import Logo from "../logos/Logo"
import Nav from "./Nav"



export default function NavContent() {
    return (
        <>
            <div className="hidden items-center justify-between gap-6 lg:flex">
                <Logo />
                <Nav />
            </div>

            <div className="flex items-center justify-between gap-6 lg:hidden">
                <Logo />
                <MenuButton color="text-white" />
            </div>
        </>
    )

}
