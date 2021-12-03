// import type Application from express
import { Application } from "express";
// import userRouter from routes
import userRouter from "../routes/User";

/**
 * this function for handle route of all 
 * part of app 
 * @param app 
 */
export const routerApp = (app: Application) => {
    app.use('/api/user', userRouter);
}