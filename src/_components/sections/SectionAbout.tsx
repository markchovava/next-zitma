"use client"
import { motion } from 'motion/react'
import IconDefault from '../icons/IconDefault'
import TitleNormal from '../titles/TitleNormal'
import { ReactNode } from 'react'

import { AppInfoData } from '@/_data/sample/AppinfoData'

interface Props {
    title: string
    subtitle: string
    details: ReactNode
    href?: string
    withContact?: boolean
}

export default function SectionAbout({
    title,
    subtitle,
    details,
    withContact = false,
}: Props) {


    return (
        <>
            <section className="w-full relative text-neutral-900">

                <div className="container__primary relative px-6">

                    {/* Content Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className={`mb-12`}>
                        <TitleNormal
                            name={title}
                            title={subtitle}
                        />
                    </motion.div>


                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                        className={`flex flex-col justify-center space-y-6`}>
                        <div className="pb-4 text-neutral-700 text-lg leading-relaxed">
                            {details}
                        </div>
                        {withContact && <BottomContent />}
                    </motion.div>

                </div>
            </section>
        </>
    )
}


function BottomContent() {
    return (
        <div className='w-full grid-cols-2 grid gap-3 text__primary'>
            <div className='border-r border-gray-300'>
                <p className='text-sm'>
                    {AppInfoData.name}
                </p>
                <p className='text-xl font-bold'>
                    Talk to Experts
                </p>
            </div>
            <div className='flex justify-start gap-2'>
                <div className='flex items-center justify-center h-14 w-14 bg__primary text-white rounded-full overflow-hidden'>
                    <IconDefault
                        type='phone'
                        css='lg:text-xl text-lg'
                    />
                </div>
                <div>
                    <p className='md:text-sm text-xs'>need any help?</p>
                    <p className='text-xl font-bold'>{AppInfoData.phone}</p>
                </div>
            </div>
        </div>
    )
}