import {Product} from '@/store/productsApiSlice'
import RatingOverview from '@/app/components/RatingOverview'

const ProductItem = (product: Product) => (
    <div className="bg-white w-1/3 md:w-1/4 xl:w-1/5 grow text-black cursor-pointer relative flex flex-col group">
        <div className="p-3">
            <img src={product.images[0]}
                 className="aspect-square object-cover object-left-top"
                 alt=""/>

            {!product.stock && (<p className="text-xs text-black/50 font-bold">Out of stock</p>)}
            <p className="text-xs text-black/50 font-bold">{product.brand}</p>
            <p className="font-bold text-sm">{product.title}</p>
            <p className="font-bold mt-3">&euro; {product.price}</p>
            <RatingOverview id={product.id} rating={product.rating}/>
        </div>

        <button type="button"
                className="border-t border-gray-500 w-full mt-auto py-3 bg-black group-hover:bg-white font-black text-xs">
            ADD TO BASKET
        </button>
    </div>)

export default ProductItem