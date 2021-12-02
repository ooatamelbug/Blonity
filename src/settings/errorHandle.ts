import { ResponseDataInterface } from './interfaces';
import { Request, Response, NextFunction } from "express";

// create ErrorException interface to handle error 
interface ErrorException extends Error {
    status?: number;
    data?: [any];
}

const handleError = () => {
  return async (
    req: Request,
    res: Response,
    next: NextFunction,
    errors: ErrorException
  ) => {
    // handel the error data and message and url and path  
    const errorStatus: number = errors.status || 500;
    const errorMessage: string = errors.message;
    const errorData = errors.data;
    const url =  req.originalUrl;
    const time = new Date().toISOString();

    // return status and data of response
    const response: ResponseDataInterface = {
        message: errorMessage,
        errors: errorData,
        url,
        time
    };
    return res.status(errorStatus).json(response);

    next();
  };
};

export default handleError;
