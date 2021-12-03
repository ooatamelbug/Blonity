// import ResponseDataInterface from interfaces
import { ResponseDataInterface } from "./../settings/interfaces";
// import some function from express validator and express
import { ValidationError, validationResult, Result } from "express-validator";
import { Request, Response, NextFunction } from "express";

/**
 * this function for handel the error of Validation Error
 * @param req 
 * @param res 
 * @param next 
 * @returns 
 */
export const validate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // put the error of Validation Result into errors 
    const errors: Result<ValidationError> = await validationResult(req);
    // create two variable one for hand put into it the format of ValidationError
    // and other for put error message
    const errorData: ValidationError[] = [];
    const errorMessages: string[] = [];
    // check if errors is not empty
    if (!errors.isEmpty()) {
      // make loop of all elem in  errors to push every error to 
      // errorData and push msg to errorMessages
      for (let error of errors.array()) {
        errorData.push(error);
        errorMessages.push(error.msg);
      }
      // create returnJson put into it ResponseDataInterface
      const returnJson: ResponseDataInterface = {
        message: "Validation Error",
        inputValidation: errorData,
        errors: errorMessages,
        url: req.originalUrl,
        time: new Date().toISOString()
      };

      // return status and data of response
      return res.status(400).json(returnJson);
    }
    next();
  } catch (error) {
    console.log(error);
    throw error;
  }
};
