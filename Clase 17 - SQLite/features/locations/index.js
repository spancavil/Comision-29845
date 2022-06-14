import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deleteAddress, fetchAddress, insertAddress } from "../../db";

const initialState = {
    value: {
        locations: [],
        rowId: '',
        loading: false,
        error: null,
        responseDb: '',
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
            console.log(result.insertId);
            return `Record succesfully row with id: ${result.insertId}`
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

export const removeLocationDb = createAsyncThunk(
    'location/addToDb',
    async (location, asyncThunk) => {
        try {
            const result = await deleteAddress(
                location.id,
            )
            console.log("Remove location db result:");
            console.log(result);
            return `Item with id: ${location.id} removed successfully`
        } catch (error) {
            console.log(error.message);
            return asyncThunk.rejectWithValue(`Error at remove item with id: ${location.id}`)
        }
    }
)

const locationSlice = createSlice({
    name: "locations",
    initialState,
    reducers: {
        addLocation: (state, {payload}) => {
            state.value.locations.push(payload)
        },
        removeLocation: (state, {payload}) => {
            state.value.locations = state.value.locations.filter(location => location.id !== payload.id)
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
        },
        [removeLocationDb.pending]: (state) => {
            state.value.loading = true
        },
        [removeLocationDb.fulfilled]: (state, {payload}) => {
            state.value.loading = false
            state.value.error = null
            state.value.responseDb = payload
        },
        [removeLocationDb.rejected]: (state, {payload}) => {
            state.value.loading = false
            state.value.error = payload
        }

    }
})

export const {addLocation, removeLocation} = locationSlice.actions
export default locationSlice.reducer;