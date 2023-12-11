import {useAppSelector} from '@/app/hooks'
import {CloseOutline} from 'react-ionicons'
import ProductSmallCard from '@/app/components/ProductSmallCard'

const BasketList = ({onClose}: { onClose: () => void }) => {
    const products = useAppSelector(state => state.basket.products)

    return (<div
        className="fixed z-50 top-0 right-0 bottom-0 left-0 bg-black/40 flex justify-center items-center">
        <div className="bg-white rounded w-11/12 md:w-2/3 lg:w-1/2 xl:w-1/3 px-3 py-5 relative  text-black">
            <h2 className="font-bold">Your basket</h2>

            <button type="button"
                    onClick={onClose}
                    className="absolute right-3 top-5">
                <CloseOutline height="30px" width="30px"/>
            </button>

            {products.map(product => <ProductSmallCard key={`basket-${product.id}`} {...product}/>)}
        </div>
    </div>)
}

export default BasketList