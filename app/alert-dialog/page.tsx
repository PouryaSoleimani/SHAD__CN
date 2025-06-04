import { AlertDialogs } from '@/components/templates/AlertDialogs'
import React from 'react'

const AlertDialogPage = () => {
    return (
        <section id="HOME____PAGE" className="flex flex-col items-center justify-center w-screen h-screen bg-black">
            <div className='border p-5 mx-auto text-white rounded-lg'>
                <AlertDialogs />
            </div>
        </section>
    )
}

export default AlertDialogPage