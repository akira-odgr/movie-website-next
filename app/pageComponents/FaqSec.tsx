"use client";

import Title from "@/components/common/Title";
import AccordionSec from "@/components/sections/AccordionSec";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import * as variants from "@/motion/animation";

export const FaqSec = () => {
    return (
        <section className="section">
            <motion.div
                variants={variants.staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
                className={cn("container")}
            >
                {/* Title */}
                <Title
                    title="FAQ"
                    text="アカウントの設定から、画質やストリーミング環境、料金、対応デバイスまで。StreamVibeに関するあらゆる疑問に、すぐに答えが見つかります。それでも解決しない場合は、サポートチームがワンクリックでお手伝いします。"
                />

                {/* Wrapper */}
                <motion.div
                    variants={variants.fadeIn}
                    className={cn("mt-12", "md:mt-18", "lg:mt-20")}
                >
                    <AccordionSec />
                </motion.div>

                {/* Btn */}
                <motion.div variants={variants.fadeIn}>
                    <Button className={cn("mt-16", "lg:mt-20")} size={"lg"}>
                        お問い合わせ
                    </Button>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default FaqSec;
