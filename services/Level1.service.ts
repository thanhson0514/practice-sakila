import { ActorRepository } from "../repositories/Actor.repository";
import { FilmRepository } from "../repositories/Film.repository";

export class Level1Service {
  constructor(
    private actorRepository: ActorRepository = new ActorRepository(),
    private filmRepository: FilmRepository = new FilmRepository()
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

  async bai3() {}

  async bai4() {}
}
