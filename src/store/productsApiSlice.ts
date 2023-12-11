import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {toss} from '@/helpers/utils'

export interface Product {
    id: number
    title: number
    description: string
    price: number
    discountPercentage: number
    rating: number
    stock: number
    brand: string
    category: string
    thumbnail: string
    images: string[]
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
                    stock: toss() ? product.stock : 0
                }))
            })
        })
    })
})

export const {useFetchProductsQuery} = productsApiSlice