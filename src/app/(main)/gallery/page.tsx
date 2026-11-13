import BreadCrumb from '@/_components/breadcrumbs/BreadCrumb'
import HeaderSecondary from '@/_components/headers/HeaderSecondary'
import ContactSection from '@/_components/sections/ContactSection'
import GallerySection from '@/_components/sections/GallerySection'
import Spacer from '@/_components/spacers/Spacer'
import { AppData } from '@/_data/sample/AppData'
import { AppInfoData } from '@/_data/sample/AppinfoData'
import { GalleryData } from '@/_data/sample/GalleryData'
import { Metadata } from 'next'


const title = 'Our Gallery'

export const metadata: Metadata = {
    title: title + ' | ' + AppInfoData.name,
    description: title + ' | ' + AppInfoData.name,
    keywords: [],
    openGraph: {
        images: ['/assets/images/logos/logo.png'],
        title: title + ' | ' + AppInfoData.name,
        description: title + ' | ' + AppInfoData.name,
    },
};

const CrumbsData = [
    { id: 1, name: 'Home', href: '/' },
    { id: 2, name: title, href: '/gallery' },
]


export default async function page() {
    /* const [galleryData] = await Promise.all([
        galleryListAction()
    ]) */




    return (
        <>
            <HeaderSecondary name={title} image={AppData.headers.images[1]} />
            <BreadCrumb data={CrumbsData} />

            <GallerySection
                list={GalleryData}
                title="Our Latest Events"
                subtitle={title} />


            <section className='bg-gray-50'>
                <Spacer />
                <div className='container__primary'>
                    <ContactSection dbData={AppInfoData} />
                </div>
                <Spacer />
            </section>
        </>
    )
}
