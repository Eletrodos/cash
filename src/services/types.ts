export interface IGroupDataRules {
  /** Usuários podem fazer transferencia entre si */
  userTransfer: boolean;
}

export interface IGroupData {
  volume: number;
  name: string;
  rules: IGroupDataRules;
  owner: string;
}
