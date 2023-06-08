import { RowDataPacket } from "mysql2";

export interface IFilm extends RowDataPacket {
  film_id?: number;
  title: string;
  description: string;
  release_year: number;
  language_id: number;
  original_language_id: number | undefined | null;
  rental_duration: number;
  rental_rate: number;
  length: number;
  replacement_cost: number;
  rating: string;
  special_features: string;
}
