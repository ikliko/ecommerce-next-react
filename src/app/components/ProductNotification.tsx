import {CloseOutline} from 'react-ionicons'
import {Product} from '@/store/productsApiSlice'
import ProductSmallCard from '@/app/components/ProductSmallCard'

const ProductNotification = ({onClose, ...product}: { onClose: () => void }) => (
    <div
        className="bg-black/40 cursor-default z-50 fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center">
        <div className="bg-white rounded w-11/12 md:w-2/3 lg:w-1/2 xl:w-1/3 px-3 py-5 relative">
            <h2 className="font-bold">Successfully added to basket</h2>

            <button type="button"
                    onClick={onClose}
                    className="absolute right-3 top-5">
                <CloseOutline height="30px" width="30px"/>
            </button>

            <ProductSmallCard {...product as Product}/>
        </div>
    </div>
)

export default ProductNotification