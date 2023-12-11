import {Product} from '@/store/productsApiSlice'
import RatingOverview from '@/app/components/RatingOverview'
import {HeartOutline, ShareSocialOutline} from 'react-ionicons'
import ProductNotification from '@/app/components/ProductNotification'
import {useState} from 'react'
import {useAppDispatch} from '@/app/hooks'
import {addProduct} from '@/store/basketSlice'

const ProductItem = (product: Product) => {
    const [showNotification, setShowNotification] = useState(false)
    const dispatch = useAppDispatch()

    return (
        <div className="bg-white w-1/3 md:w-1/4 xl:w-1/5 grow text-black relative flex flex-col group">
            {showNotification && <ProductNotification onClose={() => setShowNotification(false)} {...product}/>}

            <div className="p-3">
                <div className="relative">
                    <img src={product.images[0]}
                         className="aspect-square object-cover object-left-top"
                         alt=""/>

                    {!product.stock && (<div
                        className="absolute top-0 right-0 left-0 bottom-0 hidden group-hover:block w-max h-max m-auto text-white bg-black px-2 py-1">
                        Out of stock
                    </div>)}

                    {(product.isNew && product.stock) ? (
                        <span
                            className={`absolute bottom-3 left-3 text-sm font-bold${product.discountPercentage ? ' text-red-500' : ' text-black'}`}>{!product.discountPercentage ? 'HOB' : `-${product.discountPercentage}%`}</span>
                    ) : ''}

                    <button type="button"
                            className="absolute right-3 bottom-14 bg-white aspect-square w-8 hidden justify-center items-center rounded-full shadow shadow-black/50 group-hover:flex">
                        <ShareSocialOutline/>
                    </button>

                    <button type="button"
                            className="absolute right-3 bottom-3 bg-white aspect-square w-8 hidden justify-center items-center rounded-full shadow shadow-black/50 group-hover:flex">
                        <HeartOutline/>
                    </button>
                </div>
                <p className="text-xs text-black/50 font-bold">{product.brand}</p>
                <p className="font-bold text-sm">{product.title}</p>
                <p className="font-bold mt-3">&euro; {product.price}</p>
                <RatingOverview id={product.id} rating={product.rating} ratedCount={product.ratedCount}/>
            </div>

            <button type="button"
                    onClick={() => {
                        if(!product.stock) {
                            return
                        }

                        setShowNotification(true)
                        dispatch(addProduct(product))
                    }}
                    className={`border-t border-gray-500 w-full mt-auto py-3 bg-black group-hover:bg-white font-black text-xs${!product.stock ? ' cursor-not-allowed text-black/50' : ' cursor-pointer'}`}>
                ADD TO BASKET
            </button>
        </div>
    )
}

export default ProductItem