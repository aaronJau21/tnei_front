import { api } from "../../../api/api";
import { IExampleRequest, IExample } from "../../interfaces";

export class ServicesDBServices {
  public static async findAll(): Promise<IExample> {
    const uri: string = "/examples/1";
    const { data } = await api.get<IExample>(uri);
    return data;
  }

  public static async update(request: IExampleRequest): Promise<IExample> {
    const uri: string = "/examples/1";

    const { data } = await api.patch<IExample>(uri, request);

    return data;
  }
}
