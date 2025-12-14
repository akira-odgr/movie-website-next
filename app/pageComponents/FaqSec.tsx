import Title from "@/components/common/Title";
import AccordionSec from "@/components/sections/AccordionSec";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const FaqSec = () => {
    return (
        <section className="section">
            <div className={cn("container")}>
                {/* Title */}
                <Title
                    title="FAQ"
                    text="アカウントの設定から、画質やストリーミング環境、料金、対応デバイスまで。StreamVibeに関するあらゆる疑問に、すぐに答えが見つかります。それでも解決しない場合は、サポートチームがワンクリックでお手伝いします。"
                />

                {/* Wrapper */}
                <div className={cn("mt-12", "md:mt-18", "lg:mt-20")}>
                    <AccordionSec />
                </div>

                {/* Btn */}
                <Button className={cn("mt-16", "lg:mt-20")} size={"lg"}>
                    お問い合わせ
                </Button>
            </div>
        </section>
    );
};

export default FaqSec;
