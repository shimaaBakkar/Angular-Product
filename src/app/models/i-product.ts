export interface IProduct {
  id:number;
  name:string;
  price:number;
  count:number;
  image?:string;
  rate:number;
  description:string;
  createdAt:any;
  reviews:Array<string>;

}

