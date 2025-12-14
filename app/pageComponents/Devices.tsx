import Title from "@/components/common/Title";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { devicesItems } from "@/data/data";
import { cn } from "@/lib/utils";
import Image from "next/image";

export const Devices = () => {
    return (
        <section className="section">
            <div className="container">
                {/* Title */}
                <Title
                    title="好きなエンタメを、いつでも・どこでも"
                    text="スマートフォン、タブレット、ノートパソコン、スマートTVなど、
                            あらゆるデバイスでシームレスにストリーミング。
                            通勤中も、自宅でくつろぐ時間も、外出先でも。
                            StreamVibeはあなたのライフスタイルに寄り添い、
                            どんなシーンでも快適で途切れない再生体験を届けます。
                            どこにいても、大切な瞬間を見逃しません。"
                />

                {/* Wrapper */}
                <div
                    className={cn(
                        "grid gap-5 mt-10",
                        "sm:grid-cols-2",
                        "lg:grid-cols-3 lg:mt-16"
                    )}
                >
                    {devicesItems.map((item) => (
                        <div key={item.id}>
                            <Card className="relative rounded-lg overflow-hidden bg-black-06">
                                <CardHeader className="flex items-center gap-2.5">
                                    {/* icon */}
                                    <span className="shrink-0 size-14 bg-black-08 flex-center ring ring-black-12 rounded-md">
                                        <Image
                                            src={item.icon}
                                            alt={item.title}
                                            width={30}
                                            height={30}
                                        />
                                    </span>

                                    {/* Title */}
                                    <h3 className="text-xl gap-3">
                                        {item.title}
                                    </h3>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-70">{item.text}</p>
                                </CardContent>

                                {/* Gradient Clr */}
                                <div className="absolute -top-9 -right-9 size-24 bg-red-55 rounded-full blur-[100px]" />
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Devices;
