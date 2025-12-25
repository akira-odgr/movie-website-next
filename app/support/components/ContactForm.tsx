"use client";

import Title from "@/components/common/Title";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { formItems } from "@/data/data";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import Inputfield from "@/components/sections/Inputfield";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import * as variants from "@/motion/animation";

export const ContactForm = () => {
    return (
        <motion.section
            variants={variants.staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={cn("pt-24", "md:pt-36")}
        >
            <div
                className={cn(
                    "container",
                    "grid gap-14",
                    "lg:grid-cols-[0.7fr_1fr]"
                )}
            >
                {/* content */}
                <div className={cn("space-y-8", "lg:space-y-10")}>
                    {/* Title */}
                    <Title
                        title="サポートページへようこそ！"
                        text="製品に関するあらゆるお困りごとを、私たちがサポートします。"
                    />

                    {/* Card */}
                    <motion.div variants={variants.fadeIn}>
                        <Card className="max-w-max bg-black-06">
                            <CardContent>
                                <Image
                                    src={"/images/support-page-img.png"}
                                    alt="image"
                                    width={449}
                                    height={547}
                                    className="w-auto h-auto"
                                    loading="eager"
                                />
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>

                {/* form */}
                <motion.form variants={variants.fadeIn}>
                    <Card>
                        <CardContent
                            className={cn("grid gap-5", "md:grid-cols-2")}
                        >
                            {formItems.map((item) => (
                                <Inputfield key={item.id} {...item} />
                            ))}
                            <div
                                className={cn(
                                    "grid w-full gap-3",
                                    "md:col-span-2"
                                )}
                            >
                                <Label htmlFor="message">Your Message</Label>
                                <Textarea
                                    placeholder="Type your message here."
                                    id="message"
                                />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button size={"lg"}>メッセージを送信</Button>
                        </CardFooter>
                    </Card>
                </motion.form>
            </div>
        </motion.section>
    );
};

export default ContactForm;
