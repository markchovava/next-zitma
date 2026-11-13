"use client"

import { useRef } from "react"
import Image from "next/image"
import {
    motion,
    useReducedMotion,
    useScroll,
    useTransform,
    type Variants,
} from "motion/react"
import HeaderResponsive from "./HeaderResponsive"
import Button from "../buttons/Button"
import { ImagesData } from "@/_data/sample/ImagesData"
import { AppInfoData } from "@/_data/sample/AppinfoData"
import NavContent from "../navs/NavContent"
import Link from "next/link"


const href = '/service'


const EASE: [number, number, number, number] = [0.25, 1, 0.5, 1]

/* Parent staggers its children, so no per-element delay maths is needed */
const container: Variants = {
    hidden: {},
    show: {
        transition: { delayChildren: 0.2, staggerChildren: 0.12 },
    },
}

const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: EASE },
    },
}

/* Nav drops in from above; hero items rise from below */
const navItem: Variants = {
    hidden: { opacity: 0, y: -16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
}



export default function Header() {
    const headerRef = useRef<HTMLElement>(null)
    const reduceMotion = useReducedMotion()
    const bannerImage = ImagesData.banner[0]

    /* Parallax that works on every device (CSS bg-fixed breaks on iOS) */
    const { scrollYProgress } = useScroll({
        target: headerRef,
        offset: ["start start", "end start"],
    })
    const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

    return (
        <>
            <header
                ref={headerRef}
                className={`relative isolate h-130 w-full overflow-hidden bg-gray-800 
                text-gray-100 lg:h-160`}>
                {/* IMAGE (optimised, preloaded, parallax) */}
                <motion.div
                    aria-hidden="true"
                    style={reduceMotion ? undefined : { y: parallaxY }}
                    className="absolute inset-x-0 top-[-15%] -z-30 h-[130%]">
                    <Image
                        src={bannerImage}
                        alt=""
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover object-center"
                    />
                </motion.div>

                {/* GRADIENT OVERLAYS (readability) */}
                <div
                    aria-hidden="true"
                    className="absolute inset-0 -z-20 bg-linear-to-br from-black/90 to-transparent"
                />
                {/*  <div
                    aria-hidden="true"
                    className="absolute inset-0 -z-10 bg-linear-to-t from-black/50 via-transparent to-transparent"
                /> */}

                {/* CONTENT: one parent drives the whole sequence */}
                <motion.div
                    variants={container}
                    initial={reduceMotion ? false : "hidden"}
                    animate="show"
                    className="container__primary flex h-full flex-col justify-start pt-3 pb-6 lg:pb-10">
                    <motion.div variants={navItem}>
                        <NavContent />
                    </motion.div>

                    {/* plain div: layout only, children still inherit the parent's variants */}
                    <div className="max-w-2xl h-full flex flex-col justify-center">
                        <motion.h1 variants={item} className="mb-4 text-white font-serif lg:text-5xl md:text-4xl text-3xl text-balance  lg:mb-6">
                            {AppInfoData.title}
                        </motion.h1>

                        <motion.p variants={item} className="mb-6 text-lg text-pretty text-white lg:mb-8 lg:text-xl">
                            {AppInfoData.intro}
                        </motion.p>

                        <motion.div variants={item}>
                            <Link href={href}>
                                <Button name="Our Services" />
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>



            </header>

            <HeaderResponsive />
        </>
    )
}

