import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAddress, insertAddress } from "../../db";

const initialState = {
    value: {
        locations: [],
        rowId: '',
        loading: false,
        error: null,
    }
}

export const addLocationDb = createAsyncThunk(
    'location/addToDb',
    async (location, asyncThunk) => {
        try {
            const result = await insertAddress(
                location.title,
                location.id,
                location.picture,
                location.address,
            )
            console.log("Add location db result:");
            console.log(result);
            return "Record succesfully"
        } catch (error) {
            console.log(error.message);
            return asyncThunk.rejectWithValue("Error at writing address on db")
        }
    }
)

export const getLocations = createAsyncThunk(
    'location/getLocations',
    async(_, asyncThunk) => {
        try {
            const result = await fetchAddress()
            console.log("Resultado al traer los datos de la DB en el thunk");
            console.log(result);
            const data = result.rows._array
            return data
        } catch (error) {
            return asyncThunk.rejectWithValue("Error at fetching addresses on db")
        }
    }
)

const locationSlice = createSlice({
    name: "locations",
    initialState,
    reducers: {
        addLocation: (state, {payload}) => {
            state.value.locations.push(payload)
        }
    },
    extraReducers: {
        [addLocationDb.pending]: (state) => {
            state.value.loading = true
        },
        [addLocationDb.fulfilled]: (state, {payload}) => {
            console.log(payload);
            state.value.loading = false
            state.value.error = null
            // state.value.rowId = payload
        },
        [addLocationDb.rejected]: (state, {payload}) => {
            state.value.loading = false
            state.value.error = payload
        },
        [getLocations.pending]: (state) => {
            state.value.loading = true
        },
        [getLocations.fulfilled]: (state, {payload}) => {
            state.value.loading = false
            state.value.error = null
            state.value.locations = payload
        },
        [getLocations.rejected]: (state, {payload}) => {
            state.value.loading = false
            state.value.error = payload
        }

    }
})

export const {addLocation} = locationSlice.actions
export default locationSlice.reducer;