import { CarouselDemo } from '@/components/templates/Carousel'
import React from 'react'

const CarouselPage = () => {
    return (
        <section id="HOME____PAGE" className="flex flex-col items-center justify-center w-screen h-screen bg-black">
            <div className='border p-5 mx-auto text-white rounded-lg'>
                <CarouselDemo />
            </div>
        </section>
    )
}

export default CarouselPage