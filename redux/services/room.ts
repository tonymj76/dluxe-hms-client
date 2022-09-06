import {API} from "redux/services/index";
import {IRoomRes} from "types/responseType";


const roomAPI = API.injectEndpoints({
  endpoints: (builder) => ({
    fetchRoom: builder.query<IRoomRes, null>({
      query: () => "/rooms"
    })
  }),
  overrideExisting: false,
})

export const {
  useFetchRoomQuery
} = roomAPI