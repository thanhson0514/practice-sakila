import { BaseRepository } from "./Base.repository";
import { IActor } from "../interfaces/IActor.interface";

export class ActorRepository extends BaseRepository {
  constructor() {
    super();
  }

  async getFirstAndLastName(): Promise<IActor[]> {
    const sqlCommand: string = "SELECT first_name, last_name FROM `actor`";
    const [rows, fields] = await this.sql.query<IActor[]>(sqlCommand);
    return rows;
  }

  async getAllActorsAppearedMoreThan20Films(): Promise<IActor[]> {
    const sqlCommand: string = `
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
}
