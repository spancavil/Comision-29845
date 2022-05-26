import { createSlice } from "@reduxjs/toolkit";
import { PRODUCTS } from "../../Data/products";

const initialState = {
    value: {
        products: PRODUCTS,
        productsByCategory: [],
        productSelected: {},
    }
}

export const productsSlice = createSlice({
    name: "products",
    initialState: initialState,
    reducers: {

    }
})

// Action creators are generated for each case reducer function
// export const {} = counterSlice.actions

export default productsSlice.reducer