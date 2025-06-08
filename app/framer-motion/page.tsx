"use client";
import React from "react";
import { motion } from "motion/react";

const FramerMotionPage = () => {
    return (
        <div className="p-10">
            <motion.div
                animate={{ rotate: 360, x: 350 }}
                transition={{
                    duration: 1.5,
                    ease: "easeOut",
                    type: "spring",
                    damping: 30,
                    mass: 0.7,
                }}
                className="size-32 bg-orange-500 rounded-xl"
            />
            <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                whileTap={{ scale: 0.8 }}
                whileHover={{ scale: 1.1 }}
                className="size-32 bg-pink-500 rounded-full" />
        </div>
    );
};

export default FramerMotionPage;
