"use client"
import * as React from "react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger, } from "@/components/ui/alert-dialog"
import { BadgeCheckIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"




const ExtrasPage = () => {
    return (
        <div className='w-screen h-screen p-16'>
            {/* TOOLTIP */}
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button variant="outline">Hover</Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Add to library</p>
                </TooltipContent>
            </Tooltip>
            {/* ALERT DIALOG */}
            <AlertDialog>
                <AlertDialogTrigger asChild className='mx-5'>
                    <Button variant="outline">Show Dialog</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone. This will permanently delete your
                            account and remove your data from our servers.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction>Continue</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
            {/* BADGES */}
            <div className="flex flex-col items-center gap-2 mt-5">
                <div className="flex w-full flex-wrap gap-2">
                    <Badge>Badge</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                    <Badge variant="destructive">Destructive</Badge>
                    <Badge variant="outline">Outline</Badge>
                </div>
                <div className="flex w-full flex-wrap gap-2">
                    <Badge
                        variant="secondary"
                        className="bg-blue-500 text-white dark:bg-blue-600"
                    >
                        <BadgeCheckIcon />
                        Verified
                    </Badge>
                    <Badge className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums">
                        8
                    </Badge>
                    <Badge
                        className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums"
                        variant="destructive"
                    >
                        99
                    </Badge>
                    <Badge
                        className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums"
                        variant="outline"
                    >
                        20+
                    </Badge>
                </div>
            </div>
        </div>
    )
}

export default ExtrasPage

