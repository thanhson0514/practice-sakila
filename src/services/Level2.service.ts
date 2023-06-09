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
      await this.customerRepository.getNameAndContactInfoAllCustomersRentedFilmInAllCategories();
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

  async bai6(): Promise<IActor[]> {
    const rows =
      this.actorRepository.getTotalReveueEachActorBaseOnRentalFeeOfFilm();
    return rows;
  }

  async bai7(): Promise<IActor[]> {
    const rows =
      await this.actorRepository.getNameAllActorsAppearedInLeastOneFilmRatingRNeverAppearedRatingG();
    return rows;
  }

  async bai8(): Promise<IFilm[]> {
    const rows =
      await this.filmRepository.getTitleAllFilmsRentedMoreThan50CustomersNeverSameCustomerMoreThan1();
    return rows;
  }

  async bai10(): Promise<IFilm[]> {
    const rows =
      await this.filmRepository.getTitleAllFilmsHasEverRentedFromActionCategory();
    return rows;
  }
}
