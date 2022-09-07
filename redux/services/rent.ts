import {API} from "redux/services/index";


const rentAPI = API.injectEndpoints({
  endpoints: (builder) => ({
    getRentLink: builder.mutation({
      query: ({...payload}) => ({
        url: `/rent`,
        method: 'POST',
        body: payload
      })
    })
  }),
  overrideExisting: false,
})

export const {
  useGetRentLinkMutation
} = rentAPI

