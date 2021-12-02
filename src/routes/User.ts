// import Router from express
import { Router } from "express";
// import userController from controllers
import userController from "../controllers/User";

// to able to access the params from parent route
const router = Router({ mergeParams: true});

/**
 * the route for create new user
 * @path /create
 * @controller userController
 * @function registerUser
 */
router.post('/create', [], userController.registerUser);



// export router
export default router;