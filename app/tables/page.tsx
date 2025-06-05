import React from 'react'
import { columns, Payment } from "@/components/templates/Columns"
import { DataTable } from "@/components/templates/DataTable"


async function getData(): Promise<Payment[]> {
    const req = fetch("https://fakestoreapi.com/products").then((res) => res.json())
    return req
}

const TablesPage = async () => {
    const data = await getData()
    console.info("DATA ===> ", data)
    return (
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={data} />
        </div>
    )
}

export default TablesPage