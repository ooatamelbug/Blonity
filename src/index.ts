import "reflect-metadata";
// import express
import express, { Application } from "express";
// import dotenv and config it
import dotenv from "dotenv";
dotenv.config();

/**
 * the function to create app of express
 */
const createApp = async () => {
    // create express app
    const app: Application = express();
    // use the json deal type in app
    app.use(express.json());
    // app listen to PORT 
    app.listen(process.env.PORT, () => {
        console.log(`the app is run on ${process.env.PORT}`);
    });
}

// run createApp function
createApp().catch( error => {
    console.log(error);
});