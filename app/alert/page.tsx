import { Alerts } from '@/components/templates/Alerts'
import React from 'react'

const AlertPage = () => {
    return (
        <section id="HOME____PAGE" className="flex flex-col items-center justify-center w-screen h-screen bg-black">
            <div className='border p-5 mx-auto text-white rounded-lg'>
                <Alerts />
            </div>
        </section>
    )
}

export default AlertPage