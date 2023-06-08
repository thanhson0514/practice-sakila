import { IActor } from "../interfaces/IActor.interface";
import { IFilm } from "../interfaces/IFilm.interface";
import { ILevel2Service } from "../interfaces/ILevel2.interface";
import { ActorRepository } from "../repositories/Actor.repository";
import { CustomerRepository } from "../repositories/Customer.repository";
import { FilmRepository } from "../repositories/Film.repository";

export class Level2Service implements ILevel2Service {
  constructor(
    private readonly customerRepository: CustomerRepository = new CustomerRepository(),
    private readonly filmRepository: FilmRepository = new FilmRepository(),
    private readonly actorRepository: ActorRepository = new ActorRepository(),
  ) {}

  async bai1() {
    const rows =
      await this.customerRepository.getTop10CustomersGeneratedMostRevenueForTheStore();
    return rows;
  }

  async bai2() {
    const rows =
      await this.customerRepository.getAllCustomersHaveRentedFilmsInAllCategory();
    return rows;
  }

  async bai3(): Promise<IFilm[]> {
    const rows =
      await this.filmRepository.getTitleFilmsRentalLeastOnceButNeverReturned();
    return rows;
  }

  async bai4(): Promise<IActor[]> {
    const rows =
      await this.actorRepository.getNameOfAllActorsAppearedLeastOneFilmInEachCategory();
    return rows;
  }
}
