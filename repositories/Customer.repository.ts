import { ICustomer } from "../interfaces/ICustomer.interface";
import { BaseRepository } from "./Base.repository";

export class CustomerRepository extends BaseRepository {
  constructor() {
    super();
  }

  async getTop10CustomersGeneratedMostRevenueForTheStore(): Promise<
    ICustomer[]
  > {
    const sqlCommand: string = `SELECT * FROM customer`;
    const [rows, fields] = await this.sql.query<ICustomer[]>(sqlCommand);
    return rows;
  }
}
