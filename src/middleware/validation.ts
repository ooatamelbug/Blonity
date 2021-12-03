import { ResponseDataInterface } from "./../settings/interfaces";
import { ValidationError, validationResult, Result } from "express-validator";
import { Request, Response, NextFunction } from "express";

export const validate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors: Result<ValidationError> = validationResult(req);
  const errorData: ValidationError[] = [];
  if (!errors.isEmpty()) {
    for (let error of errors.array()) {
      errorData.push(error);
    }
    res.status(400).json({
      message: "Validation Error",
      errors: errorData
    });
  }
  next();
};
