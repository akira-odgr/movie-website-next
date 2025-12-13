import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { RiPlayFill } from "@remixicon/react";
import Image from "next/image";
import React from "react";

export const Hero = () => {
    return (
        <section className="relative bg-[url(/images/hero-bg-img.png)] bg-cover bg-center bg-no-repeat h-svh">
            <div
                className={cn(
                    "container",
                    "flex flex-col justify-center items-center h-full max-h-svh"
                )}
            >
                {/* Image */}
                <div className="aspect-square my-auto">
                    <Image
                        src={"/images/play-logo.svg"}
                        alt="hero logo"
                        width={200}
                        height={200}
                        className="w-full h-auto object-cover"
                    />
                </div>

                {/* content */}
                <div className="text-center text-white pb-8">
                    <h1
                        className={cn("text-3xl", "sm:text-4xl", "lg:text-5xl")}
                    >
                        あなたの“好き”を、いつでもどこでも
                    </h1>
                    <p className="max-w-[1140px] mx-auto mt-2.5 mb-10">
                        無制限の映画。終わりなきショー。待ち時間ゼロ。
                        StreamVibeなら数千ものタイトルをあなたの手元に──
                        最新作から名作、そしてそのすべての間にある物語まで。
                        カスタムウォッチリストを作成し、どんなデバイスでも視聴可能。
                        ひらめいたその瞬間に、次のお気に入りの作品へ飛び込もう。
                    </p>
                    <Button size={"lg"}>
                        <span>
                            <RiPlayFill />
                        </span>
                        いますぐ視聴スタート
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
