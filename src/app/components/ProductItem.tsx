import {Product} from '@/store/productsApiSlice'

const ProductItem = (product: Product) => (<div>
    <img src={product.images[0]} alt=""/>

    <p>{product.brand}</p>
    <p>{product.title}</p>
    <p>{product.price}</p>
    <p>{product.rating}</p>
</div>)

export default ProductItem