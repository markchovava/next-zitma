"use client"

import Image from "next/image"
import {
    motion,
    useMotionTemplate,
    useMotionValue,
    type Variants,
} from "motion/react"
import { PartnerInterface } from "@/_data/entity/PartnerEntity"




/* ---------- client card with cursor spotlight ---------- */

export default function PartnerCard({ data }: { data: PartnerInterface }) {
    const mouseX = useMotionValue(-200)
    const mouseY = useMotionValue(-200)

    const spotlight = useMotionTemplate`radial-gradient(160px circle at ${mouseX}px ${mouseY}px, rgba(30, 41, 59, 0.22), transparent 70%)`

    return (
        <motion.div
            onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect()
                mouseX.set(e.clientX - rect.left)
                mouseY.set(e.clientY - rect.top)
            }}
            onMouseLeave={() => {
                mouseX.set(-200)
                mouseY.set(-200)
            }}
            whileHover={{ y: -6, scale: 1.04 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="group relative mx-3 flex h-24 w-44 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-black/5 bg-white/80 p-4 shadow-sm backdrop-blur-md md:h-28 md:w-56"
        >
            <motion.div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{ background: spotlight }}
            />
            <Image
                src={data.image}
                alt={data.name}
                width={400}
                height={300}
                draggable={false}
                className={`relative h-full w-full object-contain transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0`}
            />
        </motion.div>
    )
}

