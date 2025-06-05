"use client"
import { ColumnDef, flexRender, getCoreRowModel, useReactTable, } from "@tanstack/react-table"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from "@/components/ui/table"


interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
}

export function DataTable<TData, TValue>({ columns, data, }: DataTableProps<TData, TValue>) {

    const table = useReactTable({ data, columns, getCoreRowModel: getCoreRowModel(), })

    return (
        <div className="rounded-md border-4 p-3 bg-neutral-900">

            <Table>

                <TableHeader>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map((header) => {
                                return (
                                    <TableHead key={header.id} className="w-fit nth-of-type-[1]:bg-red-600/30 nth-of-type-[2]:bg-blue-600/30 nth-of-type-[3]:bg-emerald-600/30 nth-of-type-[4]:bg-violet-600/30 nth-of-type-[5]:bg-yellow-500/30 text-white font-bold bg-neutral-950 divide-x-2 divide-white border-b-4 border-neutral-500">
                                        {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                                    </TableHead>
                                )
                            })}
                        </TableRow>
                    ))}
                </TableHeader>

                <TableBody>
                    {table.getRowModel().rows?.length ? (
                        table.getRowModel().rows.map((row) => (
                            <TableRow key={row.id} data-state={row.getIsSelected() && "selected"} className="nth-of-type-[odd]:bg-neutral-900 nth-of-type-[even]:bg-neutral-950 hover:!bg-black duration-500" >
                                {row.getVisibleCells().map((cell) => (
                                    <TableCell key={cell.id} className="px-4 py-2">
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={columns.length} className="h-24 text-center">
                                No results.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>

            </Table>

        </div>
    )
}