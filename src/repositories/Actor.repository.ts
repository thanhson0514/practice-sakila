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
}
