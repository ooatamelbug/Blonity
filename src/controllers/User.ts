// import ReturnDataInterface , some types from  express and UserServices
import { ReturnDataInterface } from './../settings/interfaces';
import { Request, Response } from "express";
import UserServices from "../services/User";

/**
 * create userController class
 */
class userController {
    static async registerUser ( req: Request, res: Response) {
        // put come from registerUser into result
        const result = <ReturnDataInterface>await UserServices.registerUser(req.body);
        // pass the result to the res and statusCode and data response
        return res.status(result.statusCode).json(result.response);
    }
}

export default userController;