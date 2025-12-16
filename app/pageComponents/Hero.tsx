"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { RiPlayFill } from "@remixicon/react";
import Image from "next/image";
import { motion } from "framer-motion";
import * as variants from "@/motion/animation";
import { span } from "framer-motion/client";

export const Hero = () => {
    const title = "あなたの“好き”を、いつでもどこでも";
    const words = title.split("");
    return (
        <section className="relative bg-[url(/images/hero-bg-img.png)] bg-cover bg-center bg-no-repeat h-svh">
            <motion.div
                variants={variants.staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className={cn(
                    "container",
                    "flex-center flex-col h-full max-h-svh"
                )}
            >
                {/* Image */}
                <motion.div
                    variants={variants.fadeIn}
                    className="aspect-square my-auto"
                >
                    <Image
                        src={"/images/play-logo.svg"}
                        alt="hero logo"
                        width={200}
                        height={200}
                        className="w-full h-auto object-cover"
                    />
                </motion.div>

                {/* content */}
                <div className="text-center text-white pb-8">
                    <motion.h1
                        variants={variants.splitTextContainer}
                        className={cn("text-3xl", "sm:text-4xl", "lg:text-5xl")}
                    >
                        {words.map((word, index) => (
                            <motion.span
                                variants={variants.splitTextWord}
                                key={index}
                                className="inline-block mr-2 origin-bottom"
                            >
                                {word}
                            </motion.span>
                        ))}
                    </motion.h1>
                    <motion.p
                        variants={variants.fadeInUp}
                        className="max-w-[1140px] mx-auto mt-2.5 mb-10"
                    >
                        無制限の映画。終わりなきショー。待ち時間ゼロ。
                        StreamVibeなら数千ものタイトルをあなたの手元に──
                        最新作から名作、そしてそのすべての間にある物語まで。
                        カスタムウォッチリストを作成し、どんなデバイスでも視聴可能。
                        ひらめいたその瞬間に、次のお気に入りの作品へ飛び込もう。
                    </motion.p>
                    <motion.div variants={variants.fadeInUp}>
                        <Button size={"lg"}>
                            <span>
                                <RiPlayFill />
                            </span>
                            いますぐ視聴スタート
                        </Button>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
