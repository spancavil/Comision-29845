import { configureStore } from '@reduxjs/toolkit'
import categoriesReducer from '../features/categories'
import productsReducer from '../features/products';

const store = configureStore({
    reducer: {
        categories: categoriesReducer,
        products: productsReducer,
    }
})

export default store