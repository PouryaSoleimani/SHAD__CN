"use client";

import { ColumnDef } from "@tanstack/react-table"
import Image from "next/image";
import { Bookmark, Copy, History, MoreHorizontal, Star, ArrowUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu"
import { Checkbox } from "@/components/ui/checkbox"


export type Payment = {
    id: string | number
    title: string
    price: number
    category: string
    image: string
}

export const columns: ColumnDef<Payment>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <div className="flex items-center justify-start-safe pl-2">
                <Checkbox
                    checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")}
                    onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                    aria-label="Select all"
                />
            </div>
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "id",
        header: ({ column }) => {
            return (
                <div className="flex items-center justify-between pl-1">
                    ID
                    <Button variant="outline" size="icon" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")} className="flex justify-center items-center px-4 py-1 h-7">
                        <ArrowUpDown />
                    </Button>
                </div>
            )
        },

    },
    {
        accessorKey: "title",
        header: () => { return <h2 className="text-start pl-1.5 tracking-wider">Title</h2> },
        cell: ({ row }) => {
            const title: string = row.getValue("title")
            return <h2 className="font-black !text-start">{title.slice(0, 20).toUpperCase()}</h2>
        }
    },
    {
        accessorKey: "price",
        header: () => <div className="text-center">Price</div>,
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("price"))
            const formatted = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", currencyDisplay: "symbol" }).format(amount)
            return <div className="font-extrabold bg-neutral-600 text-white p-1 text-center rounded w-16 mx-auto">{formatted}</div>
        }
    },
    {
        accessorKey: "category",
        header: () => { return <div className="!text-start pl-1.5">Category</div> },
        cell: ({ row }) => {
            const category: string = row.getValue("category")
            return <div className="uppercase bg-stone-800 p-1.5 rounded w-fit font-black">{category}</div>
        },
    },
    {
        accessorKey: "image",
        header: "Product Image",
        cell: ({ row }) => { return <Image src={row.getValue("image")} alt="product image" width={100} height={100} className="!size-16 rounded mx-auto" /> }
    },
    {
        id: "actions", // ROW ACTIONS
        header: "ACTIONS",
        cell: ({ row }) => {
            const payment = row.original

            return (
                <div className="flex items-center justify-center">
                    <DropdownMenu>

                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0" >
                                <span className="sr-only">Open menu</span>
                                <MoreHorizontal className="h-8 w-8" />
                            </Button>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Options</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={() => console.info(row.original)}><Bookmark /> Save </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => navigator.clipboard.writeText(payment.id.toString())}><Copy /> Copy product ID</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem><Star />View Ratings</DropdownMenuItem>
                            <DropdownMenuItem><History />View Price History</DropdownMenuItem>
                        </DropdownMenuContent>

                    </DropdownMenu>
                </div>
            )
        },
    },

]