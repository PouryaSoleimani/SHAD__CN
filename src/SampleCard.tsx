import { BiAddToQueue, BiCartAdd } from "react-icons/bi";
"use client"

import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"

export function SampleCard() {
    return (
        <Card className="w-96 bg-gradient-to-r from-blue-500/50 to-purple-500/50 text-white border">
            <CardHeader>
                <CardTitle className="text-center text-2xl font-sans font-black">Special Product</CardTitle>
                <CardDescription className="text-center text-neutral-800 tracking-widest">This is a Special Product</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum vel explicabo accusantium doloribus sed! Earum?</p>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
                <Badge variant="secondary" className="!p-3 font-bold">NEW</Badge>

                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button variant="buy" size="default"><BiCartAdd /></Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        This is content
                    </TooltipContent>
                </Tooltip>

            </CardFooter>
        </Card>
    )
}
