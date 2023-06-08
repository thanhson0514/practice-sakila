import { Request, Response } from "express";
import { IErrorResponse } from "../interfaces/IErrorResponse.interface";

export const error = (error: IErrorResponse, req: Request, res: Response) => {
  const { message, statusCode } = error;

  return res.status(statusCode || 500).jsonp({
    message: message,
    success: false,
  });
};
