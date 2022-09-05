import {API} from "redux/services/index";
import {IRoom} from "types/responseType";


const roomAPI = API.injectEndpoints({
  endpoints: (builder) => ({
    fetchRoom: builder.query<IRoom, null>({
      query: () => ""
    })
  }),
  overrideExisting: false,
})

export const {
  useFetchRoomQuery
} = roomAPI