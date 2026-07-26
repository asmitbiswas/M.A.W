'use client'
import Link from "next/link"
import { useState } from "react"
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
export default function NavBar({className} : {className? : string}){
    const[active, setActive] = useState<string | null>(null)
    return(
        <div className={cn("fixed inset-x-0 top-10 z-50 mx-auto max-w-2xl", className)}>
        Navbar
        </div>
    )
}