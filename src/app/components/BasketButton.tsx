import {CartOutline} from 'react-ionicons'
import {useAppSelector} from '@/app/hooks'

const BasketButton = ({onClick}: { onClick: () => void }) => {
    const productsCount = useAppSelector(state => state.basket.products.length)
    const productsTotal = useAppSelector(state => state.basket.products.reduce((a, p) => a + p.price, 0))

    return <div className="mb-5 flex justify-center items-center relative" onClick={onClick}>
        <CartOutline color="#fff" height="50px" width="50px"/>

        <span className=" rounded-full bg-indigo-500 px-2 py-1 text-xs absolute w-max left-full top-full -mt-5 -ml-4">
            &euro;{productsTotal} ({productsCount})
        </span>
    </div>
}

export default BasketButton