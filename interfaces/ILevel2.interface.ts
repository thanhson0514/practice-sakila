import { ICustomer } from "./ICustomer.interface";

export interface ILevel2Service {
  bai1(): Promise<ICustomer[]>;
}
