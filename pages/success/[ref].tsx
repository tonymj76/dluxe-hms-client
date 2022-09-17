
import {useRouter} from "next/router";
import {useGetBookByRef} from "hooks/useGetBookByRef";
import BookingDetails from "modulePage/bookingDetails";
import {IBookingDetail} from "types/responseType";

export default function BookingSuccess() {
  const router = useRouter();
  const { ref }  =  router.query;
  const [detail] = useGetBookByRef(ref as string)
  return (
    <BookingDetails data={detail as IBookingDetail}/>
  )
}
