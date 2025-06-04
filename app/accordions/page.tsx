import { Accordions } from '@/components/templates/Accordions'
import React from 'react'

const AccordionPage = () => {
    return (
        <section id="HOME____PAGE" className="flex flex-col items-center justify-center w-screen h-screen bg-black">
            <div className='border w-1/2 p-5 mx-auto text-white rounded-lg'>
                <Accordions />
            </div>
        </section>
    )
}

export default AccordionPage