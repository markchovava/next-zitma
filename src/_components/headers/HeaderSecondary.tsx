"use client"

import { motion, useReducedMotion, type Transition } from "motion/react"
import NavContent from "../navs/NavContent"
import HeaderResponsive from "./HeaderResponsive"

interface Props {
    name: string
    image: string
}

const smoothTransition = (delay: number): Transition => ({
    duration: 0.8,
    delay,
    ease: [0.25, 1, 0.5, 1] as const,
})

export default function HeaderSecondary({ name, image }: Props) {
    const reduceMotion = useReducedMotion()

    return (
        <>
            <header className="relative w-full h-64 sm:h-72 lg:h-80 overflow-hidden text-gray-50 bg-slate-900">
                <div
                    aria-hidden="true"
                    style={{ backgroundImage: image ? `url(${image})` : undefined }}
                    className="absolute inset-0 z-10 bg-center bg-cover lg:bg-fixed"
                />

                <div aria-hidden="true" className="absolute inset-0 z-20 bg-black/30" />
                <div
                    aria-hidden="true"
                    className="absolute inset-0 z-20 bg-linear-to-bl from-black/90 to-transparent"
                />

                <div className="absolute inset-0 z-30">
                    {/* h-full + flex-col so children can share the full height */}
                    <div className="container__primary flex h-full flex-col">
                        <motion.div
                            initial={reduceMotion ? false : { opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={smoothTransition(0.1)}
                            className="shrink-0">
                            <NavContent />
                        </motion.div>

                        {/* flex-1 = fill remaining space; min-h-0 prevents overflow */}
                        <div className="flex min-h-0 flex-1 items-center justify-center">
                            <motion.h1
                                initial={reduceMotion ? false : { opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={smoothTransition(0.2)}
                                className="font-serif text-center text-balance wrap-break-word leading-tight text-6xl sm:text-6xl lg:text-7xl">
                                {name}
                            </motion.h1>
                        </div>
                    </div>
                </div>
            </header>

            <HeaderResponsive />
        </>
    )
}