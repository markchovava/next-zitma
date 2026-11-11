import { PartnersData } from "./PartnerData";

export const AppData = {
    name: "Zimbabwe Textile Manufacturers Association (ZITMA)",
    industry: "Textile Manufacturing",
    nature: "National Trade Association & Industry Representative Body",
    coverage: ">80% of total paid-up equity in Zimbabwe's textile industry",
    address: "6 Motherwell Road, Workington, Harare, Zimbabwe",
    email: "info@zitma.co.zw",
    phone: "+263 774 954 429 / +263 772 215 197",
    website: "https://www.zitma.co.zw",
    social: [
        { name: "facebook", url: "https://www.facebook.com/ZITMAZIMBABWE" },
        { name: "twitter", url: "https://twitter.com/ZITMA_Zimbabwe" },
        { name: "linkedin", url: "https://www.linkedin.com/company/zitma-zimbabwe" }
    ],
    about: {
        title: "About ZITMA",
        brief: <>
            ZITMA is the unified collective voice of Zimbabwe’s industrial textile. Operating as an independent,
            self-funded non-profit trade association, our primary focus is safeguarding domestic manufacturing
            investments, fostering regional competitiveness, and driving technological modernization.
        </>,
        whyUs: <>
            Founded to create a sustainable, competitive, and ethically driven manufacturing ecosystem, ZITMA bridges
            the gap between textile manufacturers, government bodies, and international trade networks.
        </>,
        intro: <>
            ZITMA is the recognized national
            apex representative body for the textile manufacturing sector in Zimbabwe. Operating across
            the full spectrum of industrial textiles, ZITMA represents enterprises involved in spinning,
            weaving, circular and warp knitting, dyeing, finishing, extruding, and industrial sack
            production. Financed by member subscriptions and trade initiatives, ZITMA plays a vital role
            in policy advocacy, trade protection, regional export facilitation for textile manufacturers
            in Zimbabwe.
        </>,
        details: <>
            <p className="mb-4">
                ZITMA is the unified collective voice of Zimbabwe’s industrial textile. Operating as
                an independent, self-funded non-profit trade association, our primary focus is safeguarding
                domestic manufacturing investments, fostering regional competitiveness, and driving technological
                modernization.
            </p>
            <p>
                Our membership represents over 80% of total paid-up equity across the national textile
                ecosystem. Our members range from traditional primary cotton processors to major industrial
                packaging and household textile giants—including manufacturers (woven polypropylene/polyethylene
                grain and industrial sacks) as well as primary blanket and home textile producers.
            </p>
        </>
    },
    service: {
        title: "Our Services",
        list: [
            {
                id: 1,
                name: "Industry Representation & Policy Lobbying",
                details: <>
                    Formulating unified industry submissions for the National Budget, trade policy
                    amendments, and regional tariff agreements. Representing member interests in ministerial
                    consultations regarding local content policy and industrial protection measures.
                </>
            },
            {
                id: 2,
                name: "Trade Facilitation & Regulatory Support",
                details: <>
                    Issuing official association support letters for duty rebates, import/export permits,
                    and regulatory exemptions. Assisting members with export readiness and participation in
                    international trade fairs through ZimTrade.
                </>
            },
            {
                id: 3,
                name: "Industrial Relations & Labor Standard Coordination",
                details: <>
                    Serving as the employer bargaining representative on the National Employment
                    Council (NEC) for the Textile Industry, negotiating fair wage structures, workplace safety
                    standards, and employment terms across all sub-sectors.
                </>
            },
            { name: "Technical Guidance & Market Intelligence", details: "Providing trade data, market insights, technological updates, and raw material trends across natural yarn, polymer resin, and woven packaging sectors. Facilitating technical skills training and capacity-building workshops in partnership with vocational and industrial training institutions." }
        ],

    },
    whatWeDo: {
        title: 'What We Do',
        intro: <>
            <ul className="text-2xl w-full">
                <li className="p-3 cursor-pointer w-full border-b border-gray-200 hover:bg-gray-100">
                    <b>Policy & Tariff Advocacy</b>
                </li>
                <li className="p-3 cursor-pointer w-full border-b border-gray-200 pb-2 hover:bg-gray-100">
                    <b>Local Market Protection</b>
                </li>
                <li className="cursor-pointer p-3 w-full border-b border-gray-200 pb-2 hover:bg-gray-100">
                    <b>Value-Chain Integration</b>
                </li>
                <li className="cursor-pointer p-3 w-full border-b border-gray-200 pb-2 hover:bg-gray-100">
                    <b>Export Expansion</b>
                </li>
            </ul>
        </>,
        list: [
            {
                id: 1,
                name: 'Policy & Tariff Advocacy',
                details: <>We lobby government entities on raw material customs tariffs,
                    energy tariffs, import duty rebates, and export incentives to keep
                    local manufacturers competitive.</>
            },
            {
                id: 2,
                name: 'Local Market Protection',
                details: <>We work with customs and law enforcement to combat illegal gray imports,
                    sub-standard fabrics, and uncustomed sacks/blankets that undermine local production.</>
            },
            {
                id: 3,
                name: 'Value-Chain Integration',
                details: <>We build strong upstream and downstream linkages connecting local polymer
                    suppliers, cotton ginners, weavers, and industrial end-users (agriculture, grain handling,
                    mining, retail).</>
            },
            {
                id: 4,
                name: 'Export Expansion',
                details: <>We partner with ZimTrade to secure access to regional SADC
                    and COMESA markets under preferential trade frameworks.</>
            },
        ],
    },
    partner: {
        title: `Our Valued Partners`,
        details: <>
            <p className="mb-2">
                Founded to create a sustainable, competitive, and ethically driven manufacturing ecosystem, ZITMA bridges the gap between
                textile manufacturers, government bodies, and international trade networks.
            </p>
            <p>We work closely with strategic economic partners, including:</p>
        </>,
        list: PartnersData
    }
}


