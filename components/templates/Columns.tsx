"use client";

import { ColumnDef } from "@tanstack/react-table"
import Image from "next/image";

export type Payment = {
    id: string | number
    title: string
    price: number
    category: string
    image: string
}

export const columns: ColumnDef<Payment>[] = [
    {
        accessorKey: "id",
        header: "ID",
    },
    {
        accessorKey: "title",
        header: "Title",
        cell: ({ row }) => {
            const title: string = row.getValue("title")
            return <h2 className="border-r w-fit">{title.slice(0, 20).toUpperCase()}</h2>
        }
    },
    {
        accessorKey: "price",
        header: () => <div className="text-center">Price</div>,
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("price"))
            const formatted = new Intl.NumberFormat("en-US", { style: "currency", currency: "EUR", }).format(amount)
            return <div className="font-extrabold bg-emerald-600 text-white p-1 text-center rounded w-20 mx-auto">{formatted}</div>
        }
    },
    {
        accessorKey: "category",
        header: "Category",
        cell: ({ row }) => {
            const category: string = row.getValue("category")
            return <div className="uppercase bg-stone-800 p-1 rounded w-fit font-black">{category}</div>
        },
    },
    {
        accessorKey: "image",
        header: "Product Image",
        cell: ({ row }) => {
            return <Image src={row.getValue("image")} alt="product image" width={100} height={100} className="!size-16 rounded mx-auto" />
        }
    },
]