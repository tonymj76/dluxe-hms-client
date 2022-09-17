export interface IRoom {
  id: string;
  images: string[];
  title: string;
  description: string;
  features: string[];
  price: number;
  address: string;
  otherFeatures: string[];
  category: CategoryType;
}
export interface IRoomRes {
  message: string;
  data: IRoom[]
}

export enum CategoryType {
  ROOM = 'rooms',
  APARTMENT= "apartment"
}

export interface IFormInput {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  ride: boolean;
}

export interface IBookingDetail {
  createdAt: string;
  status: string;
  checkInDate: string;
  checkOutDate: string;
  BookingReference: string;
  name: string;
  email: string;
  phoneNumber: string;
  rents: any;
}