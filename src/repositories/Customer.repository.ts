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

  async getNameAndContactInfoAllCustomersRentedFilmInAllCategories(): Promise<
    ICustomer[]
  > {
    const sqlCommand = `
      SELECT first_name, last_name, email FROM customer
      WHERE customer_id IN (
        SELECT customer_category.customer_id FROM (
              SELECT rental.customer_id, film_category.category_id FROM rental
              INNER JOIN inventory
              ON rental.inventory_id = inventory.inventory_id
              INNER JOIN  film_category
              ON film_category.film_id = inventory.film_id
              GROUP BY rental.customer_id, film_category.category_id
          ) as customer_category
          GROUP BY customer_category.customer_id
          HAVING COUNT(*) = (SELECT COUNT(*) FROM category)
      )
    `;

    const [rows, fields] = await this.sql.query<ICustomer[]>(sqlCommand);
    return rows;
  }
}
