import { Level1Service } from "../services/Level1.service";
import { Request, Response, NextFunction } from "express";
import { ErrorResponse } from "../utils/ErrorResponse";
import { ILevel1Service } from "../interfaces/ILevel1.interface";

export class Level1Controller {
  constructor(private level1Service: ILevel1Service = new Level1Service()) {}

  bai1 = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const rows = await this.level1Service.bai1();
      return res.status(200).jsonp({
        message:
          "Write a SQL query to return the first and last names of all actors in the database.",
        results: rows,
      });
    } catch (error: any) {
      next(new ErrorResponse(error["message"], 500));
    }
  };

  bai2 = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const rows = await this.level1Service.bai2();
      return res.status(200).jsonp({
        message:
          "Write a SQL query to return the titles of all films in the database, along with their rental rates and replacement costs.",
        results: rows,
      });
    } catch (error: any) {
      console.log(error);
      next(new ErrorResponse(error["message"], 500));
    }
  };

  bai3 = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const rows = await this.level1Service.bai3();
      return res.status(200).jsonp({
        message:
          "Write a SQL query to return the top 5 most rented films in the database, along with the number of times they have been rented.",
        results: rows,
      });
    } catch (error: any) {
      console.log(error);
      next(new ErrorResponse(error["message"], 500));
    }
  };

  bai4 = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const rows = await this.level1Service.bai4();
      return res.status(200).jsonp({
        message:
          "Write a SQL query to return the average rental duration for each category of film in the database.",
        results: rows,
      });
    } catch (error: any) {
      console.log(error);
      next(new ErrorResponse(error["message"], 500));
    }
  };

  bai7 = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const rows = await this.level1Service.bai7();
      return res.status(200).jsonp({
        message:
          "Write a SQL query to return the names of all actors who have appeared in more than 20 films in the database.",
        results: rows,
      });
    } catch (error: any) {
      console.log(error);
      next(new ErrorResponse(error["message"], 500));
    }
  };

  bai8 = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const rows = await this.level1Service.bai8();
      return res.status(200).jsonp({
        message:
          "Write a SQL query to return the titles of all films in the database that have a rating of 'PG-13' and a length of more than 120 minutes.",
        results: rows,
      });
    } catch (error: any) {
      console.log(error);
      next(new ErrorResponse(error["message"], 500));
    }
  };
}
