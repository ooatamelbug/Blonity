import { ResponseDataInterface } from "../settings/interfaces";
import app from "../app";
import supertest from "supertest";
import databaseConnection from "../settings/database";

const request = supertest(app);

beforeAll(async () => {
  jest.setTimeout(100000);
  await databaseConnection();
});

describe("test user service api", () => {
  it("test user if empty value", async () => {
      const res = await request
      .post("/api/user/create")
      .send({
        username: "",
      });
      expect(res.statusCode).toBe(400);
      expect(res.body)
  });

  it("test user return object", async () => {
      const res = await request
        .post("/api/user/create")
        .send({
          username: "name",
        });
        expect(res.statusCode).toEqual(200);
  });
});