"use client"

import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import React, { useState } from "react";
import { cn } from "@/lib/utils";


export default function Navbar(){
    const [active, setActive] = useState<string | null>(null);

    return(
        <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50")}>
            <Menu setActive={setActive}>
                <MenuItem setActive={setActive} active={active} item="Home">
                <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/">Homepage</HoveredLink>
            <HoveredLink href="/dashboard">Dashboard</HoveredLink>
        
          </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="About us">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <div className="flex flex-col space-y-2 text-sm">
                <HoveredLink href="/objective">Objective</HoveredLink>
                <HoveredLink href="/impact">Impact</HoveredLink>
                <HoveredLink href="/contact-us">Contact Us</HoveredLink>
                <HoveredLink href="/testimonials">Testimonials</HoveredLink>
            </div>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Join Now">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/signup">Sign Up</HoveredLink>
            <HoveredLink href="/login">Log In</HoveredLink>
            
          </div>
        </MenuItem>
            </Menu>


        </div>
    )
}