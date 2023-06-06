import { BaseRepository } from "./Base.repository";
import { IFilm } from "../interfaces/IFilm.interface";

export class FilmRepository extends BaseRepository {
  constructor() {
    super();
  }

  async getTitleFilmWithRentalRatesAndReplacementCosts(): Promise<IFilm[]> {
    const sqlCommand: string =
      "SELECT title, rental_rates, replacement_cost FROM `film`";
    const [rows, fields] = await this.sql.query<IFilm[]>(sqlCommand);
    return rows;
  }
}
