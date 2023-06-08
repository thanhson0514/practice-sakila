/* eslint-disable @typescript-eslint/no-unused-vars */
import { pool } from "../config/database";
import { RowDataPacket } from 'mysql2';

export class BaseRepository<T extends RowDataPacket> {
  constructor(protected sql = pool.promise()) {}

  async query(sqlCommand: string) {
    const [rows, fields] = await this.sql.query<T[]>(sqlCommand);
    return rows;
  }
}
