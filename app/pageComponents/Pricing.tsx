import Title from "@/components/common/Title";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { pricingCardItem } from "@/data/data";
import { cn } from "@/lib/utils";

export const Pricing = () => {
    return (
        <section className={cn("pt-24", "md:pt-36")}>
            <div className="container">
                {/* Title */}
                <Title
                    title="あなたに合ったプランを選択"
                    text="StreamVibeに参加して、視聴スタイルに合わせた柔軟なサブスクリプションプランを選びましょう。止まらないエンターテインメント体験が、ここから始まります。"
                />

                {/* Wrapper */}
                <div
                    className={cn(
                        "grid gap-5 mt-10",
                        "sm:grid-cols-2",
                        "lg:grid-cols-3 lg:mt-14"
                    )}
                >
                    {pricingCardItem.map((item) => (
                        <Card
                            key={item.id}
                            className="flex flex-col bg-black-10"
                        >
                            <CardContent>
                                <h3 className="pb-3">{item.title}</h3>
                                <p className="text-gray-60">{item.text}</p>
                                <span
                                    className={cn(
                                        "text-2xl mt-8 inline-block font-semibold",
                                        "lg:text-4xl"
                                    )}
                                >
                                    {item.price.toFixed(3)}円 / 月
                                </span>
                            </CardContent>
                            <CardFooter className="mt-auto flex gap-3">
                                <Button
                                    size={"sm"}
                                    variant={"outline"}
                                    className="flex-1"
                                >
                                    無料トライアルを開始
                                </Button>
                                <Button size={"sm"} className="flex-1">
                                    プランを選択
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
