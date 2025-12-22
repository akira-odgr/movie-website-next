import React from "react";
import { CarouselItem } from "../ui/carousel";
import { Card, CardContent, CardFooter } from "../ui/card";
import { cardPropsTwo } from "@/types/types";
import { Timer } from "lucide-react";
import { RiEyeFill } from "@remixicon/react";
import { cn } from "@/lib/utils";

export const SliderTwo = ({ cardImg, view, duration }: cardPropsTwo) => {
    return (
        <CarouselItem className={cn("pl-2", "md:basis-1/3", "lg:basis-1/4")}>
            <div className="p-1">
                <Card className="bg-black-10 border-black-15">
                    <CardContent>
                        {/* Image */}
                        <div
                            style={{ backgroundImage: `url(${cardImg})` }}
                            className="w-full h-[232px] bg-cover bg-no-repeat bg-center rounded-md"
                        />
                    </CardContent>
                    <CardFooter className="relative flex justify-between items-center z-10">
                        <div className="flex items-center gap-0.5 bg-black-08 ring-1 ring-black-15 py-1 px-1.5 rounded-4xl">
                            <span className="shrink-0">
                                <Timer size={16} />
                            </span>
                            <p className="text-xs">{duration}</p>
                        </div>
                        <div className="flex items-center gap-0.5 bg-black-08 ring-1 ring-black-15 py-1 px-1.5 rounded-4xl">
                            <span className="shrink-0">
                                <RiEyeFill size={16} />
                            </span>
                            <p className="text-xs">{view}</p>
                        </div>
                    </CardFooter>
                </Card>
            </div>
        </CarouselItem>
    );
};

export default SliderTwo;
