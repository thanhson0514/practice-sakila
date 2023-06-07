import { RowDataPacket } from "mysql2";

export interface ICustomer extends RowDataPacket {
  customer_id?: number;
  store_id: number;
  first_name: string;
  last_name: string;
  email: string;
  address_id: number;
  active: boolean;
}
