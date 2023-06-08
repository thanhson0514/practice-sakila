import { IActor } from "./IActor.interface";
import { ICustomer } from "./ICustomer.interface";
import { IFilm } from "./IFilm.interface";

export interface ILevel2Service {
  bai1(): Promise<ICustomer[]>;
  bai2(): Promise<ICustomer[]>;
  bai3(): Promise<IFilm[]>;
  bai4(): Promise<IActor[]>;
}
