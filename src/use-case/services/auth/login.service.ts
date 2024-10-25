import { api } from "../../../api/api";
import { ILoginRequest, ILoginResponse } from "../../interfaces";

export class AuthService {
  static async login(loginRequest: ILoginRequest): Promise<ILoginResponse> {
    const url = "/user/auth/login";
    const { data } = await api.post<ILoginResponse>(url, loginRequest);
    return data;
  }
}
