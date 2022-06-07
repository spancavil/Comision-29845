import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: {
        locations: []
    }
}

const locationSlice = createSlice({
    name: "locations",
    initialState,
    reducers: {
        addLocation: (state, {payload}) => {
            state.value.locations.push(payload)
        }
    },
    extraReducers: {

    }
})

export const {addLocation} = locationSlice.actions
export default locationSlice.reducer;