import { RowDataPacket } from "mysql2";

export interface IActor extends RowDataPacket {
  actor_id?: number;
  first_name: string;
  last_name: string;
}
