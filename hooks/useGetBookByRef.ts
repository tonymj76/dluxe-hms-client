import {useEffect, useMemo, useState} from "react";
import {useGetBookByRefQuery} from "redux/services/booking";
import {IBookingDetail} from "types/responseType";

export const useGetBookByRef = (ref: string) => {
  const { data, error, isLoading } = useGetBookByRefQuery(ref)
  const [detail, setDetail ] = useState<IBookingDetail>()

  useEffect(() => {
    if(data) {
      const {
        createdAt,
        status,
        checkInDate,
        checkOutDate,
        BookingReference,
        customer,
        rents } = data;

      const bookingDetails: IBookingDetail = {
        createdAt,
        status,
        checkInDate,
        checkOutDate,
        BookingReference,
        name: `${customer?.firstName} ${customer?.lastName}`,
        email: customer?.contactInfos[0].email,
        phoneNumber: customer?.contactInfos[0].phoneNumber,
        rents
      }
      setDetail(bookingDetails)
    }

  }, [data, error, isLoading])

  return [detail, error, isLoading]
}
