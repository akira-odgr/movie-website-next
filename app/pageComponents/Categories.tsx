import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Title from "@/components/common/Title";
import { categoryItems } from "@/data/data";
import Slider from "@/components/sections/Slider";
import { cn } from "@/lib/utils";

export const Categories = () => {
    return (
        <section className="section">
            <div className={cn("container", "space-y-10", "lg:space-y-16")}>
                {/* Title */}
                <Title
                    title="充実のカテゴリーラインナップを探索"
                    text="笑って楽しめるコメディも、心を揺さぶるドラマも、新しい発見に出会えるドキュメンタリーも"
                />

                {/* Wrapper */}
                <div>
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
                </div>
            </div>
        </section>
    );
};

export default Categories;
