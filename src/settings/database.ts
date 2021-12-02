import { createConnection } from "typeorm";

const databaseConnection = async () => {
  try {
    await createConnection({
      database: "blonity",
      password: "postgres",
      type: "postgres",
      port: 5433,
      logging: true,
      entities: ["../entities/*.ts"],
      synchronize: true,
    });
    console.log("Connection created");
  } catch (error) {
      throw error;
  }
};

export default databaseConnection;
