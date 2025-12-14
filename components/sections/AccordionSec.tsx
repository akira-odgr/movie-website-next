import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { faqListItems } from "@/data/data";
import { cn } from "@/lib/utils";

export const AccordionSec = () => {
    return (
        <Accordion
            type="single"
            collapsible
            className={cn("w-full grid gap-5", "md:grid-cols-2 md:space-x-10")}
            defaultValue="What is StreamVibe?"
        >
            {faqListItems.map((item) => (
                <AccordionItem value={item.title} key={item.id}>
                    <AccordionTrigger>
                        <div className="flex items-center gap-4">
                            <span className="size-12 shrink-0 bg-black-12 flex-center ring ring-black-15 rounded-full">
                                {item.id}
                            </span>
                            <p>{item.title}</p>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance">
                        <p>{item.text}</p>
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    );
};

export default AccordionSec;
