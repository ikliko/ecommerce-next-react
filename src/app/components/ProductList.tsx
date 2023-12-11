import {useFetchProductsQuery} from '@/store/productsApiSlice'

const ProductList = () => {
    const {data = {products: []}} = useFetchProductsQuery()

    return (<div>
        {data.products.map(product => (<div key={`product-${product.id}`}>
            <img src={product.images[0]} alt=""/>

            <p>{product.brand}</p>
            <p>{product.title}</p>
            <p>{product.price}</p>
            <p>{product.rating}</p>
        </div>))}
    </div>)
}

export default ProductList