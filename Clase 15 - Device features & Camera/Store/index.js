import { configureStore } from '@reduxjs/toolkit'
import categoriesReducer from '../features/categories'
import productsReducer from '../features/products'
import cartReducer from '../features/cart'
import orderReducer from '../features/orders'
import authReducer from '../features/auth'
import locationReducer from '../features/locations'

const store = configureStore({
    reducer: {
        categories: categoriesReducer,
        products: productsReducer,
        cart: cartReducer,
        orders: orderReducer,
        auth: authReducer,
        locations: locationReducer,
    }
})

export default store;