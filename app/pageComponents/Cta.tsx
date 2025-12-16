"use client";

import Title from "@/components/common/Title";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import * as variants from "@/motion/animation";

export const Cta = () => {
    return (
        <section className="section">
            <motion.div
                variants={variants.staggerContainer}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.5 }}
                className="container"
            >
                <motion.div
                    variants={variants.fadeInUp}
                    className={cn(
                        "cta-image",
                        "py-14 px-8 text-center ring ring-black-20 rounded-lg flex flex-col items-center gap-14",
                        "lg:px-12 lg:text-left lg:flex-row lg:gap-24"
                    )}
                >
                    {/* Title */}
                    <Title
                        title="今すぐ無料トライアルを始めよう！"
                        text="今すぐ無料トライアルを始めて、多くの人に選ばれるStreamVibeの魅力を体感しよう。"
                    />

                    <Button size={"lg"}>無料トライアルを始める</Button>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Cta;
