import BreadCrumb from '@/_components/breadcrumbs/BreadCrumb'
import GridPrimary from '@/_components/grids/GridPrimary'
import HeaderSecondary from '@/_components/headers/HeaderSecondary'
import ContactSection from '@/_components/sections/ContactSection'
import ServiceIconSection from '@/_components/sections/ServiceIconSection'
import ServiceSection from '@/_components/sections/ServiceSection'
import Spacer from '@/_components/spacers/Spacer'
import { AppData } from '@/_data/sample/AppData'
import { AppInfoData } from '@/_data/sample/AppinfoData'
import { ProductsData } from '@/_data/sample/ProductsData'
import { ServiceData } from '@/_data/sample/ServiceData'
import { serviceAllAction } from '@/app/admin/_data/actions/ServiceActions'
import { Metadata } from 'next'


const title = 'Our Services'

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
    { id: 2, name: title, href: '/service' },
]


export default async function page() {
    const [serviceData] = await Promise.all([
        serviceAllAction()
    ])

    return (
        <>
            <HeaderSecondary name={title} image={AppData.headers.images[2]} />
            <BreadCrumb data={CrumbsData} />

            <ServiceIconSection
                title="Our Services"
                subtitle="What we offer" />

            <GridPrimary
                title="Member Sub-Sectors & Product Portfolio"
                subtitle="What we offer"
                data={ProductsData}
            />


            <section className=''>
                <Spacer />
                <div className='container__primary'>
                    <ContactSection dbData={AppInfoData} />
                </div>
                <Spacer />
            </section>
        </>
    )
}
