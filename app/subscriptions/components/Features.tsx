"use client";

import Title from "@/components/common/Title";
import { cn } from "@/lib/utils";
import React from "react";
import PricingTable from "./PricingTable";
import { motion } from "framer-motion";
import * as variants from "@/motion/animation";

export const Features = () => {
    return (
        <section className={cn("pt-24", "md:pt-36")}>
            <motion.div
                variants={variants.staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className={cn("container", "space-y-10", "md:space-y-14")}
            >
                {/* Title */}
                <Title
                    title="プランを比較して、あなたに最適なものを見つけましょう"
                    text="StreamVibeでは、Basic・Standard・Premiumの3つのプランをご用意しています。それぞれの機能を比較して、あなたに最適なプランをお選びください"
                />

                {/* Table */}
                <PricingTable />
            </motion.div>
        </section>
    );
};

export default Features;
