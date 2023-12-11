import {Product} from './productsApiSlice'
import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface BasketState {
    products: Product[]
}

const initialState: BasketState = {
    products: []
}

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addProduct(state, action: PayloadAction<Product>) {
            state.products.push(action.payload)
        }
    }
})

export const {addProduct} = basketSlice.actions
export default basketSlice.reducer