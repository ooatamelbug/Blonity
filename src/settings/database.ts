// import createConnection from typeorm
import { createConnection } from "typeorm";

/**
 * create function databaseConnection 
 * it return complete create connection
 */
const databaseConnection = async () => {
  try {
    // await to createConnection with db
    await createConnection({
      database: "blonity",
      password: "postgres",
      username: "postgres",
      type: "postgres",
      port: 5432,
      logging: false,
      entities: ["../entities/**.ts"],
      synchronize: true,
    });
    // log 
    console.log("Connection created");
  } catch (error) {
      // return error if connection get error
      throw error;
  }
};

export default databaseConnection;
