import { Request, Response, NextFunction } from "express";
import { IErrorResponse } from "../interfaces/IErrorResponse.interface";

export const error = (
  error: IErrorResponse,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { message, statusCode } = error;

  return res.status(statusCode || 500).jsonp({
    message: message,
    success: false,
  });
};
