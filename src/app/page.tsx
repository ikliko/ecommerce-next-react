'use client'

import ProductList from '@/app/components/ProductList'

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-1 sm:p-12 lg:p-24">
            <ProductList/>
        </main>
    )
}
