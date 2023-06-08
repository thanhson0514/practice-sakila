import { IActor } from "./IActor.interface";
import { IFilm } from "./IFilm.interface";

export interface ILevel1Service {
  bai1(): Promise<IActor[]>;
  bai2(): Promise<IFilm[]>;
  bai3(): Promise<IFilm[]>;
  bai4(): Promise<IFilm[]>;
  bai7(): Promise<IActor[]>;
  bai8(): Promise<IFilm[]>;
}
