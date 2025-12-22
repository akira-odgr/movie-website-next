"use client";

import Title from "@/components/common/Title";
import { Button } from "@/components/ui/button";
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { moviesPageImgs } from "@/data/data";
import { cn } from "@/lib/utils";
import {
    RiAddFill,
    RiArrowLeftLongLine,
    RiArrowRightLongLine,
    RiPlayFill,
    RiThumbUpLine,
    RiVolumeUpLine,
} from "@remixicon/react";
import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import * as variants from "@/motion/animation";

export const VideoTrailer = () => {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        if (!api) {
            return;
        }

        setCurrent(api.selectedScrollSnap());

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap());
        });
    }, [api]);

    const scrollTo = (index: number) => {
        api?.scrollTo(index);
    };

    return (
        <motion.section
            variants={variants.staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={cn("section", "px-4", "md:px-6")}
        >
            <motion.div variants={variants.fadeIn}>
                <Carousel
                    opts={{ loop: true }}
                    setApi={setApi}
                    plugins={[
                        Autoplay({
                            delay: 5000,
                        }),
                    ]}
                    className="w-full"
                >
                    <CarouselContent>
                        {moviesPageImgs.map((item) => (
                            <CarouselItem key={item.id}>
                                <div
                                    className={cn(
                                        "container",
                                        "relative bg-linear-to-t from-black-08 to-black-06/25 h-[650px] rounded-xl overflow-hidden flex flex-col"
                                    )}
                                >
                                    {/* Bg image */}
                                    <div
                                        style={{
                                            backgroundImage: `url(${item.img})`,
                                        }}
                                        className="w-full h-full mb-8 block bg-no-repeat bg-cover bg-center absolute top-0 left-0 -z-10"
                                    />

                                    {/* Content */}
                                    <div className="mt-auto text-center mb-10">
                                        <Title
                                            title={item.title}
                                            text={item.text}
                                            classes={"mx-auto"}
                                        />
                                        {/* Buttons */}
                                        <div className="mt-6">
                                            {[
                                                RiPlayFill,
                                                RiAddFill,
                                                RiThumbUpLine,
                                                RiVolumeUpLine,
                                            ].map((Icon, index) => (
                                                <Button
                                                    key={index}
                                                    variant={
                                                        index === 0
                                                            ? "default"
                                                            : "secondary"
                                                    }
                                                    size={"lg"}
                                                    className="mx-2"
                                                >
                                                    <Icon />
                                                    {index === 0 && "Play Now"}
                                                </Button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    {/* Pagination dots */}
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-0 flex gap-3">
                        {moviesPageImgs.map((_, index) => (
                            <button
                                key={index}
                                className={cn(
                                    "h-1 rounded-full transition-all duration-300",
                                    current === index
                                        ? "w-8 bg-red-45"
                                        : "w-4 bg-black-20 hover:bg-grey-400"
                                )}
                                onClick={() => scrollTo(index)}
                            />
                        ))}
                    </div>

                    {/* Navigation Arrows */}
                    <CarouselPrevious
                        className={cn(
                            "absolute left-12 bottom-10 bg-black-06! size-12 ring ring-black-12 rounded-lg",
                            "sm:left-20",
                            "lg:left-60",
                            "hover:bg-black-10!",
                            "focus:bg-black-10!"
                        )}
                    >
                        <RiArrowLeftLongLine />
                    </CarouselPrevious>
                    <CarouselNext
                        className={cn(
                            "absolute right-12 bottom-10 bg-black-06! size-12 ring ring-black-12 rounded-lg",
                            "sm:right-20",
                            "lg:right-60",
                            "hover:bg-black-10!",
                            "focus:bg-black-10!"
                        )}
                    >
                        <RiArrowRightLongLine />
                    </CarouselNext>
                </Carousel>
            </motion.div>
        </motion.section>
    );
};

export default VideoTrailer;
