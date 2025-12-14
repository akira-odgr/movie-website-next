import Title from "@/components/common/Title";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Cta = () => {
    return (
        <section className="section">
            <div className="container">
                {/* Title */}
                <div
                    className={cn(
                        "cta-image",
                        "py-14 px-8 text-center ring ring-black-20 rounded-lg flex flex-col items-center gap-14",
                        "lg:px-12 lg:text-left lg:flex-row lg:gap-24"
                    )}
                >
                    <Title
                        title="今すぐ無料トライアルを始めよう！"
                        text="今すぐ無料トライアルを始めて、多くの人に選ばれるStreamVibeの魅力を体感しよう。"
                    />

                    <Button size={"lg"}>無料トライアルを始める</Button>
                </div>
            </div>
        </section>
    );
};

export default Cta;
