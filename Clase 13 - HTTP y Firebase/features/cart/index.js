import { createSlice } from "@reduxjs/toolkit";
import store from "../../Store";

const initialState = {
    value: {
        cart: [],
    }
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action)=> {
            const productoRepetido = state.value.cart.find(producto => producto.id === action.payload.id)
            if (productoRepetido) {
                // state.value.cart.map(item => {
                //     if (item.id === action.payload.id) item.quantity++
                //     return item
                // })
            }
            else {
                const producto = store.getState().products.value.products.find(producto => producto.id === action.payload.id);
                state.value.cart.push({...producto, quantity: 1})
            }
        },
        removeItem: () => {},
        confirmPurchase: () => {},
    }
})

export const {addItem, removeItem, confirmPurchase} = cartSlice.actions

export default cartSlice.reducer