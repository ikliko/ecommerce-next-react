import {useFetchProductsQuery} from '@/store/productsApiSlice'
import ProductItem from '@/app/components/ProductItem'

const ProductList = () => {
    const {data = {products: []}} = useFetchProductsQuery()

    return (<div className="flex gap-3 flex-wrap">
        {data.products.map(product => (<ProductItem key={`product-${product.id}`} {...product}/>))}
    </div>)
}

export default ProductList