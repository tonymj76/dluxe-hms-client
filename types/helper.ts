import {format, isValid} from "date-fns";
import {IOnChange} from "components/calenderRange";

export const formatDate = (item: IOnChange) => {
  if (!isValid(item?.startDate) && !isValid(item?.endDate)) return
  const start = format(item?.startDate, 'dd/MM/yyyy')
  const end = format(item?.endDate, 'dd/MM/yyyy')
  return `Checkin at ${start} and Checkout at ${end}`;
}