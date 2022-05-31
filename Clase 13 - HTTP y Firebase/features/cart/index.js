import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DB_URL } from "../../Constants/firebase";
import { PRODUCTS } from "../../Data/products";
// import store from "../../Store";

const initialState = {
    value: {
        cart: [],
        response: {},
        loading: false,
        error: false,
    }
}

export const confirmPurchase = createAsyncThunk(
    'cart/confirm',
    async (items, asyncThunk) => {
        try {
            const res = await fetch(
                `${DB_URL}orders.json`,
                {
                    method: 'POST',
                    body: JSON.stringify({
                        date: new Date().toLocaleDateString(),
                        items: items,
                    })
                }
    
            )
            const data = res.json();
            return data;
        } catch (error) {
            return rejectWithValue('Opps there seems to be an error')
        }
    }
)

const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        addItem: (state, action) => {
            // console.log(state.value.products);
            const productoRepetido = state.value.cart.find(producto => producto.id === action.payload.id)
            console.log(productoRepetido);
            if (productoRepetido) {
                state.value.cart.map(item => {
                    if (item.id === action.payload.id) item.quantity++
                    return item
                })

            }
            else {
                const producto = PRODUCTS.find(producto => producto.id === action.payload.id);
                state.value.cart.push({ ...producto, quantity: 1 })
            }
        },
        removeItem: () => { },
    },
    extraReducers: {
        [confirmPurchase.pending]: (state) => {
            state.value.loading = true
        },
        [confirmPurchase.fulfilled]: (state, {payload}) => {
            state.value.response = payload
            state.value.loading = false
        },
        [confirmPurchase.rejected]: (state) => {
            state.value.loading = false
            state.value.error = true
        }
    }
})

export const { addItem, removeItem } = cartSlice.actions

export default cartSlice.reducer