"use client"
import { useNavStore } from '@/_store/useNavStore'
import Link from 'next/link'



export default function Nav() {
    const { dataList,
        selectedData,
        setSelectedData
    } = useNavStore()

    return (
        <ul className="flex items-center justify-end gap-4">
            {dataList.map((i, key) => (
                <NavItem key={key} name={i.name} href={i.href} id={i.id} />
            ))}
        </ul>
    )
}



interface nProps {
    name: string
    href?: string
    id: string | number
}

function NavItem({ name, href = '#', id }: nProps) {
    const { selectedData, setSelectedData } = useNavStore()
    return (
        <Link href={href}>
            <li onClick={() => setSelectedData({ id, name, href })} className={`border-b-2 
                hover:border-b-amber-300 hover:text-amber-300 transition__effect
                ${selectedData.id == id
                    ? 'border-b-amber-300 text-amber-300'
                    : 'border-b-transparent text-gray-100'}`}>
                {name}
            </li>
        </Link>
    )
}
