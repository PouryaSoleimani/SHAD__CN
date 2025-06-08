"use client";
import React from "react";
import * as motion from "motion/react-client"
import { useScroll } from "motion/react";
import { useState } from "react"

const FramerMotionPage = () => {
    const { scrollYProgress } = useScroll()
    const [isOn, setIsOn] = useState(false)
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
                className="toggle-container"
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