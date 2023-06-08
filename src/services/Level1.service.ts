import { ILevel1Service } from "../interfaces/ILevel1.interface";
import { ActorRepository } from "../repositories/Actor.repository";
import { FilmRepository } from "../repositories/Film.repository";

export class Level1Service implements ILevel1Service {
  constructor(
    private readonly actorRepository: ActorRepository = new ActorRepository(),
    private readonly filmRepository: FilmRepository = new FilmRepository(),
  ) {}

  async bai1() {
    const rows = await this.actorRepository.getFirstAndLastName();
    return rows;
  }

  async bai2() {
    const rows =
      await this.filmRepository.getTitleFilmWithRentalRatesAndReplacementCosts();
    return rows;
  }

  async bai3() {
    const rows =
      await this.filmRepository.getTop5FilmWithTheNumberOfTimesRented();
    return rows;
  }

  async bai4() {
    const rows = this.filmRepository.getAvergeRentalForEachCategoryOfFilm();
    return rows;
  }

  async bai7() {
    const rows = this.actorRepository.getAllActorsAppearedMoreThan20Films();
    return rows;
  }

  async bai8() {
    const rows =
      this.filmRepository.getTitlesAllFilmsHaveRatingPG13AndLengthMoreThan120();
    return rows;
  }
}
