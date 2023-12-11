import {Product} from '@/store/productsApiSlice'

const ProductSmallCard = (product: Product) => <div className="mt-3 flex items-center">
    <img src={product.images[0]}
         className="h-20 aspect-square object-cover mr-3 rounded"
         alt=""/>

    <div>
        <strong>{product.title}</strong>

        <p className="font-black mt-3">&euro;{product.price}</p>
    </div>
</div>

export default ProductSmallCard