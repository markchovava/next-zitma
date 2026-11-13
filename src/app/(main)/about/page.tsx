import BreadCrumb from '@/_components/breadcrumbs/BreadCrumb'
import HeaderSecondary from '@/_components/headers/HeaderSecondary'
import ClientSection from '@/_components/sections/ClientSection'
import ContactSection from '@/_components/sections/ContactSection'
import ManagementSection from '@/_components/sections/ManagementSection'
import PartnerSection from '@/_components/sections/PartnerSection'
import SectionAbout from '@/_components/sections/SectionAbout'
import SectionPrimary from '@/_components/sections/SectionPrimary'
import SectionPrimaryDark from '@/_components/sections/SectionPrimaryDark'
import ValuesSection from '@/_components/sections/ValuesSection'
import Spacer from '@/_components/spacers/Spacer'
import { AppData } from '@/_data/sample/AppData'
import { AppInfoData } from '@/_data/sample/AppinfoData'
import { ManagementData } from '@/_data/sample/ManagementData'
import { PartnersData } from '@/_data/sample/PartnerData'
import { Metadata } from 'next'


const title = 'About Us'

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
    { id: 2, name: title, href: '/about' },
]

export default async function page() {
    /*  const [appData] = await Promise.all([
         appInfoViewAction()
     ]) */

    return (
        <>
            <HeaderSecondary name={title} image={AppData.headers.images[0]} />
            <BreadCrumb data={CrumbsData} />

            <div id='intro'>
                <Spacer />
                <SectionAbout
                    title={`Introduction`}
                    subtitle="About Us"
                    details={AppData.about.details} />

            </div>


            <div id='about'>
                <SectionPrimary
                    dir='left'
                    image={AppData.about.images[4]}
                    title={`Who We Are?`}
                    subtitle="About Us"
                    details={AppData.about.intro}
                />
            </div>

            <div className='background'>
                <SectionPrimaryDark
                    dir='right'
                    image={AppData.about.images[1]}
                    title={`Our Background`}
                    subtitle="About Us"
                    details={AppData.about.whyUs}
                />
            </div>


            <div className="bg-gray-50">
                <PartnerSection
                    list={PartnersData}
                    title="Our Partners"
                    details={AppData.partner.details}
                    subtitle="Trusted institutions" />
            </div>


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
