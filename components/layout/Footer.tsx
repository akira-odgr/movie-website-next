import { footerList } from "@/data/data";
import { cn } from "@/lib/utils";
import {
    RiFacebookFill,
    RiLinkedinBoxFill,
    RiTwitterXFill,
} from "@remixicon/react";
import Link from "next/link";

export const Footer = () => {
    return (
        <footer className="pt-14 bg-black-06 mt-14">
            <div className={cn("container", "divide-y divide-black-12")}>
                {/* Footer top */}
                <div
                    className={cn(
                        "grid grid-cols-2 gap-8 pb-14",
                        "sm:grid-cols-3",
                        "lg:grid-cols-4 lg:pb-20",
                        "xl:grid-cols-6"
                    )}
                >
                    {footerList.map((item) => (
                        <div key={item.id} className="space-y-4">
                            <p className="text-white font-semibold">
                                {item.title}
                            </p>
                            <ul className="space-y-2">
                                {item.list.map((label, index) => (
                                    <li key={index}>
                                        <a href="#" className="hover:underline">
                                            {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Social Links */}
                    <div className="">
                        <p className="font-semibold text-white">Contact Us</p>
                        <div className="flex items-center gap-2.5 mt-4">
                            {[
                                RiFacebookFill,
                                RiTwitterXFill,
                                RiLinkedinBoxFill,
                            ].map((Icon, index) => (
                                <a
                                    href="#"
                                    key={index}
                                    className={cn(
                                        "size-11 flex-center bg-black-10 rounded-lg text-white transition-colors ring-2 ring-black-15",
                                        "hover:bg-black-15"
                                    )}
                                >
                                    <Icon />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                {/* Footer bottom */}
                <div className="flex items-center justify-between flex-wrap mt-5 pb-5 space-y-3">
                    <p>
                        &copy; {new Date().getFullYear()} streamvib, All Rights
                        Reserved
                    </p>

                    {/* Links */}
                    <div>
                        {[
                            "Terms of Use",
                            "Privacy Policy",
                            "Cookie Policy",
                        ].map((label, index) => (
                            <Link key={index} href={"#"}>
                                {label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
