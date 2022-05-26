import { createSlice } from "@reduxjs/toolkit";
import { CATEGORIES } from "../../Data/categories";

const initialState = {
    value: {
        categories: CATEGORIES,
        categorySelected: "",
    }
}

export const categoriesSlice = createSlice({
    name: "categories",
    initialState: initialState,
    reducers: {

    }
})

// Action creators are generated for each case reducer function
// export const {} = counterSlice.actions

export default categoriesSlice.reducer