import ContactSection from "@/_components/sections/ContactSection";
import Spacer from "@/_components/spacers/Spacer";
import type { Metadata } from "next";
import { AppInfoData } from "@/_data/sample/AppinfoData";
import SectionPrimaryDark from "@/_components/sections/SectionPrimaryDark";
import SectionPrimary from "@/_components/sections/SectionPrimary";
import BannerMain from "@/_components/banners/BannerMain";
import ExperienceSection from "@/_components/sections/ExperienceSection";
import ServiceSection from "@/_components/sections/ServiceSection";
import { ServiceData } from "@/_data/sample/ServiceData";
import ClientSection from "@/_components/sections/ClientSection";
import { serviceAllAction } from "../admin/_data/actions/ServiceActions";
import Header from "@/_components/headers/Header";
import SectionSecondary from "@/_components/sections/SectionSecondary";
import GridPrimary from "@/_components/grids/GridPrimary";
import { ProductsData } from "@/_data/sample/ProductsData";
import ServiceIconSection from "@/_components/sections/ServiceIconSection";
import { AppData } from "@/_data/sample/AppData";
import PartnerSection from "@/_components/sections/PartnerSection";
import { PartnersData } from "@/_data/sample/PartnerData";



const title = 'Home';

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


export default async function Page() {
  const [serviceData] = await Promise.all([
    serviceAllAction()
  ])

  // console.log('serviceData.data', serviceData?.data)

  return (
    <>
      <Header />

      <Spacer />

      <SectionPrimary
        dir='left'
        image={AppInfoData.images[0]}
        title={`Who We Are?`}
        subtitle="About Us"
        details={AppData.about.brief}
        href="/about"
        withContact={false}
        btnName="About Us"
      />

      <SectionPrimaryDark
        dir='right'
        image={AppInfoData.images[3]}
        title={`Our Background`}
        subtitle="About Us"
        btnName="Our Background"
        href="/about#whyUs"
        details={AppData.about.whyUs}
      />

      <SectionSecondary
        image={AppInfoData.images[0]}
        title={`What we do?`}
        subtitle="Our Services"
        details={AppData.whatWeDo.intro}
        withBtn={true}
        btnName="Our Services"
        href="#"
      />

      <ServiceIconSection
        title="Our Services"
        subtitle="What we offer" />

      <GridPrimary
        title="Member Sub-Sectors & Product Portfolio"
        subtitle="What we offer"
        data={ProductsData}
      />




      {/* <ExperienceSection /> */}

      {/*   <ServiceSection
        list={serviceData.data ?? ServiceData}
        title="What we do?"
        subtitle='Our Services' /> */}

      <div className="bg-gray-50">
        <PartnerSection
          list={PartnersData}
          title="Our Partners"
          details={AppData.partner.details}
          subtitle="Trusted institutions" />
      </div>


      <section className="bg-gray-100">
        <Spacer />
        <div className="container__primary">
          <ContactSection dbData={AppInfoData} />
        </div>
        <Spacer />
      </section>



    </>
  );
}
