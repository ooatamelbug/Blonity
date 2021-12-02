import "reflect-metadata";
// import express
import express, { Application } from "express";
// import dotenv and config it
import dotenv from "dotenv";
dotenv.config();
// import db
import databaseConnection from "./settings/database";
// import cors
import cors from "cors";
// import helmet
import helmet from "helmet";
// import handleError
import handleError from "./settings/errorHandle";

/**
 * the function to create app of express
 */
const createApp = async () => {
    // create express app
    const app: Application = express();
    // use the json deal type in app
    app.use(express.json());
    
    // connect db 
    databaseConnection();
    // app use cors allow access cors
    app.use(cors({
        origin: "*",
        allowedHeaders: ['Origin', 'X-Request-With', 'Content-Type', 'Accept'],
        methods: ['DELETE', 'PATCH', 'PUT', 'GET', 'POST', 'OPTIONS'],
        preflightContinue: false,
        maxAge: 60 * 60 * 24,
        optionsSuccessStatus: 204
    }));

    // app use helmet to Security header
    app.use(helmet({
        contentSecurityPolicy: true,
        crossOriginResourcePolicy: true
    }));

    // use handleError
    app.use(handleError);

    // app listen to PORT 
    app.listen(process.env.PORT, () => {
        console.log(`the app is run on ${process.env.PORT}`);
    });
}

// run createApp function
createApp().catch( error => {
    console.log(error);
});