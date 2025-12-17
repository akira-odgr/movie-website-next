"use client";

import { titleProps } from "@/types/types";
import { motion } from "framer-motion";
import * as variants from "@/motion/animation";

export const Title = ({ title, text, classes }: titleProps) => {
    return (
        <div className="space-y-2">
            <motion.h2 variants={variants.fadeInUp} className="title">
                {title}
            </motion.h2>
            <motion.p
                variants={variants.fadeInUp}
                className={`max-w-3xl ${classes}`}
            >
                {text}
            </motion.p>
        </div>
    );
};

export default Title;
