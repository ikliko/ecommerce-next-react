import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {rnd, toss} from '@/helpers/utils'

export interface Product {
    id: number
    title: number
    description: string
    price: number
    discountPercentage: number
    rating: number
    ratedCount: number
    stock: number
    brand: string
    category: string
    thumbnail: string
    images: string[]
    isNew: boolean
}

export const productsApiSlice = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://dummyjson.com'
    }),
    endpoints: (builder) => ({
        fetchProducts: builder.query<{ products: Product[] }, number | void>({
            query: (limit = 12, skip = 0) => `/products?limit=${limit}&skip=${skip}`,
            transformResponse: (response: { products: Product[] }) => ({
                ...response,
                products: response.products.map(product => ({
                    ...product,
                    stock: toss() ? product.stock : 0,
                    ratedCount: rnd(20, 89),
                    isNew: toss(),
                    discountPercentage: toss() ? product.discountPercentage : 0
                })).sort((a: Product, b: Product) => {
                    if(!a.stock) return 1
                    if(!b.stock) return -1

                    return 0
                })
            })
        })
    })
})

export const {useFetchProductsQuery} = productsApiSlice