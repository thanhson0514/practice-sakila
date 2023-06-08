import { NextFunction, Request, Response } from "express";
import { ILevel2Service } from "../interfaces/ILevel2.interface";
import { Level2Service } from "../services/Level2.service";
import { ErrorResponse } from "../utils/ErrorResponse";

export class Level2Controller {
  constructor(private level2Service: ILevel2Service = new Level2Service()) {}
  bai1 = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const rows = await this.level2Service.bai1();
      return res.status(200).jsonp({
        message:
          "Write a SQL query to return the top 10 customers who have generated the most revenue for the store, including their names and total revenue generated.",
        results: rows,
      });
    } catch (error: any) {
      next(new ErrorResponse(error["message"], 500));
    }
  };

  bai2 = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const rows = await this.level2Service.bai2();
      return res.status(200).jsonp({
        message:
          "Write a SQL query to return the names and contact information of all customers who have rented films in all categories in the database.",
        results: rows,
      });
    } catch (error: any) {
      next(new ErrorResponse(error["message"], 500));
    }
  };

  bai3 = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const rows = await this.level2Service.bai3();
      return res.status(200).jsonp({
        message:
          "Write a SQL query to return the titles of all films in the database that have been rented at least once but never returned.",
        results: rows,
      });
    } catch (error: any) {
      next(new ErrorResponse(error["message"], 500));
    }
  };

  bai4 = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const rows = await this.level2Service.bai4();
      return res.status(200).jsonp({
        message:
          "Write a SQL query to return the names of all actors who have appeared in at least one film in each category in the database.",
        results: rows,
      });
    } catch (error: any) {
      next(new ErrorResponse(error["message"], 500));
    }
  };
}
