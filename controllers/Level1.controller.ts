import { Level1Service } from "../services/Level1.service";
import { Request, Response, NextFunction } from "express";
import { ErrorResponse } from "../utils/ErrorResponse";

export class Level1Controller {
  constructor(private level1Service: Level1Service = new Level1Service()) {}

  async bai1(req: Request, res: Response, next: NextFunction) {
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
  }

  async bai2(req: Request, res: Response, next: NextFunction) {
    try {
      const rows = await this.level1Service.bai2();
      return res.status(200).jsonp({
        message:
          "Write a SQL query to return the titles of all films in the database, along with their rental rates and replacement costs.",
        results: rows,
      });
    } catch (error: any) {
      next(new ErrorResponse(error["message"], 500));
    }
  }
}
