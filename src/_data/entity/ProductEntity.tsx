


export interface ProductInterface {
    id: number | string
    image: string
    imageFile: File | null
    name: string
    desc: string
}


export const ProductEntity: ProductInterface = {
    id: '',
    image: '',
    imageFile: null,
    name: '',
    desc: '',
}