"use client";

import { motion } from "motion/react";
import IconDefault from "../icons/IconDefault";


interface Props {
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
    name?: string;
}

const ease = [0.65, 0, 0.35, 1] as const;
const GRAY_800 = "#1f2937";

export default function ButtonSecondary({
    type = "button",
    onClick,
    name
}: Props) {
    return (
        <motion.button
            type={type}
            onClick={onClick}
            name={name}
            initial="rest"
            animate="rest"
            whileHover="hover"
            whileTap="tap"
            variants={{ rest: { scale: 1 }, hover: { scale: 1 }, tap: { scale: 0.96 } }}
            className={`relative hover:drop-shadow-2xl cursor-pointer overflow-hidden flex items-center 
                gap-3 bg-gray-800 text-white border border-slate-600 rounded-full pl-6 pr-2 py-2 
                font-semibold`}
        >
            {/* fill: rises from the bottom, curve flattens so it covers the whole button */}
            <motion.span
                aria-hidden
                className="absolute inset-0 bg-white"
                variants={{
                    rest: {
                        y: "101%",
                        borderRadius: "50% 50% 0% 0% / 100% 100% 0% 0%",
                    },
                    hover: {
                        y: "0%",
                        borderRadius: "0% 0% 0% 0% / 0% 0% 0% 0%",
                    },
                }}
                transition={{ duration: 0.5, ease }}
            />

            {/* rolling label */}
            <span className="relative block h-6 overflow-hidden leading-6">
                <motion.span
                    className="block text-white"
                    variants={{ rest: { y: 0 }, hover: { y: -24 } }}
                    transition={{ duration: 0.4, ease }}
                >
                    {name}
                </motion.span>
                <motion.span
                    aria-hidden
                    className="block text-gray-800"
                    variants={{ rest: { y: 0 }, hover: { y: -24 } }}
                    transition={{ duration: 0.4, ease }}
                >
                    {name}
                </motion.span>
            </span>

            {/* arrow chip: inverts on hover, arrow exits right and re-enters from the left */}
            <motion.span
                className="relative w-10 h-10 overflow-hidden flex items-center justify-center rounded-full"
                variants={{
                    rest: { backgroundColor: "#ffffff" },
                    hover: { backgroundColor: GRAY_800 },
                }}
                transition={{ duration: 0.3, ease, delay: 0.1 }}
            >
                <motion.span
                    className="absolute flex items-center justify-center"
                    variants={{ rest: { x: 0 }, hover: { x: 40 } }}
                    transition={{ duration: 0.35, ease }}>
                    <IconDefault type="right" css="text-md text-gray-800" />
                </motion.span>
                <motion.span
                    aria-hidden
                    className="absolute flex items-center justify-center"
                    variants={{ rest: { x: -40 }, hover: { x: 0 } }}
                    transition={{ duration: 0.35, ease, delay: 0.08 }}>
                    <IconDefault type="right" css="text-white" />
                </motion.span>
            </motion.span>
        </motion.button>
    );
}