import {  ValidationError } from "express-validator"

// interface for format Response Data from Api
export interface ResponseDataInterface {
    data?: [any];
    message?: string;
    errors?: any[];
    inputValidation?: ValidationError[]
    url?: string;
    time?:  string;
}

// interface for format Response Data from services
export interface ReturnDataInterface {
    statusCode: number;
    response: ResponseDataInterface
}