import app from './app';
// import dotenv and config it
import dotenv from "dotenv";
dotenv.config();

/**
 * the function to create app of express
 */
const createApp = async () => {
    // app listen to PORT 
    app.listen(process.env.PORT, () => {
        console.log(`the app is run on ${process.env.PORT}`);
    }); 

}

// run createApp function
createApp().catch( error => {
    console.log(error);
});
