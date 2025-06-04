import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export function CarouselDemo() {
    return (
        <Carousel
            opts={{ align: "start", }}
            className="w-full max-w-sm"
        >
            <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                    <div className="p-1" key={index}>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                            <div className="p-1">
                                <Card className="w-32">
                                    <CardContent className="flex aspect-square items-center justify-center px-8">
                                        <span className="text-3xl font-semibold">{index + 1}</span>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    </div>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
