import {useEffect, useMemo} from "react";
import {useGetBookByRefQuery} from "redux/services/booking";
import {IBookingDetail} from "types/responseType";

export const useGetBookByRef = (ref: string) => {
  const { data, error, isLoading } = useGetBookByRefQuery(ref)

  return useMemo(() => {
    const query = data?.data;
    if(!query) return [];
    const {
      createdAt,
      status,
      checkInDate,
      checkOutDate,
      BookingReference,
      customer,
      rents } = query;

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

    return [bookingDetails, error, isLoading]

  }, [data, error, isLoading])
}
