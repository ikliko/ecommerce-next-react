'use client'

import ProductList from '@/app/components/ProductList'
import BasketButton from '@/app/components/BasketButton'
import {useState} from 'react'
import BasketList from '@/app/components/BasketList'

export default function Home() {
    const [basketVisible, setBasketVisible] = useState(false)

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-1 sm:p-12 lg:p-24">
            {basketVisible && <BasketList onClose={() => setBasketVisible(false)}/>}
            <BasketButton onClick={() => setBasketVisible(true)}/>
            <ProductList/>
        </main>
    )
}
