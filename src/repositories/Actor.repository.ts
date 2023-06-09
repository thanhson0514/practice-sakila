/* eslint-disable @typescript-eslint/no-unused-vars */
import { BaseRepository } from "./Base.repository";
import { IActor } from "../interfaces/IActor.interface";

export class ActorRepository extends BaseRepository<IActor> {
  constructor() {
    super();
  }

  async getFirstAndLastName(): Promise<IActor[]> {
    const sqlCommand = "SELECT first_name, last_name FROM `actor`";
    const [rows, fields] = await this.sql.query<IActor[]>(sqlCommand);
    return rows;
  }

  async getAllActorsAppearedMoreThan20Films(): Promise<IActor[]> {
    const sqlCommand = `
      SELECT
      CONCAT(
        actor.first_name,
        ' ',
        actor.last_name
      ) AS full_name
      FROM film_actor
      LEFT JOIN actor ON actor.actor_id = film_actor.actor_id
      GROUP BY film_actor.actor_id
      HAVING COUNT(film_actor.actor_id) > 20;
    `;
    const [rows, fields] = await this.sql.query<IActor[]>(sqlCommand);
    return rows;
  }

  async getNameOfAllActorsAppearedLeastOneFilmInEachCategory(): Promise<
    IActor[]
  > {
    const sqlCommand = `
      SELECT first_name, last_name
      FROM actor
      WHERE actor_id IN (
          SELECT actor_id
          FROM film_actor
          WHERE film_id IN (
                  SELECT
                      film_category.film_id
                  FROM
                      film_category
                  GROUP BY
                      film_category.category_id,
                      film_category.film_id
              )
        )
    `;

    const [rows, fields] = await this.sql.query<IActor[]>(sqlCommand);
    return rows;
  }

  async getNameAllActorsAppearedInLeastOneFilmRatingRNeverAppearedRatingG(): Promise<
    IActor[]
  > {
    const sqlCommand = `
      SELECT first_name, last_name
      FROM actor
      WHERE actor_id IN (
        SELECT actor_rating.actor_id
        FROM (
          SELECT actor_id, rating
          FROM film
          INNER JOIN film_actor ON film_actor.film_id = film.film_id
          GROUP BY actor_id, rating
          HAVING
            rating LIKE 'R'
            OR rating LIKE 'G'
        ) as actor_rating
        GROUP BY actor_rating.actor_id
        HAVING COUNT(*) < 2
      )
    `;

    const [rows, fields] = await this.sql.query<IActor[]>(sqlCommand);
    return rows;
  }

  async getTotalReveueEachActorBaseOnRentalFeeOfFilm(): Promise<IActor[]> {
    const sqlCommand = `
      SELECT 
        actor.first_name, 
        actor.last_name, 
        SUM(film_inventory.quantity_of_rental) as 'the total revenue'
      FROM film_actor
      INNER JOIN (
        SELECT film.title, inventory.film_id, film.rental_rate * COUNT(*) as quantity_of_rental 
        FROM rental
        INNER JOIN inventory
        ON rental.inventory_id = inventory.inventory_id
        INNER JOIN film
        ON inventory.film_id = film.film_id
        GROUP BY inventory.film_id
      ) as film_inventory
      ON film_inventory.film_id = film_actor.film_id
      INNER JOIN actor
      ON actor.actor_id = film_actor.actor_id
      GROUP BY actor.actor_id
    `;

    const [rows, fields] = await this.sql.query<IActor[]>(sqlCommand);
    return rows;
  }
}
