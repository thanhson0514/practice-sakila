/* eslint-disable @typescript-eslint/no-unused-vars */
import { ICustomer } from "../interfaces/ICustomer.interface";
import { BaseRepository } from "./Base.repository";

export class CustomerRepository extends BaseRepository<ICustomer> {
  constructor() {
    super();
  }

  async getTop10CustomersGeneratedMostRevenueForTheStore(): Promise<
    ICustomer[]
  > {
    const sqlCommand = `
      SELECT 
        customer.first_name, 
        customer.last_name, 
        SUM(payment.amount) AS 'total revenue generated'
      FROM customer
      INNER JOIN payment
      ON customer.customer_id = payment.customer_id
      GROUP BY 
        customer.customer_id, 
        customer.first_name, 
        customer.last_name
      ORDER BY COUNT(*) DESC
      LIMIT 10
    `;
    const [rows, fields] = await this.sql.query<ICustomer[]>(sqlCommand);
    return rows;
  }

  async getAllCustomersHaveRentedFilmsInAllCategory(): Promise<ICustomer[]> {
    const sqlCommand = "";
    const [rows, fields] = await this.sql.query<ICustomer[]>(sqlCommand);
    return rows;
  }
}
