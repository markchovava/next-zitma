"use client"

import { ReactNode } from "react"
import { motion } from "motion/react"
import IconDefault from "../icons/IconDefault"
import TitleNormal from "../titles/TitleNormal"
import { ServicesData } from "@/_data/sample/ServicesData"

interface Props {
    title: string
    subtitle?: string
}

export default function ServiceIconSection({ title, subtitle }: Props) {
    return (
        <section className="w-full py-24 overflow-hidden">
            <div className="container__primary px-6">
                <motion.div
                    className="mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <TitleNormal
                        name={title}
                        title={subtitle} />
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
                    {ServicesData.map((i, key) => (
                        <Item
                            key={i.id ?? key}
                            index={key}
                            icon={i.icon}
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
    icon: string
    title: string
    desc: ReactNode
}

function Item({
    index,
    icon,
    title,
    desc
}: iProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: (index % 2) * 0.15 }}
        >
            <div className="w-20 h-20 mb-4 flex items-center justify-center rounded-full bg-gray-800">
                <IconDefault type={icon} css="text-white text-4xl" />
            </div>
            <div className="font-semibold mb-2">{title}</div>
            <div className="text-gray-600">{desc}</div>
        </motion.div>
    )
}