/* eslint-disable @typescript-eslint/no-unused-vars */
import { BaseRepository } from "./Base.repository";
import { IFilm } from "../interfaces/IFilm.interface";

export class FilmRepository extends BaseRepository<IFilm> {
  constructor() {
    super();
  }

  async getTitleFilmWithRentalRatesAndReplacementCosts(): Promise<IFilm[]> {
    const sqlCommand =
      "SELECT title, rental_rate, replacement_cost FROM `film`";
    const [rows, fields] = await this.sql.query<IFilm[]>(sqlCommand);
    return rows;
  }

  async getTop5FilmWithTheNumberOfTimesRented(): Promise<IFilm[]> {
    const sqlCommand = `
      SELECT film.film_id, film.title, COUNT(*) AS 'the number of times they have been rented'  
      FROM film
      LEFT JOIN (
        SELECT inventory.* FROM inventory
          LEFT JOIN rental
          ON rental.inventory_id = inventory.inventory_id
      ) AS inventory_rental
      ON film.film_id = inventory_rental.film_id
      GROUP BY film.film_id, film.title
      ORDER BY COUNT(*) DESC
      LIMIT 5
    `;

    const [rows, fields] = await this.sql.query<IFilm[]>(sqlCommand);
    return rows;
  }

  async getAvergeRentalForEachCategoryOfFilm(): Promise<IFilm[]> {
    const sqlCommand = `
      SELECT AVG(rental_duration) AS "the average rental duration for each category" 
      FROM film
      INNER JOIN film_category
      ON film.film_id = film_category.film_id
      GROUP BY category_id;
    `;

    const [rows, fields] = await this.sql.query<IFilm[]>(sqlCommand);
    return rows;
  }

  async getTitlesAllFilmsHaveRatingPG13AndLengthMoreThan120(): Promise<
    IFilm[]
  > {
    const sqlCommand = `
      SELECT title
      FROM film
      WHERE
        rating = 'PG-13'
        AND length > 120;
    `;
    const [rows, fields] = await this.sql.query<IFilm[]>(sqlCommand);
    return rows;
  }

  async getTitleFilmsRentalLeastOnceButNeverReturned(): Promise<IFilm[]> {
    const sqlCommand = `
      SELECT DISTINCT title
      FROM film
        INNER JOIN inventory ON inventory.film_id = film.film_id
        LEFT JOIN rental ON inventory.inventory_id = rental.inventory_id
      WHERE return_date IS NULL
    `;

    const [rows, fields] = await this.sql.query<IFilm[]>(sqlCommand);
    return rows;
  }

  async getTitleAllFilmsRentedMoreThan50CustomersNeverSameCustomerMoreThan1() {
    const sqlCommand = `
      SELECT title
      FROM film
      WHERE film.film_id IN (
        SELECT film.film_id
        FROM film
          LEFT JOIN (
            SELECT
              inventory.film_id AS 'film_id'
            FROM
              inventory
            INNER JOIN rental ON rental.inventory_id = inventory.inventory_id
            GROUP BY
              inventory.film_id,
              customer_id
        ) as inventory_rental 
        ON inventory_rental.film_id = film.film_id
        GROUP BY film.film_id
        HAVING COUNT(*) > 50
      )
    `;

    const [rows, fields] = await this.sql.query<IFilm[]>(sqlCommand);
    return rows;
  }

  async getTitleAllFilmsHasEverRentedFromActionCategory(): Promise<IFilm[]> {
    const sqlCommand = `
      SELECT
        film.title
      FROM inventory
        INNER JOIN film_category ON film_category.film_id = inventory.film_id
        INNER JOIN film ON film.film_id = inventory.film_id
        INNER JOIN category ON category.category_id = film_category.category_id
      WHERE
        category.name LIKE 'Action'
      GROUP BY film.film_id
    `;

    const [rows, fields] = await this.sql.query<IFilm[]>(sqlCommand);
    return rows;
  }
}
