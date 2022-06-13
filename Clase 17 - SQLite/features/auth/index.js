import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AUTH_LOGIN, AUTH_SIGNUP } from "../../Constants/firebase";

const initialState = {
    value: {
        user: {
            userId: "",
            email: "",
            token: ""
        },
        loading: false,
        error: "",
    }
}

export const signUp = createAsyncThunk(
    'auth/signUp',
    async (emailAndPassword, asyncThunk) => {
        // console.log(_);
        // console.log(asyncThunk.getState());
        try {
           const res = await fetch (`${AUTH_SIGNUP}`, {
               method: 'POST',
               body: JSON.stringify({
                   email: emailAndPassword.email,
                   password: emailAndPassword.password,
                   returnSecureToken: true,
               })
           });
           const data = await res.json()
           console.log(data);
           return data
        } catch (error) {
            return rejectWithValue('Opps there seems to be an error')
        }
    }
)

export const login = createAsyncThunk(
    'auth/login',
    async (emailAndPassword, asyncThunk) => {
        console.log(emailAndPassword);
        // console.log(asyncThunk.getState());
        try {
           const res = await fetch (`${AUTH_LOGIN}`, {
               method: 'POST',
               body: JSON.stringify({
                   email: emailAndPassword.email,
                   password: emailAndPassword.password,
                   returnSecureToken: true,
               })
           });
           const data = await res.json()
           console.log(data);
           return data
        } catch (error) {
            return rejectWithValue('Opps there seems to be an error')
        }
    }
)

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state, _) => {
            state.value = initialState.value
        }
    },
    extraReducers: {
        [signUp.pending]: (state) => {
            state.value.loading = true
        },
        [signUp.fulfilled]: (state, {payload}) => {
            console.log(payload)
            if (payload.error) {
                state.value.error = payload.error.message
            }
            state.value.loading = false
            
            state.value.user.userId = payload.localId
            state.value.user.email = payload.email
            state.value.user.token = payload.idToken
        },
        [signUp.rejected]: (state) => {
            state.value.loading = false
            state.value.error = "Error en signup"
        },
        [login.pending]: (state) => {
            state.value.loading = true
        },
        [login.fulfilled]: (state, {payload}) => {
            state.value.loading = false
            if (payload.error) {
                state.value.error = payload.error.message
            }
            
            state.value.user.userId = payload.localId
            state.value.user.email = payload.email
            state.value.user.token = payload.idToken
        },
        [login.rejected]: (state) => {
            state.value.loading = false
            state.value.error = "Error at signup"
        }
    }
})

export const {logout} = authSlice.actions;
export default authSlice.reducer;