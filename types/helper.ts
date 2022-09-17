import {format, isValid, parseISO} from "date-fns";
import {IOnChange} from "components/calenderRange";

export const formatDate = (item: IOnChange) => {
  if (!isValid(item?.startDate) && !isValid(item?.endDate)) return
  const start = format(item?.startDate, 'dd/MM/yyyy')
  const end = format(item?.endDate, 'dd/MM/yyyy')
  return `Checkin at ${start} and Checkout at ${end}`;
}

export const formatDateDayMonthYear = (item: string) => {
  if(!isValid(parseISO(item))) return '';
  return format(parseISO(item), "dd MMM yyyy")
}

export const formatAmount = (item: string | undefined) => {
  if(!item) return "N/A"
  return parseInt(item).toLocaleString()
}

export const formatToUpper = (item: string | undefined| null | string[] ) => {
  if(!item) return undefined;
  item = item as string
  return item.toUpperCase()
}