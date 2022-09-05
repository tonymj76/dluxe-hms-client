export interface IRoom {
  images: string[];
  title: string;
  description: string;
  features: string[];
  price: number;
  address: string;
  otherFeatures: string[];
  category: CategoryType;
}

export enum CategoryType {
  ROOM = 'rooms',
  APARTMENT= "apartment"
}