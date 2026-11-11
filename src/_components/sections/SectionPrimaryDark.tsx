"use client"
import Spacer from '../spacers/Spacer'
import { motion } from 'motion/react'
import TitleNormal from '../titles/TitleNormal'
import IconDefault from '../icons/IconDefault'
import Link from 'next/link'
import Button from '../buttons/Button'
import { NoImageData } from '@/_data/sample/NoImage'
import { ReactNode } from 'react'
import Image from 'next/image'
import { AppInfoData } from '@/_data/sample/AppinfoData'
import ButtonSecondary from '../buttons/ButtonSecondary'

interface Props {
    dir?: 'right' | 'left'
    title: string
    subtitle: string
    details: ReactNode
    href?: string
    btnName?: string
    image?: string
    withContact?: boolean
}

export default function SectionPrimaryDark({
    dir = 'right',
    title,
    subtitle,
    details,
    href = '#',
    btnName = '',
    withContact = false,
    image = NoImageData,
}: Props) {
    const col1 = dir === 'right' ? 'lg:order-2' : 'lg:order-1'
    const col2 = dir === 'right' ? 'lg:order-1' : 'lg:order-2'

    return (
        <>
            <section className="relative bg__primary text-neutral-100 overflow-hidden">

                {/* Ambient grain texture */}
                <div
                    className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-overlay"
                    style={{
                        backgroundImage:
                            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                    }}
                />
                {/* Soft dot grid */}
                <div
                    className="pointer-events-none absolute inset-0 opacity-[0.5]"
                    style={{
                        backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
                        backgroundSize: "22px 22px",
                    }}
                />

                <Spacer />
                <div className="container__primary relative mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Image Column */}
                    <div className={`${col1} relative w-full h-125`}>
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            whileHover={{ y: -6 }}
                            className="relative w-full h-full rounded-2xl overflow-hidden
                                shadow-xl shadow-black/30 ring-1 ring-white/10
                                transition-shadow duration-300 hover:shadow-2xl hover:shadow-black/50"
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

                    {/* Content Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className={`${col2} flex flex-col justify-center space-y-6`}
                    >
                        <TitleNormal theme='dark' name={title} title={subtitle} />

                        <p className="text-neutral-300 pb-4 text-lg leading-relaxed max-w-md">
                            {details}
                        </p>

                        {withContact && <BottomContent />}

                        {btnName &&
                            <div>
                                <Link href={href}>
                                    <ButtonSecondary
                                        name={btnName}
                                    />
                                </Link>
                            </div>
                        }
                    </motion.div>

                </div>
                <Spacer />
            </section>
        </>
    )
}


function BottomContent() {
    return (
        <div className='w-full grid-cols-2 grid gap-3 text-neutral-200'>
            <div className='border-r border-neutral-300'>
                <p className='text-sm'>{AppInfoData.name}</p>
                <p className='text-xl font-bold'>Talk to Experts</p>
            </div>
            <div className='flex justify-start gap-2'>
                <div className='flex items-center justify-center h-14 w-14 bg-slate-900 text-white rounded-full overflow-hidden'>
                    <IconDefault type='phone' css='text-xl' />
                </div>
                <div>
                    <p className='text-sm'>need any help?</p>
                    <p className='text-xl font-bold'>{AppInfoData.phone}</p>
                </div>
            </div>
        </div>
    )
}