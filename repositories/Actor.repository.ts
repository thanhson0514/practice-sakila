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
}
