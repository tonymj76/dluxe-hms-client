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