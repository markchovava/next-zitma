export interface PartnerInterface {
    id: string | number
    name: string
    image: string
    imageFile?: File | null
}
export const PartnerEntity: PartnerInterface = {
    id: '',
    name: '',
    image: '',
    imageFile: null
}