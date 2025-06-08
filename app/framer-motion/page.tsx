"use client";
import React from "react";
import * as motion from "motion/react-client"
import { AnimatePresence, useScroll } from "motion/react";
import { useState } from "react"


const FramerMotionPage = () => {
    const { scrollYProgress } = useScroll()
    const [isOn, setIsOn] = useState(false)
    const [show, setShow] = useState(false)
    const toggleSwitch = () => setIsOn(!isOn)
    return (
        <div className="p-10 relative top-0 left-0">
            <motion.div
                animate={{ rotate: 360, x: 350 }}
                transition={{ duration: 1.5, ease: "easeOut", type: "spring", damping: 30, mass: 0.7, }}
                className="size-32 bg-orange-500 rounded-xl"
            />
            <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                whileTap={{ scale: 0.8 }}
                whileHover={{ scale: 1.1 }}
                className="size-32 bg-pink-500 rounded-full" />

            <button
                id="TOGGLE___BUTTON"
                className="toggle-container mt-6"
                style={{ ...Container, justifyContent: "flex-" + (isOn ? "start" : "end"), backgroundColor: "#fff" }}
                onClick={toggleSwitch}
            >
                <motion.div
                    className="toggle-handle -translate-y-2.5"
                    style={Handle}
                    layout
                    transition={{ type: "spring", visualDuration: 0.2, bounce: 0.2, }}
                />
            </button>

            <AnimatePresence initial={false}>
                <div className="flex flex-col m-10 duration-500">
                    {show ? <motion.div key="box" animate={{ opacity: 1, scale: 1, }} exit={{ opacity: 0, scale: 0 }} transition={{ duration: 3000 }} className="size-32 bg-red-600 rounded-md mt-10" /> : null}
                    <motion.button whileTap={{ scale: 0.95 }} className="toggle-button w-fit bg-emerald-900 p-3 rounded" onClick={() => setShow(!show)}>TOGGLE</motion.button>
                </div>
            </AnimatePresence>

            {/* H-SCREEN DIV **************************************************************************************************************************/}
            <div className="h-screen"></div>
            <motion.div
                id="scroll-indicator"
                style={{ scaleX: scrollYProgress, position: "fixed", top: "60px", left: 0, right: 0, height: 20, originX: 0, backgroundColor: "#ff0088", }}
            />
            <motion.button
                initial={{ scale: 0 }}
                whileInView={{ scale: 1, x: 1100, rotate: 180 }}
                transition={{ duration: 1, ease: "easeOut", mass: 100 }}
                whileTap={{ scale: 0.8 }}
                whileHover={{ scale: 1.1 }}
                className="size-32 bg-blue-500 mx-10 rounded-md" />
        </div>
    );
};

export default FramerMotionPage;

/**
 * ==============   Styles   ================
 */

const Container = {
    width: 120,
    height: 55,
    backgroundColor: "var(--hue-3-transparent)",
    borderRadius: 50,
    cursor: "pointer",
    display: "flex",
    padding: "12px 3px",
}

const Handle = {
    width: 50,
    height: 50,
    backgroundColor: "#9911ff",
    borderRadius: "50%",
}