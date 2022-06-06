import { createSlice } from "@reduxjs/toolkit";

initialState = {
    value: {
        locations: [],
        location: {
            image: "",
            address: "",
            id: 0,
            title: ""
        },
    }
}

const locationSlice = createSlice({
    name: "locations",
    initialState,
    reducers: {
        addLocation: ()=> {
            
        }
    }
})