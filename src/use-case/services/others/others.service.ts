import { api } from "../../../api/api";
import {
  IGetAllProducts,
  IGetClAccounts,
  IGetPackByIDProduct,
} from "../../interfaces";

export class OthersService {
  public static async getAllProducts(): Promise<IGetAllProducts> {
    const uri: string = "/others/products";

    const { data } = await api.get(uri);
    return data;
  }

  public static async getPackByIdProduct(
    id: number | string
  ): Promise<IGetPackByIDProduct> {
    const uri = `/others/packs/${id}`;
    const { data } = await api.get(uri);

    return data;
  }

  public static async getClAccounts(): Promise<IGetClAccounts> {
    const uri = "/others/cl_account";
    const { data } = await api.get(uri);

    return data;
  }
}
