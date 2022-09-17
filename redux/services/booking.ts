import {API} from "redux/services/index";


const bookAPI = API.injectEndpoints({
  endpoints: (builder) => ({
    getBookByRef: builder.query({
      query: (ref) => ({
        url: `/booking/${ref}`,
      })
    })
  }),
  overrideExisting: false,
})

export const {
  useGetBookByRefQuery
} = bookAPI
