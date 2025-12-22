import Title from "@/components/common/Title";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { formItems } from "@/data/data";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import Inputfield from "@/components/sections/Inputfield";
import { Button } from "@/components/ui/button";

export const ContactForm = () => {
    return (
        <section className={cn("pt-24", "md:pt-36")}>
            <div className="container">
                {/* content */}
                <div>
                    {/* Title */}
                    <Title
                        title="サポートページへようこそ！"
                        text="製品に関するあらゆるお困りごとを、私たちがサポートします。"
                    />
                </div>

                {/* Card */}
                <Card>
                    <CardContent>
                        <Image
                            src={"/images/support-page-img.png"}
                            alt="image"
                            width={449}
                            height={547}
                        />
                    </CardContent>
                </Card>
            </div>

            {/* form */}
            <form action="">
                <Card>
                    <CardContent>
                        {formItems.map((item) => (
                            <Inputfield key={item.id} {...item} />
                        ))}
                    </CardContent>
                    <CardFooter>
                        <Button size={"lg"}>メッセージを送信</Button>
                    </CardFooter>
                </Card>
            </form>
        </section>
    );
};

export default ContactForm;
