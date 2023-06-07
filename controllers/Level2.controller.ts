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
          "Write a SQL query to return the first and last names of all actors in the database.",
        results: rows,
      });
    } catch (error: any) {
      next(new ErrorResponse(error["message"], 500));
    }
  };
}
