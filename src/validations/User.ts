// import some function from express validator
import { body, check, ValidationChain } from "express-validator";

// make validation array for register User input
export const registerUserValidation: ValidationChain[] = [
  body("username")
    .trim()
    .notEmpty()
    .withMessage("username is not allow to be Empty"),
  body("password")
    .trim()
    .notEmpty()
    .withMessage("password is not allowed to be null"),
];
