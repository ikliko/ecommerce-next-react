import {Product} from '@/store/productsApiSlice'

const ProductItem = (product: Product) => (
    <div className="bg-white w-1/3 md:w-1/4 xl:w-1/5 grow text-black cursor-pointer relative flex flex-col group">
        <div className="p-3">
            <img src={product.images[0]}
                 className="aspect-square object-cover object-left-top"
                 alt=""/>

            <p className="text-sm text-black/50 font-bold">{product.brand}</p>
            <p className="font-bold">{product.title}</p>
            <p>&euro; {product.price}</p>
            <p className="text-sm">{product.rating}</p>
        </div>

        <button type="button"
                className="border-t border-gray-500 w-full mt-auto py-3 bg-black group-hover:bg-white font-black text-xs">
            ADD TO BASKET
        </button>
    </div>)

export default ProductItem