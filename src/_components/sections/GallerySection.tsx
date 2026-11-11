"use client"

import { GalleryInterface } from "@/_data/entity/GalleryEntity"
import { useGalleryStore } from "@/_store/useGalleryStore"
import { useCallback, useEffect, useState } from "react"
import TitleNormal from "../titles/TitleNormal"
import { AnimatePresence, motion } from "motion/react"
import { MontserratSemiBold } from "@/_assets/fonts/montserrat/_MontserratFont"
import Image from "next/image"
import { NoImageData } from "@/_data/sample/NoImage"


interface Props {
    list?: GalleryInterface[]
    title?: string
    subtitle?: string
}

export default function GallerySection({
    list = [],
    title,
    subtitle
}: Props) {
    const { datalist, setDatalist } = useGalleryStore()
    const [activeIndex, setActiveIndex] = useState<number | null>(null)
    const [direction, setDirection] = useState<1 | -1>(1)

    useEffect(() => {
        if (list.length > 0) {
            setDatalist(list)
        }
    }, [list, setDatalist])

    const total = datalist.length

    const close = useCallback(() => setActiveIndex(null), [])

    const next = useCallback(() => {
        if (total === 0) return
        setDirection(1)
        setActiveIndex((prev) => (prev === null ? prev : (prev + 1) % total))
    }, [total])

    const prev = useCallback(() => {
        if (total === 0) return
        setDirection(-1)
        setActiveIndex((prev) => (prev === null ? prev : (prev - 1 + total) % total))
    }, [total])

    // Keyboard controls + body scroll lock while the lightbox is open
    useEffect(() => {
        if (activeIndex === null) return

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") close()
            else if (e.key === "ArrowRight") next()
            else if (e.key === "ArrowLeft") prev()
        }

        const originalOverflow = document.body.style.overflow
        document.body.style.overflow = "hidden"
        window.addEventListener("keydown", onKeyDown)

        return () => {
            document.body.style.overflow = originalOverflow
            window.removeEventListener("keydown", onKeyDown)
        }
    }, [activeIndex, close, next, prev])

    const activeItem = activeIndex !== null ? datalist[activeIndex] : null


    return (
        <>
            <section className="w-full py-24">
                <div className='container__primary'>
                    <motion.div
                        className="mb-12"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}>
                        <TitleNormal name={title} title={subtitle} />
                    </motion.div>

                    <div className="w-full grid grid-cols-3 gap-8">
                        {datalist.length > 0 && datalist.map((i, key) => (
                            <Item
                                index={key}
                                key={key}
                                image={i.image} title={i.eventName}
                                onOpen={() => {
                                    setDirection(1)
                                    setActiveIndex(key)
                                }}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <AnimatePresence>
                {activeItem && activeIndex !== null && (
                    <Lightbox
                        key="lightbox"
                        image={activeItem.image || NoImageData}
                        title={activeItem.eventName}
                        index={activeIndex}
                        total={total}
                        direction={direction}
                        onClose={close}
                        onNext={next}
                        onPrev={prev}
                    />
                )}
            </AnimatePresence>
        </>
    )
}





interface LightboxProps {
    image: string
    title: string
    index: number
    total: number
    direction: 1 | -1
    onClose: () => void
    onNext: () => void
    onPrev: () => void
}

function Lightbox({
    image,
    title,
    index,
    total,
    direction,
    onClose,
    onNext,
    onPrev,
}: LightboxProps) {
    const navButton =
        "absolute top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full " +
        "bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"

    return (
        <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`${title} – image ${index + 1} of ${total}`}
            className="fixed inset-0 z-100 flex items-center justify-center bg-black/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
        >
            {/* Close */}
            <button
                type="button"
                aria-label="Close"
                onClick={(e) => { e.stopPropagation(); onClose() }}
                className="absolute right-5 top-5 z-30 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M18 6 6 18M6 6l12 12" />
                </svg>
            </button>

            {/* Counter */}
            <div className={`${MontserratSemiBold.className} absolute left-5 top-6 z-30 text-sm text-white/80`}>
                {index + 1} / {total}
            </div>

            {/* Previous */}
            {total > 1 && (
                <button
                    type="button"
                    aria-label="Previous image"
                    onClick={(e) => { e.stopPropagation(); onPrev() }}
                    className={`${navButton} left-4 md:left-8`}
                >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m15 18-6-6 6-6" />
                    </svg>
                </button>
            )}

            {/* Image */}
            <div
                className="relative h-[80vh] w-[90vw] max-w-6xl"
                onClick={(e) => e.stopPropagation()}
            >
                <AnimatePresence mode="wait" custom={direction} initial={false}>
                    <motion.div
                        key={index}
                        custom={direction}
                        className="absolute inset-0"
                        variants={{
                            enter: (d: number) => ({ opacity: 0, x: d * 60 }),
                            center: { opacity: 1, x: 0 },
                            exit: (d: number) => ({ opacity: 0, x: d * -60 }),
                        }}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={0.4}
                        onDragEnd={(_, info) => {
                            if (info.offset.x < -80) onNext()
                            else if (info.offset.x > 80) onPrev()
                        }}
                    >
                        <Image
                            src={image}
                            alt={title}
                            fill
                            sizes="90vw"
                            priority
                            draggable={false}
                            className="select-none object-contain"
                        />
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Next */}
            {total > 1 && (
                <button
                    type="button"
                    aria-label="Next image"
                    onClick={(e) => { e.stopPropagation(); onNext() }}
                    className={`${navButton} right-4 md:right-8`}
                >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m9 18 6-6-6-6" />
                    </svg>
                </button>
            )}

            {/* Caption */}
            <div className="pointer-events-none absolute bottom-6 left-0 z-30 w-full px-6 text-center">
                <h3 className={`${MontserratSemiBold.className} text-lg text-white`}>{title}</h3>
            </div>
        </motion.div>
    )
}





interface iProps {
    index: number
    image?: string
    title: string
    onOpen: () => void
}

function Item({
    index,
    image = NoImageData,
    title,
    onOpen,
}: iProps) {
    return (
        <motion.div
            role="button"
            tabIndex={0}
            aria-label={`Open ${title} in full size`}
            onClick={onOpen}
            onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault()
                    onOpen()
                }
            }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: (index % 3) * 0.12 }}
            whileHover={{ y: -6 }}
            className="group cursor-pointer relative h-100 w-full overflow-hidden rounded-2xl bg-gray-200
                shadow-xl shadow-neutral-900/10 ring-1 ring-black/5
                transition-shadow duration-300 hover:shadow-2xl hover:shadow-neutral-900/20"
        >
            <Image
                src={image}
                alt={title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />

            {/* Gradient overlay */}
            <div className="pointer-events-none absolute bottom-0 left-0 z-10 h-1/2 w-full bg-linear-to-t from-black/80 to-transparent" />

            {/* Content overlay */}
            <div className='absolute bottom-0 left-0 z-20 w-full p-5'>
                <motion.h3
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: (index % 3) * 0.14 }}
                    className={`${MontserratSemiBold.className} text-lg text-white`}>
                    {title}
                </motion.h3>

            </div>
        </motion.div>
    )
}