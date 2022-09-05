import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {RootState} from 'redux/store';


const baseURL = process.env.NEXT_PUBLIC_API_URL

export const API = createApi({
    reducerPath: 'API',
    baseQuery: fetchBaseQuery({
        baseUrl: baseURL,
        prepareHeaders: (headers, {getState}) => {
            const token = (getState() as RootState).auth.token;
            if (token) {
                headers.set('authorization', 'Bearer ' + token)
            }
            return headers
        },
    }),
    endpoints: () => ({})
})

const credentialsAPI = API.injectEndpoints({
    endpoints: (builder) => ({

    }),
    overrideExisting: false,
})
export const {
} = credentialsAPI;
