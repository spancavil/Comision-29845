import { configureStore } from '@reduxjs/toolkit'
import categoriesReducer from '../features/categories'
import productsReducer from '../features/products'
import cartReducer from '../features/cart'
import orderReducer from '../features/orders'

// console.log(cartReducer);

const store = configureStore({
    reducer: {
        categories: categoriesReducer,
        products: productsReducer,
        cart: cartReducer,
        orders: orderReducer,
    }
})

export default store;