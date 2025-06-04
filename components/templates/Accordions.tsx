import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function Accordions() {
    return (
        <Accordion type="single" collapsible className="w-full bg-neutral-950 my-2 rounded-lg p-2 font-bold" defaultValue="item-1" >
            <AccordionItem value="item-1">
                <AccordionTrigger className="text-xl font-bold">Product Information</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p className="text-neutral-400">
                        Our flagship product combines cutting-edge technology with sleek
                        design. Built with premium materials, it offers unparalleled
                        performance and reliability.
                    </p>
                    <p className="text-neutral-400">
                        Key features include advanced processing capabilities, and an
                        intuitive user interface designed for both beginners and experts.
                    </p>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger className="text-xl font-bold">Shipping Details</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p className="text-neutral-400">
                        We offer worldwide shipping <span className="text-chart-5">through</span> trusted courier partners.
                        Standard delivery takes 3-5 business days, while express shipping
                        ensures delivery within 1-2 business days.
                    </p>
                    <p className="text-neutral-400">
                        All orders are carefully packaged and fully insured. Track your
                        shipment in real-time through our dedicated tracking portal.
                    </p>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger className="text-xl font-bold">Return Policy</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p className="text-neutral-400">
                        We stand behind our products with a comprehensive 30-day return
                        policy. If you&apos;re not completely satisfied, simply return the
                        item in its original condition.
                    </p>
                    <p className="text-neutral-400">
                        Our hassle-free return process includes free return shipping and
                        full refunds processed within 48 hours of receiving the returned
                        item.
                    </p>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}
