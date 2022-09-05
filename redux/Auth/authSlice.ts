import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import type {RootState} from 'redux/store';
import { HYDRATE} from 'next-redux-wrapper';

type AuthState = {
    token: string | null
}

const slice = createSlice({
    name: 'auth',
    initialState: {user: null, token: null} as AuthState,
    reducers: {
        setCredentials: (state, {payload: { token} }: PayloadAction<{token: string}>) => {
            state.token = token
        },
    },

    extraReducers: {
        [HYDRATE]: (state, action) => {
            console.log('HYDRATE', action.payload);
            return {
                ...state,
                ...action.payload.subject,
            };
        },
    },
})

export const { setCredentials } = slice.actions;
export const selectUserToken = (state: RootState) => state.auth.token;

export default slice.reducer
