"use client"
import { MontserratBold, MontserratSemiBold } from '@/_assets/fonts/montserrat/_MontserratFont'
import { NoImageData } from '@/_data/sample/NoImage'
import Image from 'next/image'
import { motion } from 'motion/react'
import TitleNormal from '../titles/TitleNormal'

interface Props {
    title: string
    subtitle: string
    data: any[]
}

export default function GridPrimary({
    title,
    subtitle,
    data
}: Props) {
    return (
        <section className='py-24 bg-gray-50 overflow-hidden'>
            <div className="container__primary px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-12"
                >
                    <TitleNormal
                        name={title}
                        title={subtitle}
                    />
                </motion.div>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12'>
                    {data.map((i, key) => (
                        <Item
                            key={i.title ?? key}
                            index={key}
                            image={i.image}
                            title={i.name}
                            desc={i.desc}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

interface iProps {
    index: number
    image?: string
    title: string
    desc?: string
}

function Item({
    index,
    image = NoImageData,
    title,
    desc
}: iProps) {
    return (
        <motion.div
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
                    className={`${MontserratSemiBold.className} text-xl font-bold text-white`}>
                    {title}
                </motion.h3>
                {desc && (
                    <motion.p
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: (index % 3) * 0.16 }}
                        className='mt-1 text-sm text-white/80 line-clamp-2'
                    >
                        {desc}
                    </motion.p>
                )}
            </div>
        </motion.div>
    )
}