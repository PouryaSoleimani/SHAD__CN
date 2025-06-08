"use client"
import React from 'react'
import { motion } from "motion/react"


const FramerMotionPage = () => {
    return (
        <div className='p-10'>
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 1.5, ease: "easeIn", type: 'spring' }} className='size-32 bg-orange-500 rounded-xl' />
        </div>
    )
}

export default FramerMotionPage