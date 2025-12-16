"use client";

import {
    Carousel,
    CarouselContent,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Title from "@/components/common/Title";
import { categoryItems } from "@/data/data";
import Slider from "@/components/sections/Slider";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import * as variants from "@/motion/animation";

export const Categories = () => {
    return (
        <section className="section">
            <motion.div
                variants={variants.staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
                className={cn("container", "space-y-10", "lg:space-y-16")}
            >
                {/* Title */}
                <Title
                    title="充実のカテゴリーラインナップを探索"
                    text="笑って楽しめるコメディも、心を揺さぶるドラマも、新しい発見に出会えるドキュメンタリーも"
                />

                {/* Wrapper */}
                <motion.div variants={variants.fadeIn}>
                    <Carousel
                        className={cn("w-full", "max-lg:overflow-x-hidden")}
                    >
                        <CarouselContent className="-ml-1">
                            {categoryItems.map((item) => (
                                <Slider key={item.id} {...item} />
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Categories;
