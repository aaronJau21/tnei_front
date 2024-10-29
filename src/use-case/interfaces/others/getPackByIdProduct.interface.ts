export interface IGetPackByIDProduct {
  pack: Pack[];
}

export interface Pack {
  id: number;
  name: string;
  monto: number;
  product_id: number;
}
