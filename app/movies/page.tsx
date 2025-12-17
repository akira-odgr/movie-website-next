import VideoTrailer from "./components/VideoTrailer";
import {
    Carousel,
    CarouselContent,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { categoryItems, categoryItemsTwo } from "@/data/data";
import Slider from "@/components/sections/Slider";
import { cn } from "@/lib/utils";

const Movies = () => {
    return (
        <>
            <VideoTrailer />

            {/* movie Genres */}
            <section className="section">
                <div className={cn("container", "space-y-5", "md:space-y-10")}>
                    {/* Title */}
                    <div>
                        <h2 className="title">Our Genres</h2>
                    </div>

                    {/* Wrapper */}
                    <Carousel>
                        <CarouselContent className="-ml-1">
                            {categoryItems.map((item) => (
                                <Slider key={item.id} {...item} />
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
            </section>

            {/* Top 10 Movies */}
            <section className="section">
                <div className="container">
                    <h2 className="title">Popular Top 10 In Genres</h2>

                    {/* Wrapper */}
                    <Carousel>
                        <CarouselContent>
                            {categoryItemsTwo.map((item) => (
                                <Slider key={item.id} {...item} />
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>
            </section>
        </>
    );
};

export default Movies;
