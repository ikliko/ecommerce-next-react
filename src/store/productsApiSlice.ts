import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

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
            query: (limit = 10, skip = 0) => `/products?limit=${limit}&skip=${skip}`
        })
    })
})

export const {useFetchProductsQuery} = productsApiSlice