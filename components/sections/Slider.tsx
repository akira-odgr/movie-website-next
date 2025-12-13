import { Card, CardContent, CardFooter } from "../ui/card";
import { CarouselItem } from "../ui/carousel";
import { cardProps } from "@/types/types";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const Slider = ({ imgs, title }: cardProps) => {
    return (
        <CarouselItem className={cn("pl-2", "md:basis-1/3", "lg:basis-1/4")}>
            <div className="p-1">
                <Card className="bg-black-10">
                    <CardContent>
                        <div>
                            {imgs.map((img, index) => (
                                <div
                                    key={index}
                                    style={{ backgroundImage: `url(${img})` }}
                                    className="w-full h-32 bg-cover bg-no-repeat rounded-md"
                                />
                            ))}
                        </div>
                    </CardContent>
                    <CardFooter>
                        <h3>{title}</h3>
                        <Button>
                            <Link href={"#"}>
                                <ArrowRight />
                            </Link>
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </CarouselItem>
    );
};

export default Slider;
