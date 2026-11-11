export interface NavInterface {
    id: number | string
    name: string
    href?: string
    isActive?: boolean
}


export const NavEntity: NavInterface = {
    id: '',
    name: '',
    href: '',
    isActive: false
}