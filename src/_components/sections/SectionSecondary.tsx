"use client"

import { ReactNode } from "react"
import TitleNormal from "../titles/TitleNormal"
import Image from 'next/image'
import { motion } from "motion/react"
import Button from "../buttons/Button"
import Link from 'next/link'




interface Props {
    title: string
    subtitle: string
    details: ReactNode
    image: string
    withBtn?: boolean
    btnName?: string
    href?: string

}


export default function SectionSecondary({
    title,
    subtitle,
    details,
    image,
    href = "#",
    btnName = '',
    withBtn = false,
}: Props) {
    return (
        <>
            <section className="py-24">
                <div className='container__primary relative px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
                    <motion.div className="">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}>
                            <TitleNormal
                                name={title}
                                title={subtitle}
                            />
                        </motion.div>

                        <motion.div
                            className="py-4"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}>
                            {details}
                        </motion.div>

                        {withBtn &&
                            <motion.div
                                className="py-4"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}>
                                <Link href={href}>
                                    <Button
                                        name={btnName}
                                    />
                                </Link>
                            </motion.div>
                        }
                    </motion.div>

                    {/* Image Column */}
                    <div className={` relative w-full h-120`}>
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            whileHover={{ y: -6 }}
                            className="relative w-full h-full rounded-2xl overflow-hidden
                                shadow-xl shadow-neutral-900/10 ring-1 ring-black/5
                                transition-shadow duration-300 hover:shadow-2xl hover:shadow-neutral-900/20"
                        >
                            <Image
                                src={image}
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover"
                                alt={title}
                            />

                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    )
}
