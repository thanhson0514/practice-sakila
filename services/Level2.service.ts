import { ICustomer } from "../interfaces/ICustomer.interface";
import { ILevel2Service } from "../interfaces/ILevel2.interface";
import { CustomerRepository } from "../repositories/Customer.repository";

export class Level2Service implements ILevel2Service {
  constructor(
    private customerRepository: CustomerRepository = new CustomerRepository()
  ) {}

  async bai1() {
    const rows =
      await this.customerRepository.getTop10CustomersGeneratedMostRevenueForTheStore();
    return rows;
  }
}
