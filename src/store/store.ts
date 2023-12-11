import {configureStore} from '@reduxjs/toolkit'
import {productsApiSlice} from '@/store/productsApiSlice'
import basketReducer from './basketSlice'

export const store = configureStore({
    reducer: {
        basket: basketReducer,
        [productsApiSlice.reducerPath]: productsApiSlice.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(productsApiSlice.middleware)
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>