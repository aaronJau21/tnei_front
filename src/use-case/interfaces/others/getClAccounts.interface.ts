export interface IGetClAccounts {
  cl_accounts: ClAccount[];
}

export interface ClAccount {
  id: number;
  name: string;
}
