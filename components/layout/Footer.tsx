"use client";

import { footerList } from "@/data/data";
import { cn } from "@/lib/utils";
import {
    RiFacebookFill,
    RiLinkedinBoxFill,
    RiTwitterXFill,
} from "@remixicon/react";
import Link from "next/link";
import { motion } from "framer-motion";
import * as variants from "@/motion/animation";

export const Footer = () => {
    return (
        <footer className="pt-14 bg-black-06 mt-14">
            <motion.div
                variants={variants.staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
                className={cn("container", "divide-y divide-black-12")}
            >
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
                        <motion.div
                            variants={variants.fadeInUp}
                            key={item.id}
                            className="space-y-4"
                        >
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
                        </motion.div>
                    ))}

                    {/* Social Links */}
                    <motion.div variants={variants.fadeInUp}>
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
                    </motion.div>
                </div>
                {/* Footer bottom */}
                <div className="flex items-center justify-between flex-wrap mt-5 pb-5 space-y-3">
                    <motion.p variants={variants.fadeIn}>
                        &copy; {new Date().getFullYear()} streamvib, All Rights
                        Reserved
                    </motion.p>

                    {/* Links */}
                    <motion.div
                        variants={variants.fadeIn}
                        className="divide-x divide-black-20 space-x-2"
                    >
                        {[
                            "Terms of Use",
                            "Privacy Policy",
                            "Cookie Policy",
                        ].map((label, index) => (
                            <Link
                                key={index}
                                href={"#"}
                                className={cn(
                                    "inline-block pr-2 text-gray-65",
                                    "hover:underline"
                                )}
                            >
                                {label}
                            </Link>
                        ))}
                    </motion.div>
                </div>
            </motion.div>
        </footer>
    );
};

export default Footer;
