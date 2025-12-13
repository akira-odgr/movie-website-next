"use client";

import { navItems } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Bell, Menu, Search, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { usePathname } from "next/navigation";

export const Header = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const pathname = usePathname();

    const handleClick = () => setIsOpen(!isOpen);

    return (
        <header
            className={cn(
                "fixed top-0 py-4 w-full bg-linear-top-b from-black-08 to-black-08/10 z-40"
            )}
        >
            <div
                className={cn(
                    "container",
                    "relative flex items-center justify-between"
                )}
            >
                {/* Logo */}
                <Link href={"/"}>
                    <Image
                        src={"/images/logo.svg"}
                        alt="logo"
                        width={166}
                        height={50}
                    />
                </Link>

                {/* Mobile Menu */}
                <nav
                    className={cn(
                        "absolute top-full right-4 bg-black-06 ring-1 ring-black-12 p-2 rounded-[10px] divide-y opacity-0 invisible",
                        "lg:hidden",
                        isOpen && "opacity-100 visible"
                    )}
                >
                    <ul className="grid items-center gap-1 mx-auto pb-2">
                        {navItems.map((item) => (
                            <li key={item.id}>
                                <Link
                                    href={item.href}
                                    className={cn(
                                        "px-6 pr-10 py-3 block text-white rounded-lg transition-colors",
                                        pathname === item.href
                                            ? "bg-black-10"
                                            : "hover:bg-black-12"
                                    )}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Btns */}
                    <div className="pt-2 space-x-2">
                        <Button size={"icon-lg"} variant={"ghost"}>
                            <Search />
                        </Button>
                        <Button size={"icon-lg"} variant={"ghost"}>
                            <Bell />
                        </Button>
                    </div>
                </nav>

                {/* DescTop Menu */}
                <nav className={cn("hidden flex-1 items-center", "lg:flex")}>
                    <ul className="flex items-center justify-center gap-1 mx-auto bg-black-06 ring-1 ring-black-12 p-2 rounded-[10px]">
                        {navItems.map((item) => (
                            <li key={item.id}>
                                <Link
                                    href={item.href}
                                    className={cn(
                                        "px-5 py-3 block rounded-lg text-white transition-colors",
                                        "focus:bg-black-12",
                                        pathname === item.href
                                            ? "bg-black-10"
                                            : "hover:bg-black-12"
                                    )}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Btns */}
                    <div className="space-x-2">
                        <Button size={"icon-lg"} variant={"ghost"}>
                            <Search />
                        </Button>
                        <Button size={"icon-lg"} variant={"ghost"}>
                            <Bell />
                        </Button>
                    </div>
                </nav>

                {/* Menu btn */}
                <Button
                    onClick={handleClick}
                    variant={"secondary"}
                    className={cn("lg:hidden")}
                >
                    {isOpen ? <X /> : <Menu />}
                </Button>
            </div>
        </header>
    );
};

export default Header;
