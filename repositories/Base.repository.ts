import { pool } from "../config/database";
import { RowDataPacket } from "mysql2";

export class BaseRepository {
  constructor(protected sql = pool.promise()) {}
}
